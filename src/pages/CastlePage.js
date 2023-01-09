import Nav from "../components/headerComponents/Nav.js";
import Hero from "../components/headerComponents/Hero.js";
import CastleInfo from "../components/CastleInfo.js";

export default class CastlePage extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.props = {
            nav: {
                navContact: {
                    contact: {link: "./index.html#contact-form" , text: "Kontakt"}, 
                    authors: {link: "./index.html#authors", text: "Autorzy"}
                },
                ul: {
                    hr: {
                        display: true
                    },
                    class: "desc-list",
                    content: {
                        text: ["Strona Główna", "Poprzedni Zamek", "Następny Zamek", "Źródło"],
                        router: [false, true, true, false],
                        target: [false, false, false, true]
                    }
                }
            }
        }
        //później to zmerge'ować do ula z utility
        this.state = {
            nav:{
                ul:{
                    content: {
                        links: ["index.html"]
                    }
                }
            }
        }
        this.setState = ((callback)=>{
            callback();
            this.setup();
            this.render();
        })
        window.addEventListener('popstate', ()=>this.rerender())
    }
    connectedCallback() {
        fetch("./src/details.json")
        .then((response) => {
            if(!response.ok){
                throw new Error('failed loading, please try again later');
            }
            return response;
        }).then((response) => this.props.data = response.json())
        .then(() => this.setup())
        .then(() => this.render())
    }
    async setup(){
        const route = window.location.href.split("=");
        route.push(...route[route.length-1].split("#"));
        this.state.route = route;
        const data = await this.props.data;
        //route[0] = current castle argument in url. [1] is #, current id positioning.
        const currentCastleData = data.details[this.state.route[1]];
        if(currentCastleData){
            //filling nav links 
            const links = this.state.nav.ul.content.links;
            const numberRegex = /\d/;
            let currentCastleNumber = parseInt(this.state.route[1].match(numberRegex)[0]);
            const castlesQuantity = Object.keys(data.details).length;
            if(currentCastleNumber<2){
                links.push(this.state.route[0].concat(`=castle${castlesQuantity}`))
                links.push(this.state.route[0].concat(`=castle${currentCastleNumber+1}`))
            }else if(currentCastleNumber >= castlesQuantity){
                links.push(this.state.route[0].concat(`=castle${currentCastleNumber-1}`))
                links.push(this.state.route[0].concat(`=castle1`))
            }else{
                links.push(this.state.route[0].concat(`=castle${currentCastleNumber-1}`))
                links.push(this.state.route[0].concat(`=castle${currentCastleNumber+1}`))
            }
            links.push(currentCastleData.address);
            //maping images from details so i can use them below in props hero
            let viewImages = Object.keys(currentCastleData)
            .filter((item) => item.slice(0,3) === "img");
            //checking if we have more than 3 images, if so ignore them with this map function
            function mapImages(item, index){
                return {
                    alt: `Zdjęcie ${currentCastleData.title + " " + index}`,
                    src: currentCastleData[item],
                    id: `hero-img-${index+1}`
                };
            };
            viewImages.length > 3 
            ? viewImages = viewImages.slice(0,3).map(mapImages)
            : viewImages = viewImages.map(mapImages)

            this.props.hero = {
                description_container: {
                    class: "desc-hero",
                    title: currentCastleData.title,
                    details: {
                        localisation: currentCastleData.localisation,
                        gps: currentCastleData.GPS,
                    },
                    description: {
                        class: "desc-p",
                        text: currentCastleData.description + "<br/>" + currentCastleData.detailed_description
                    },
                    button: {
                        class: "desc-button",
                        text: "Zobacz na Mapie",
                        link: currentCastleData.googleMaps
                    }
                },
                view_container: {
                    class: "view-hero",
                    images: viewImages
                }
            }
        }else{
            this.error();
        }
    }
    async resetNav(){
        let links = this.state.nav.ul.content.links;
        this.state.nav.ul.content.links = [links[0]];
    }
    async error(){
        this.shadow.innerHTML += "Sorry, we haven't got the content you're looking for! : (, you'll be redirected in a second to previous site"
        setTimeout(()=>{window.history.back();}, 2000)
    }

    async render(){
        this.shadow.innerHTML += `<link rel="stylesheet" href = "./style/css/style.css">`;
        const data = await this.props.data;
        const currentCastle = this.state.route[1];
        //Dunno why Obj.assign, and {..., ...} merging did overwrite same properties, so only the later one remained, without previous props
        const navData = {
            ...this.props.nav,
            ul:{
                ...this.props.nav.ul,
                content : {
                    ...this.props.nav.ul.content, 
                    links: this.state.nav.ul.content.links
                }
            }   
        } 
        const $nav = new Nav(navData, {shadowThis: this}).$el;
        const $hero = new Hero(this.props.hero).$el;
        let $moreDetailsContainer = ()=>{
            const attributeNames = ["first", "second", "third", "fourth", "fifth", "sixth"]
            const castleKeys = Object.keys(data.more[currentCastle])
            const attributeValues = castleKeys.map((key, index)=>{
                return `${attributeNames[index]}="<h5>${key[0].toUpperCase() + key.slice(1,)}:</h5> ${data.more[currentCastle][key]}"`
            });
            return `<details-component id="details-container" title="${data.details[currentCastle].title}" ${attributeValues.join(" ")}></details-component>`
        }
        $moreDetailsContainer = $moreDetailsContainer();
        this.shadow.append($nav);
        this.shadow.append($hero);
        this.shadow.innerHTML += $moreDetailsContainer;
    }
    async rerender(){
        this.shadow.innerHTML = "";
        this.resetNav();
        this.setup();
        this.render();
    }
}
customElements.define('castle-page', CastlePage);
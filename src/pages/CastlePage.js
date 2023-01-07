import Nav from "../components/headerComponents/Nav.js";
import Hero from "../components/headerComponents/Hero.js";
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
                        text: ["Strona Główna", "Szczegóły", "Jeszcze Więcej"]
                    }
                }
            }
        }
        //później to zmerge'ować do ula z utility
        this.state = {
            nav:{
                ul:{
                    content: {
                        links: ["index.html", "#more"] 
                    }
                }
            }
        }
        this.setState = ((callback)=>{
            callback();
            this.setup();
            this.render();
        })
    }
    connectedCallback() {
        let route = window.location.href.split("=");
        route = route[route.length-1].split("#");
        fetch("./src/details.json")
        .then((response) => {
            if(!response.ok){
                throw new Error('failed loading, please try again later');
            }
            return response;
        }).then((response) => this.props.data = response.json())
        .then(() => {
            this.state.route = route;
        })
        .then(() => this.setup())
        .then(() => this.render())
    }
    async setup(){
        const data = await this.props.data;
        //route[0] = current castle argument in url. [1] is #, current id positioning.
        const currentCastleData = data.details[this.state.route[0]];
        if(currentCastleData){
            const links = this.state.nav.ul.content.links;
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
                        text: currentCastleData.description
                    },
                    button: {
                        class: "desc-button",
                        text: "Zobacz na Mapie",
                        link: "https://www.facebook.com/" 
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
    async error(){
        this.shadow.innerHTML += "Sorry, we haven't got the content you're looking for! : (, you'll be redirected in a second to previous site"
        setTimeout(()=>{window.history.back();}, 2000)
    }

    async render(){
        this.shadow.innerHTML += `<link rel="stylesheet" href = "./style/css/style.css">`;
        const route = window.location.href.split("=");
        const data = await this.props.data;
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
        this.shadow.append($nav);
        this.shadow.append($hero);
        // const $nav = new Nav({...data, ...this.state})
    }
}
customElements.define('castle-page', CastlePage);
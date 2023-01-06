import Nav from "../components/headerComponents/Nav.js";

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
                        text: ["Strona Główna", "Szczegóły", "Pokaż na mapie"]
                    }
                }
            }
        }
        //później to zmerge'ować do ula z utility
        this.state = {
            nav:{
                ul:{
                    content: {
                        links: ["index.html", "#more"] //ostatni to będzie data.address jako even more
                        //index.html do zmiany! na funkcję która usuwa z pathname'a argument castle by nie refreshowało, czy to będzie działać?
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
        const route = window.location.href.split("=");
        let fetchingVariable = fetch("./src/details.json")
        .then((response) => {
            if(!response.ok){
                throw new Error('failed loading, please try again later');
            }
            return response;
        }).then((response) => this.props.data = response.json())
        .then(() => this.currentCastle = route[route.length-1])
        .then(() => this.setup())
        .then(() => this.render())
        // this.render(this.props, this.state);
    }
    async setup(){
        const data = await this.props.data;
        if(data.details[this.currentCastle]){
            const links = this.state.nav.ul.content.links;
            links[1] += this.currentCastle;
            links.push(data.details[this.currentCastle].address);
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
        this.shadow.append($nav);
        // const $nav = new Nav({...data, ...this.state})
    }
}
customElements.define('castle-page', CastlePage);
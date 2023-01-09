export default class Details extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }
    get title(){
        return this.getAttribute("title");
    }
    get first(){
        return this.getAttribute("first");
    }
    get second(){
        return this.getAttribute("second");
    }
    get third(){
        return this.getAttribute("third");
    }
    get fourth(){
        return this.getAttribute("fourth");
    }
    get fifth(){
        return this.getAttribute("fifth");
    }
    get sixth(){
        return this.getAttribute("sixth");
    }
    get observedAttributes(){
        return ["first", "second", "third", "fourth", "fifth", "sixth"];
    }
    connectedCallback(){
        this.render();
    }
    infoComponent(val){
        return `<div class="detail">
            ${val}
        </div>`;
    }
    render(){
        this.shadow.innerHTML += `<link rel="stylesheet" href = "./style/css/style.css">`;
        const $infoComponentsContainer = this.observedAttributes
            .map((attribute)=>{
                if(this[attribute]){
                    return this.infoComponent(this[attribute])
                }
            }).join(" ");
        this.shadow.innerHTML += $infoComponentsContainer;
    }
}
customElements.define('details-component', Details);
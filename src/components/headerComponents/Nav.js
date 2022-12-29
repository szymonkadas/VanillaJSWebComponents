import Ul from "../utilComponents/Ul.js";

export default class Nav{
    constructor(props, state){
        this.$el = document.createElement('nav');
        this.render(props);
    }
    render(props){
        this.$el.innerHTML = `
            <img src="./images/site-logo2.png" class="site-logo">
            <div class="nav-tabs">
                <ul>
                    ${new Ul(props.ul).$el.innerHTML}
                </ul>
            </div>
            <div class="nav-buttons">
                <a href="${props.navContact.contact.link}"><button>${props.navContact.contact.text}</button></a>
                <a href="${props.navContact.authors.link}">${props.navContact.authors.text}</a>
            </div>`;
    }
}

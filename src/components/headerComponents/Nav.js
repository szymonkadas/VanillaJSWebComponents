import Ul from "../utilComponents/Ul.js";
import scroll from "../../utils/scroll.js";

export default class Nav{
    constructor(props, state){
        this.$el = document.createElement('nav');
        this.render(props, state);
    }
    render(props, state){
        this.$el.innerHTML = `
            <img src="./images/site-logo2.png" class="site-logo">
            <div class="nav-tabs"></div>
            <div class="nav-buttons">
                <a href="${props.navContact.contact.link}"><button>${props.navContact.contact.text}</button></a>
                <a href="${props.navContact.authors.link}">${props.navContact.authors.text}</a>
            </div>`;
            this.$el.children[1].append(new Ul(props.ul, state).$el)
            this.$el.children[2].children[0].onclick = () => scroll(props.navContact.contact.link, state);
            this.$el.children[2].children[1].onclick = () => scroll(props.navContact.authors.link, state);
    }
}

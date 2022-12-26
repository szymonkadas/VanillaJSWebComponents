import Nav from "./headerComponents/Nav.js";
import Hero from "./headerComponents/Hero.js";

export default class Header{
    constructor(props, state){
        this.$el = document.createElement("header")
        this.render(props);
    }
    render(props, state){
        const nav = new Nav(props.nav)
        this.$el.append(nav.$el);
        const hero = new Hero(props.hero);
        this.$el.append(hero.$hero);
    }
}

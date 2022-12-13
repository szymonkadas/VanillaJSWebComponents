import Nav from "./headerComponents/Nav.js";

class Header{
    constructor(){
        // this.$nav = new Nav().render();
        this.$header = document.createElement('header');
    }
    render(){
        this.$header.append(Nav);
        return this.$header;
    }
}

const header = new Header().render();
export default header;
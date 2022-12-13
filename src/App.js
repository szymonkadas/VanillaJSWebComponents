import Header from "./components/Header.js";

export default class App {
    constructor(){
        this.$root = document.getElementById('root');
        this.render();
    }
    render(){
        // let makaron = new Header().render();
        this.$root.append(Header); 
        return this.$root;
    }
}

new App();
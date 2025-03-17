import HomePage from "./pages/HomePage.js";
import CastlePage from "./pages/CastlePage.js";

export default class App {
    //Pomysł na state: przy zamkach dać okienka do zaznaczania odwiedzone, nie odwiedzone, itd. Dać też summary ulubionych zamków, odwiedzonych, notatki?   
    constructor(){
        this.$root = document.getElementById('root');
        this.render();
    }
    async render(){
        //router part:
        const route = window.location.href;
        if(route.includes("?")){
            this.$root.innerHTML = "<castle-page> </castle-page>"
        }else{
            this.$root.innerHTML = "<home-page> </homepage>"
        }
    }
}

new App();

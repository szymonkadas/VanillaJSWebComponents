import HomePage from "./pages/HomePage.js";
import CastlePage from "./pages/CastlePage.js";
// import CastlePage from "./pages/CastlePage.js";
export default class App {
    //Pomysł na state: przy zamkach dać okienka do zaznaczania odwiedzone, nie odwiedzone, itd. Dać też summary ulubionych zamków, odwiedzonych, notatki?   
    constructor(){
        this.$root = document.getElementById('root');
        this.render();
    }
    async render(){
        //router part:
        const route = window.location.href;
        // console.log(route[route.length]);
        //data-cośtam?
        const homePageLinks = ["hero", "explore-container", "project-desc", "contact-form", "authors"];
        if(homePageLinks.some((link) => route.includes(link)) || !route.includes("?")){
            this.$root.innerHTML = "<home-page> </homepage>"
        }else{
            this.$root.innerHTML = "<castle-page>"
        }
        // this.$root.innerHTML = "<home-page> </homepage>"
        //do ogarnięcia z filmiku. Index.html damy normalnie tam gdzie był, w pages będą pliki htmla? potem na podstawie tego czy w routach będzie pages (split "/") i albo datą albo hashtagiem z lokacji będzie określało z danych jaki będzie poprawny zamek.
       //a i castle page najlepiej by było gdyby nava miał zrecyklingowanego a resztę shadowDomem B)
    }
}

new App();
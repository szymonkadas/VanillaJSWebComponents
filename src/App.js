import Header from "./components/Header.js";
import Explore from "./components/Explore.js";

export default class App {
    //Potem rozdziel state na state (modyfikowalne) i propsy (statyczne) 
    //Pomysł na state: przy zamkach dać okienka do zaznaczania odwiedzone, nie odwiedzone, itd. Dać też summary ulubionych zamków, odwiedzonych, notatki?   


    //PLAN: zrobić UL componenta co to by się wypełniał elementami podanymi do środka. 
    //W desc zawartość sama musiałaby się utworzyć z innych nowych komponentów. to samo w nav?
    constructor(){
        this.state = {
            //Jak do tej pory cały statyczny, do propsów
            header: {
                nav: {
                    navContact: {contact: {link: "#makak" , text: "Kontakt"}, authors: {link: "#makak", text: "Autorzy"}},
                    ul: {
                        hr: {
                            display: true
                        },
                        class: "desc-list",
                        content: {
                            links: ["#makak", "#makak", "#makak"],
                            text: ["Start", "Zamki", "O projekcie"]
                        }
                    }
                },
                hero: {
                    description_container: {
                        class: "desc-hero",
                        title: "Pozyvame vas na slovensko!",
                        description: {
                            class: "desc-p",
                            text: "Slovensko je velmi uziastny kraj, pozvoltiez nam vam go ukazac v najlepsiech barvach"
                        },
                        button: {
                            class: "desc-button",
                            handleClick: "hero_scroll()",
                            text: "Poznajtez slovensko"
                        },
                        ul: {
                            hr: {
                                display: true
                            },
                            class: "desc-list",
                            content: {
                                icon: {
                                    src: "../images/checked.jpg",
                                    alt: "checked "
                                },
                                text: ["Naozaj pekne", "Slivovica", "Akordeon"]
                            }
                        }
                    },
                    view_container: {
                        class: "view-hero",
                        images: [
                            {alt: "Slovensko ", src: "../images/hero_img1.jpg", id: "hero-img-1"},
                            {alt: "Slovensko-zwei ", src: "../images/hero_img2.jpg", id: "hero-img-2"}
                        ]
                    }
                }
            },
            body: {
                content: fetch("./src/content.json").then((response) => response.json()).then(response => console.log(response))
            }
        }
        this.$root = document.getElementById('root');
        this.render();
    }
    render(){
        let header = new Header(this.state.header).$el;
        let poznaj = new Explore().$el;
        this.$root.append(header);
        this.$root.append(poznaj);
    }
}

new App();
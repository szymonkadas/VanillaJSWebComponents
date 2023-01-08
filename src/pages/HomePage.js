import Header from "../components/Header.js";
import Explore from "../components/Explore.js";
import ProjectInfo from "../components/ProjectInfo.js";

export default class HomePage extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.props = {
            header: {
                nav: {
                    navContact: {contact: {link: "#contact-form" , text: "Kontakt"}, authors: {link: "#authors", text: "Autorzy"}},
                    ul: {
                        hr: {
                            display: true
                        },
                        class: "desc-list",
                        content: {
                            links: ["#hero", "#explore-container", "#project-desc"],
                            text: ["Start", "Zamki", "O projekcie"]
                        }
                    }
                },
                hero: {
                    description_container: {
                        class: "desc-hero",
                        title: "Pozývame Vás na Slovensko!",
                        description: {
                            class: "desc-p",
                            text: `Slovensko je hornatá krajina, plná hradov a prírody, ideálna na aktívnu dovolenku od jari do zim.
                            </br>Na tejto stránke vám povieme o niektorých hradoch. Pre kurióznejšiech vás však pozývame stlačiť tlačidlo Spoznajte Slovensko.</br></br>
                            Słowacja jest górzystym krajem, pełnym zamków oraz przyrody, jest idealna do aktywnego spędzania czasu od wiosny do zimy. </br> Na tej stronie opowiemy wam o niektórych zamkach, ciekawskich zachęcamy do wciśnięcia przycisku Spoznajte Slovensko`
                        },
                        button: {
                            class: "desc-button",
                            text: "Spoznajte Slovensko",
                            link: "https://slovakia.travel/pl"
                        },
                        ul: {
                            hr: {
                                display: true
                            },
                            class: "desc-list",
                            content: {
                                icon: {
                                    src: "./images/circle-check.svg",
                                    alt: "checked "
                                },
                                text: ["Zamki", "Góry", "Cały Rok"]
                            }
                        }
                    },
                    view_container: {
                        class: "view-hero",
                        images: [
                            {alt: "Bojnicki Hrad ", src: "./images/hero_img1.jpg", id: "hero-img-1"},
                            {alt: "Ruiny Hradu ", src: "./images/hero_img2.jpg", id: "hero-img-2"},
                            {alt: "Oravski Hrad", src: "http://sacr3-files.s3-eu-west-1.amazonaws.com/_processed_/csm_Oravsk%25C3%25BD%2520hrad_Oravsk%25C3%25BD%2520Podz%25C3%25A1mok%252C%2520Okres%2520Doln%25C3%25BD%2520Kub%25C3%25ADn%252C%2520Kraj%2520%25C5%25BDilinsk%25C3%25BD%252C%2520Stolica%2520oravsk%25C3%25A1%2520%25281%2529_9a0fc9cddb.jpg", id: "hero-img-3"}
                        ]
                    }
                }
            },
            explore: fetch("./src/overview.json").then((response) => {
                if(!response.ok){
                    throw new Error('failed loading, please try again later');
                }
                return response;
            }).then((response) => response.json()),
            projectInfo: {
                infoContent1: {
                    header: "O Projekcie:",
                    text: `Cześć! Projekt ten powstał w ramach samodoskonalenia się w zakresie frontendu, konkretniej by zrozumieć różne sposoby na tworzenie elementów na stronie w podobnym stylu do reacta.
                    Metody wykorzystane w projekcie: modyfikacja innerHTML'a, z przemieszkami doc.createElement, append, a to czysto createElement, append z propsami i state'm, a także shadow dom.
                    Dzięki temu mogłem lepiej zrozumieć jak działają frameworki typu React, wszystko w formie componentów (chociaż nie chciałem popaść w przesadyzm struktury componentów).
                    A tematyka? Zważywszy na naukę języka słowackiego, była to całkiem dobra okazja by zapełnić tę stronę czymś ciekawym.`
                },
                infoContent2:{
                    header: "Kontakt/Contact:",
                    text: `Jeśli masz jakieś porady odnośnie kodu/designu/htmla/cssa itp. lub przychodzisz z propozycją współpracy, zachęcam do wypełnienia formularza!
                    If you've got any tips about code/design/html/css etc. or if you're coming here with collab proposal, please use this contact form!`
                },
                authors:{
                    author1:{
                        img: "./images/authors/Szymon.jpg",
                        name: "Szymon Kadaś",
                        roles: {
                            class: "roles",
                            content:{
                                icons: [
                                    {src: "./images/roles/SASS.svg", alt: "CSS icon"},
                                    {src: "./images/roles/JS.svg", alt: "JS icon"},
                                    {src: "./images/roles/Design.svg", alt: "Design icon"},
                                    {src: "./images/roles/Research.svg", alt: "Content Research icon"},
                                    {src: "./images/roles/ProjectManager.svg", alt: "Manager icon"}
                                ],
                                text: ["SASS/CSS", "JS", "Design Strony", "Poszukiwanie Zawartości", "Kierownik Projektu"]
                            }
                        }
                    },
                    author2:{
                        img: "./images/authors/AnonymousAvatar.webp",
                        name: "Kacper B.",
                        roles: {
                            class: "roles",
                            content: { 
                                icons: [
                                    {src: "./images/roles/Ideas.svg", alt: "Ideas icon"},
                                    {src: "./images/roles/Research.svg", alt: "Content Research icon"},
                                ],
                                text: ["Pomysły", "Poszukiwanie Zawartości"]
                            }
                        }
                    },
                    author3: {
                        img: "./images/authors/AnonymousAvatar.webp",
                        name: "Adrian M.",
                        roles: {
                            class: "roles",
                            content:{
                                icons: [
                                    {src: "./images/roles/Content.svg", alt: "Content icon"},
                                ],
                                text: ["Zbieracz Tekstu (json)"]
                            }
                        }
                    }
                }
            }
        }
    }
    connectedCallback() {
        this.render();
    }

    async render(){
        this.shadow.innerHTML += `<link rel="stylesheet" href = "./style/css/style.css">`;
        const $header = new Header(this.props.header, this).$el;
        const $poznaj = new Explore(await this.props.explore).$el;    
        const $projectInfo = new ProjectInfo(this.props.projectInfo).$el;
        this.shadow.append($header);
        this.shadow.append($poznaj);
        this.shadow.append($projectInfo);
    }
}
customElements.define('home-page', HomePage);
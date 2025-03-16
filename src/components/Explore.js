import ExploreImg from "./exploreComponents/ExploreImg.js";
import ExploreLocalisation from "./exploreComponents/ExploreLocalisation.js";

export default class Explore{
    constructor(props, state){
        // this.$nav = new Nav().render();
        this.$el = document.createElement('article');
        this.$el.id = "explore-container";
        this.render(props.overview);
    }
    render(props){
        const exploreDivs = Object.keys(props);
        exploreDivs.forEach(explore => {
            const {title, description, img, localisation, googleMaps} = props[explore];
            const $explore = document.createElement('section');
            const $img = new ExploreImg({img, title}).$el;
            const $exploreInfo = document.createElement('div');
            const $localisation = new ExploreLocalisation({localisation, googleMaps}).$el;
            const $title = document.createElement('h3');
            const $description = document.createElement('p');
            const $exploreButtonLink = document.createElement('a');
            const $exploreButton = document.createElement('button');

            $explore.className = "explore";
            $exploreInfo.className = "explore-info";
            $title.className = "explore-title";
            $title.textContent = title;
            $description.className = "explore-description";
            $description.textContent = description;
            $exploreButtonLink.className = "explore-link";
            $exploreButtonLink.href = `./index.html?castle=${explore}`
            // $exploreButtonLink.target = "_blank";
            $exploreButton.innerText = "więcej"

            $exploreButtonLink.append($exploreButton);
            $exploreInfo.append($localisation);
            $exploreInfo.append($title);
            $exploreInfo.append($description);
            $exploreInfo.append($exploreButtonLink);
            
            $explore.append($img);
            $explore.append($exploreInfo);
            this.$el.append($explore);
        })
























        //STARY LAYOUT Z MUZEAMI : (
        // Castles.Overview.forEach(castle => {
        //     this.$el.innerHTML += `
        //         <div class="explore">
        //             <div class="explore-img-container">
        //                 <img class="explore-img" src=${castle.img} alt="skanseny"></img>
        //                 <div class="explore-h3-container"><h3>Skanseny</h3></div>
        //             </div>
        //             <button onclick="route()">explore</button>
        //             <div class="explore-advantages">
        //                 <h5>Preco poznavat' slovackie skanseny</h5>
        //                     <div class="explore-advantages-container">
        //                     <div class="explore-advantage-container">
        //                         <img src="../images/zaleta1.jpg" alt="advantage1"></img>
        //                         <h6>Dużo śliwowicy na każdym kroku</h6>
        //                         <p>Krasnoludki w każdym domostwie pucą oscypki hej pod wstawiennictwem świętego śliwowca</p>
        //                     </div>
        //                     <div class="explore-advantage-container">
        //                         <img src="../images/zaleta1.jpg" alt="advantage1"></img>
        //                         <h6>Dużo śliwowicy na każdym kroku</h6>
        //                         <p>Krasnoludki w każdym domostwie pucą oscypki hej pod wstawiennictwem świętego śliwowca</p>
        //                     </div>
        //                     <div class="explore-advantage-container">
        //                         <img src="../images/zaleta1.jpg" alt="advantage1"></img>
        //                         <h6>Dużo śliwowicy na każdym kroku</h6>
        //                         <p>Krasnoludki w każdym domostwie pucą oscypki hej pod wstawiennictwem świętego śliwowca</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     `
        // })
    }
}
export default class ExploreLocalisation{
    constructor(props){
        this.$el = document.createElement("a");
        this.$el.className = "explore-localisation-container";
        this.$el.href = props.googleMaps;
        this.$el.target = "_blank";
        this.render(props);
    }
    render(props){
        const $img = document.createElement("img");
        const $description = document.createElement("span");
        $img.src = "./images/location-dot.svg";
        $img.alt = "pointer "
        $img.className = "pointer";
        $description.className = "localisation-description";
        // $description.textContent = props.textContent;
        // $description.href = props.googleMaps;
        $description.textContent = props.localisation;
        this.$el.append($img);
        this.$el.append($description);
    }

}
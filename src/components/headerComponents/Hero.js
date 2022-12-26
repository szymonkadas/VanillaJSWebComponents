import DescriptionContainer from "./heroComponents/DescriptionContainer.js";
import ViewContainer from "./heroComponents/ViewContainer.js";

export default class Hero{
    constructor(props, state){
        // this.$nav = new Nav().render();
        this.$hero = document.createElement('div');
        this.$hero.className = "hero";
        this.render(props);
    }
    render(props){
        const description_container = new DescriptionContainer(props.description_container).$el;
        this.$hero.append(description_container)
        const view_container = new ViewContainer(props.view_container).$el;
        this.$hero.append(view_container);
    }
}

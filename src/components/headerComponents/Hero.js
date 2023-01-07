import DescriptionContainer from "./heroComponents/DescriptionContainer.js";
import ViewContainer from "./heroComponents/ViewContainer.js";

export default class Hero{
    constructor(props, state){
        // this.$nav = new Nav().render();
        this.$el = document.createElement('div');
        this.$el.id = "hero";
        this.render(props);
    }
    render(props){
        const description_container = new DescriptionContainer(props.description_container).$el;
        this.$el.append(description_container)
        const view_container = new ViewContainer(props.view_container).$el;
        this.$el.append(view_container);
    }
}

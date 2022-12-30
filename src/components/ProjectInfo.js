import ProjectBrief from "./projectInfoComponents/ProjectBrief.js"
import Contact from "./projectInfoComponents/Contact.js"

export default class ProjectInfo{
    constructor(props, state){
        this.$el = document.createElement("div");
        this.$el.id = "project-desc";
        this.render(props, state);
    }
    render(props, state){
        const $projectBrief = new ProjectBrief(props.projectBrief).$el;
        const $contactForm = new Contact(state.contact).$el;
        this.$el.append($projectBrief);
        this.$el.append($contactForm);
    }
}
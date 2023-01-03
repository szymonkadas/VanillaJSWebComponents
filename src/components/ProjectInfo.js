import InfoContent from "./projectInfoComponents/InfoContent.js";
import Form from "./projectInfoComponents/Form.js";
import Authors from "./projectInfoComponents/Authors.js";
export default class ProjectInfo{
    constructor(props, state){
        this.$el = document.createElement("div");
        this.$el.id = "project-desc";
        this.render(props, state);
    }
    render(props, state){
        const $projectBrief = new InfoContent(props.infoContent1).$el;
        const $contactFormContainer = new InfoContent(props.infoContent2).$el;
        const $authors = new Authors(props.authors).$el;
        const $contactForm = new Form().$el;

        $projectBrief.append($authors);
        $contactFormContainer.append($contactForm);
        this.$el.append($projectBrief);
        this.$el.append($contactFormContainer);
    }
}
import Authors from "./Authors.js";
export default class ProjectBrief{
    constructor(props, state){
        this.$el = document.createElement('div');
        this.$el.className = "project-info-content";
        this.render(props, state);
    }
    render(props, state){
        const $textHeader = document.createElement('h2');
        const $text = document.createElement('div');
        const $authors = new Authors(props.authors).$el;

        $textHeader.innerText = "O Projekcie:"
        $text.innerText += props.text;

        this.$el.append($textHeader)
        this.$el.append($text);
        this.$el.append($authors);
    }
}
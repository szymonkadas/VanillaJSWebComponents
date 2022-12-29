import Authors from "./Authors.js";
export default class ProjectBrief{
    constructor(props, state){
        this.$el = document.createElement('div');
        this.$el.className = "project-info-content";
        this.render(props, state);
    }
    render(props, state){
        const $text = document.createElement('div');
        const $textHeader = document.createElement('h2');
        const $authors = new Authors(props.authors).$el;
        
        $text.className = "project-brief-text";
        $text.innerText += props.text;
        $textHeader.innerText = "O projekcie:"

        this.$el.append($textHeader)
        this.$el.append($text);
        this.$el.append($authors);
    }
}
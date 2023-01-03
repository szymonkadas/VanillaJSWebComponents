export default class ProjectInfoContent{
    constructor(props, state){
        this.$el = document.createElement('div');
        this.$el.className = "project-info-content";
        this.render(props, state);
    }
    description(props){
        const $desc = document.createElement('div');
        const $textHeader = document.createElement('h2');
        const $text = document.createElement('span');

        $desc.className = "project-info-description";
        $textHeader.innerText = props.header;
        $text.innerText += props.text;

        $desc.append($textHeader);
        $desc.append($text);

        return $desc;
    }
    render(props, state){
        const $info_desc = this.description(props);
        this.$el.append($info_desc);
    }
}
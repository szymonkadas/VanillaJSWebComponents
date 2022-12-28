import Ul from "../../utilComponents/Ul.js";
export default class DescriptionContainer {
    constructor(props, state){
        this.$el = document.createElement('div');
        this.$el.className = props.class;
        this.render(props);
    }
    open_window = ()=>{
        window.open('https://slovakia.travel/pl', '_blank');
    };
    // onClick="window.open('https://slovakia.travel/pl', '_blank')"
    render(props){
        this.$el.innerHTML = `
            <h1>${props.title}</h1>
            <p class="${props.description.class}">
                ${props.description.text}
            </p>
            <button class="${props.button.class}">
                ${props.button.text}
            </button>
            <div class="desc-list-container">
                ${props.ul.hr.display && '<div class="desc-hr"></div>'}
            </div>
        `;
        this.$el.children.item(2).onclick = this.open_window;
        this.$el.children.item(3).append(new Ul(props.ul).$el) //inside desc-list-container
    }
}
import Ul from "../../utilComponents/Ul.js";
export default class DescriptionContainer {
    constructor(props, state){
        this.$el = document.createElement('div');
        this.$el.className = props.class;
        this.render(props);
    }
    render(props){
        this.$el.innerHTML = `
            <h1>${props.title}</h1>
            <p class="${props.description.class}">
                ${props.description.text}
            </p>
            <button 
                class="${props.button.class}" 
                onclick="${props.button.handleClick}"
            >
                ${props.button.text}
            </button>
            ${props.ul.hr.display && '<div class="desc-hr"></div>'}
        `
        this.$el.append(new Ul(props.ul).$el)
    }
}
import Ul from "../../utilComponents/Ul.js";
export default class DescriptionContainer {
    constructor(props, state){
        this.$el = document.createElement('div');
        this.$el.className = props.class;
        this.render(props);
    }
    open_window = (event, address)=>{
        event.preventDefault();
        window.open(address, '_blank');
    };
    // onClick="window.open('https://slovakia.travel/pl', '_blank')"
    render(props){
        this.$el.innerHTML = `
            <h1>${props.title}</h1>
        `
        if(props.details){
            this.$el.innerHTML += `
                <h4><b>Lokalizacja:</b> ${props.details.localisation}</h4>
                <h4><b>GPS:</b> ${props.details.gps}</h4>
            `;
        }
        this.$el.innerHTML += `
            <p class="${props.description.class}">
                ${props.description.text}
            </p>
            <a href="${props.button.link}" class="${props.button.class}-link" target="_blank">
            </a>
            `;
        if(props.ul){
            this.$el.innerHTML += `
                <div class="desc-list-container">
                    ${props.ul.hr.display && '<div class="desc-hr"></div>'}
                </div>
            `;
            this.$el.children.item(3).append(new Ul(props.ul).$el) //inside desc-list-container
        }
        //taking care of opening links in hero 
        const $a = this.$el.getElementsByClassName(props.button.class+"-link")[0];
        const $button = document.createElement('button');
        $button.innerText = props.button.text;
        $button.className = props.button.class;
        $a.append($button);

    }
}
export default class Contact{
    constructor(props, state){
        this.$el = document.createElement('div');
        this.$el.id = "contact-form";
        this.render(props, state);
    }
    render(props, state){
        this.$el.innerText = "contact";
    }
}
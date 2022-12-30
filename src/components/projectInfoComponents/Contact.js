export default class Contact{
    constructor(props, state){
        this.$el = document.createElement("div");
        this.$el.id = "contact-form";
        this.$el.className = "project-info-content";

        this.render(props, state);
    }
    form(props, state){
        const $form = document.createElement('form');
        $form.method = "post";
        $form.onsubmit = (event) =>{
            even
        };



        const $mail_input = document.createElement('input')
    }
    render(props, state){
        const $header = document.createElement("h2");
        const $text = document.createElement("div");
        $text.className = "contact-text"
        $header.innerText = "Kontakt/Contact:";
        $text.innerText = `Jeśli masz jakieś porady odnośnie kodu/designu/htmla/cssa itp. lub przychodzisz z propozycją współpracy, zachęcam do wypełnienia formularza!
        If you've got any tips about code/design/html/css etc. or if you're coming here with collab proposal, please use this contact form!`;

        this.$el.append($header);
        this.$el.append($text);
    }
}
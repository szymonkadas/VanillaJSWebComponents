export default class Contact{
    constructor(){
        this.$el = document.createElement("div");
        this.$el.id = "contact-form";
        this.$el.className = "project-info-content";
        this.state = {
            email: "mail",
            topic: "",
            message: ""
        }
        this.setState = (callback) => {
            callback();
            this.redraw(this.state);
        }
        this.render(this.state);
    }
    
    form(){
        const $form = document.createElement("form");
        const $contact_number = document.createElement("input");
        const $mail_input = document.createElement("input")
        const $topic_input = document.createElement("input");
        const $message_input = document.createElement("textarea");
        const $submit = document.createElement("button");
        const $submit_message = document.createElement("div");

        $submit_message.id = "submitted";
        $form.method = "post";
        $form.onsubmit = (event) =>{
            event.preventDefault();
            const $submitted = document.getElementById("submitted")
            console.log(this);
            const thisRef = this;
            emailjs.sendForm('service_oy1rx9w', 'template_cltlbwq', $form)
                .then(function(){
                    console.log('Success');   
                    $submitted.innerText = "Wysłano/Submitted";
                    thisRef.setState(()=>{
                        thisRef.state.email = "";
                        thisRef.state.topic = "";
                        thisRef.state.message = "";
                    })
                }, function(error) {
                    $submitted.innerText = "Nie udało się wysłać / failed to send mail";
                })
        };
        //form elements setup
        $contact_number.type = "hidden";
        $contact_number.value = Math.random() * 100000 | 0;
        $contact_number.name = "contact_number";        
        $mail_input.type = "email";
        $mail_input.name = "email";
        $mail_input.id = "email";
        $topic_input.type = "text";
        $topic_input.name = "topic";
        $topic_input.id = "topic";
        $message_input.name = "message";
        $message_input.id = "message";
        //STATE
        $mail_input.onchange = (event) => {
            this.setState(()=>{
                this.state.email = event.target.value;
            });
        }
        $topic_input.onchange = (event) => {
            this.setState(()=>{
                this.state.topic = event.target.value;
            });
        }
        $message_input.onchange = (event) => {
            this.setState(()=>{
                this.state.message = event.target.value;
            });
        }
        $submit.innerText = "wyślij/submit";

        $form.append($contact_number);
        $form.append($mail_input);
        $form.append($topic_input);
        $form.append($message_input);
        $form.append($submit);
        $form.append($submit_message);
        this.$el.append($form);
    }
    render(){
        const $header = document.createElement("h2");
        const $text = document.createElement("div");
        $text.className = "contact-text"
        $header.innerText = "Kontakt/Contact:";
        $text.innerText = `Jeśli masz jakieś porady odnośnie kodu/designu/htmla/cssa itp. lub przychodzisz z propozycją współpracy, zachęcam do wypełnienia formularza!
        If you've got any tips about code/design/html/css etc. or if you're coming here with collab proposal, please use this contact form!`;
        this.$el.append($header);
        this.$el.append($text);
        this.form()
    }
    redraw(state){
        const $mail_input = document.getElementById("email")
        const $topic_input = document.getElementById("topic");
        const $message_input = document.getElementById("message");
        $mail_input.value = this.state.email;
        $topic_input.value = this.state.topic;
        $message_input.value = this.state.message;
    }
}
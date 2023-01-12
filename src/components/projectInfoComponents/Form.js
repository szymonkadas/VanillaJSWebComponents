export default class Contact{
    constructor(){
        this.$el = document.createElement("form");
        this.$el.id = "contact-form";
        this.state = {
            email: "mail",
            topic: "",
            message: ""
        }
        this.setState = (callback) => {
            callback();
            this.redraw();
        }
        this.render();
    }

    render(){
        const $contact_number = document.createElement("input");
        const $mail_input = document.createElement("input")
        const $topic_input = document.createElement("input");
        const $message_input = document.createElement("textarea");
        const $submit = document.createElement("button");
        const $submit_message = document.createElement("div");

        //Email sending part
        $submit_message.id = "submitted";
        this.$el.method = "post";
        this.$el.onsubmit = (event) =>{
            event.preventDefault();
            const thisRef = this;
            emailjs.sendForm('service_oy1rx9w', 'template_cltlbwq', this.$el)
                .then(function(){
                    console.log('Success');   
                    $submit_message.innerText = "Wysłano/Submitted";
                    thisRef.setState(()=>{
                        thisRef.state.email = "";
                        thisRef.state.topic = "";
                        thisRef.state.message = "";
                        console.log(thisRef.state);
                    })
                }, function(error) {
                    $submit_message.innerText = "Nie udało się wysłać / failed to send mail";
                })
        };

        //form elements setup
        this.$el.id = "contact-form";
        $contact_number.type = "hidden";
        $contact_number.value = Math.random() * 100000 | 0;
        $contact_number.name = "contact_number";      

        $mail_input.type = "email";
        $mail_input.name = "email";
        $mail_input.id = "email";
        $mail_input.placeholder = "email address";

        $topic_input.type = "text";
        $topic_input.name = "topic";
        $topic_input.id = "topic";
        $topic_input.placeholder = "topic";

        $message_input.name = "message";
        $message_input.id = "message";
        $message_input.placeholder = "message";
        
        $submit.innerText = "wyślij/submit";
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
        

        this.$el.append($contact_number);
        this.$el.append($mail_input);
        this.$el.append($topic_input);
        this.$el.append($message_input);
        this.$el.append($submit);
        this.$el.append($submit_message);
    }
    redraw(){
        console.log(this.state)
        this.$el.childNodes.forEach((node)=>{
            switch(node.name){
                case "email":
                    node.value = this.state.email;
                    break;
                case "topic":
                    node.value = this.state.topic;
                    break;
                case "message":
                    node.value = this.state.message
                    break;                    
            }
        })
    }
}
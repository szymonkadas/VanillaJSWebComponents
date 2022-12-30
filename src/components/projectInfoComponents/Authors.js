import Ul from "../utilComponents/Ul.js";

export default class Authors{
    constructor(props, state){
        this.$el = document.createElement('div');
        this.$el.id = "authors";
        this.render(props, state);
    }
    authorComponent(props, state){
        const $author = document.createElement('div');
        const $img = document.createElement('img');
        const $authorName = document.createElement('h4');
        const $roles = document.createElement('div');

        $author.className = "author-container";
        $img.src = props.img;
        $authorName.textContent = props.name;

        $roles.append(new Ul(props.roles).$el);
        $author.append($img);
        $author.append($authorName);
        $author.append($roles);

        return $author;
    }
    render(props, state){
        const $header = document.createElement("h2");
        const $authorsContainer = document.createElement("div");
        $header.textContent = "Poznajcie Twórców:";
        $authorsContainer.className = "authors-container";

        const authorsKeys = Object.keys(props);
        authorsKeys.forEach(authorKey => {
            const $author = this.authorComponent(props[authorKey]);
            $authorsContainer.append($author);
        })  
        
        this.$el.append($header);
        this.$el.append($authorsContainer);
    }
}
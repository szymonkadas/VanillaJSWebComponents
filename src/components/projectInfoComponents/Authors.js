import Ul from "../utilComponents/Ul.js";

export default class Authors{
    constructor(props, state){
        this.$el = document.createElement('div');
        this.$el.className = "project-info-content";
        this.$el.id = "authors";
        this.render(props, state);
    }
    authorComponent(props, state){
        const $author = document.createElement('div');
        const $img = document.createElement('img');
        const $authorName = document.createElement('h4');
        const $roles = document.createElement('div');
        const $rolesHeader = document.createElement('h6');

        $author.className = "author-container";
        $img.src = props.img;
        $authorName.textContent = props.name;
        $rolesHeader.textContent = "Odpowiadał za:";

        $roles.append($rolesHeader);
        $roles.append(new Ul(props.roles).$el);
        $author.append($img);
        $author.append($authorName);
        $author.append($roles);

        return $author;
    }
    render(props, state){
        const $header = document.createElement('h2');
        $header.textContent = "Poznajcie Twórców:";
        const authorsKeys = Object.keys(props);
        authorsKeys.forEach(authorKey => {
            const $author = this.authorComponent(props[authorKey]);
            this.$el.append($author);
            console.log(props[authorKey]);
        })
        this.$el.append($header);
    }
}
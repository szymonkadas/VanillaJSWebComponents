export default class ViewContainer {
    constructor(props, state){
        this.$el = document.createElement('div');
        this.$el.className = props.class;
        this.render(props);
    }
    render(props){
        const imagesLength = props.images.length;
        for(let i=0; i<imagesLength; i++){
            const $img = document.createElement('img');  
            $img.alt = props.images[i].alt;
            $img.src = props.images[i].src;
            $img.id = props.images[i].id;
            this.$el.append($img);
        }
    }
}
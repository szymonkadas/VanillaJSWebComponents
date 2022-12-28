export default class ExploreImg{
    constructor(props){
        this.$el = document.createElement('div');
        this.$el.className = "explore-img-container";
        this.render(props);
    }
    render(props){
        const $img = document.createElement('img');
        $img.src = props.img
        $img.alt = props.title + " ";
        this.$el.append($img);
    }

}
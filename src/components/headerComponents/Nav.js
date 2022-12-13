class Nav{
    constructor(){
        this.$nav = document.createElement('nav');
    }
    // logo(){
    //     let $logo = `<div class="nav-logo-container">
    //         <img src="../../../images/logo.jpg"></img>
    //     </div>`;
    //     return logo
    // }
    render(){
        return this.$nav;
    }
}
const nav = new Nav().render();
export default nav;
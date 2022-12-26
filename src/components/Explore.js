export default class Poznaj{
    constructor(props, state){
        // this.$nav = new Nav().render();
        this.$poznaj = document.createElement('div');
        this.$poznaj.className = "poznaj";
        this.render(props);
    }
    render(props){
        this.$poznaj.innerHTML = `
            <div class="poznaj-img-container">
                <img class="poznaj-img" src="../images/skanseny.jpg alt="skanseny"></img>
                <div class="poznaj-h3-container"><h3>Skanseny</h3></div>
            </div>
            <button onclick="route()">POZNAJ</button>
            <div class="poznaj-advantages">
                <h5>Preco poznavat' slovackie skanseny</h5>
                    <div class="poznaj-advantages-container">
                    <div class="poznaj-advantage-container">
                        <img src="../images/zaleta1.jpg" alt="advantage1"></img>
                        <h6>Dużo śliwowicy na każdym kroku</h6>
                        <p>Krasnoludki w każdym domostwie pucą oscypki hej pod wstawiennictwem świętego śliwowca</p>
                    </div>
                    <div class="poznaj-advantage-container">
                        <img src="../images/zaleta1.jpg" alt="advantage1"></img>
                        <h6>Dużo śliwowicy na każdym kroku</h6>
                        <p>Krasnoludki w każdym domostwie pucą oscypki hej pod wstawiennictwem świętego śliwowca</p>
                    </div>
                    <div class="poznaj-advantage-container">
                        <img src="../images/zaleta1.jpg" alt="advantage1"></img>
                        <h6>Dużo śliwowicy na każdym kroku</h6>
                        <p>Krasnoludki w każdym domostwie pucą oscypki hej pod wstawiennictwem świętego śliwowca</p>
                    </div>
                </div>
            </div>
        `
    }
}
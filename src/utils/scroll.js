export default function scroll(id, shadowElement){ 
    id = id.split("").slice(1,).join(""); //getting rid of # at the beginning;
    //target is where we jump
    const target = shadowElement.shadow.getElementById(id);
    const currentYPosition = document.documentElement.scrollTop;
    const coords = target.getBoundingClientRect();
    window.scroll(coords.x, coords.y-90+currentYPosition);
};
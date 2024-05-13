let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["Vaibhav","Niranjan", "Himanshu"];

let colors = [
    "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff", "#800000",
    "#8B0000", "#ffa500", "#ffd700", "#6b8e23", "#7cfc00", "#000080", "#8b008b",
    "#ff00ff", "#f4a460", "#ff3855", "#fd3a4a", "#fb4d46", "#fa5b3d", "#ffaa1d",
    "#fff700", "#299617", "#a7f432", "#2243b6", "#5dadec", "#5946b2", "#9c51b6",

];

let sticker = function (name) {
    let div = template.content.querySelector("div");
    let nameOfstick = div.querySelector(".name");

    nameOfstick.innerHTML = name;

    div.style.background = colors[Math.floor(Math.random() * colors.length)];

    div.style.transform = "rotate(" + (Math.random()* 40 - 20) + "deg)";

    let node = document.importNode(div, true);
    wrapper.appendChild(node)
}

setTimeout(refreshPage,1000);
function refreshPage(){
    location.reload();
}

names.forEach(sticker);
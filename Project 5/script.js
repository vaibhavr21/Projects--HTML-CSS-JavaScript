const timeline = document.getElementById("timeline");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let step = 1;

function mainCode(){

    circles.forEach((circles,index)=>{
        if(index < step){
            circles.classList.add("active");
        }else{
            circles.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");
    timeline.style.width = ` ${
        ((actives.length - 1) / (circles.length - 1)) * 100
}%`;

if(step === 1){
    prev.disabled = true;
}else if( step === circles.length){
    next.disabled = true;
}else{
    prev.disabled = false;
    next.disabled = false;
}

}

next.addEventListener("click",()=>{
    step++;
    if(step > circles.length){
        step = circles.length;
    }
    mainCode();
});

prev.addEventListener("click",()=>{
    step--;
    if(step < 1){
        step = 1;
    }
    mainCode();
});    
const v = document.getElementById("v");
const a = document.getElementById("a");
const i = document.getElementById("i");
const b = document.getElementById("b");
const h = document.getElementById("h");
const c = document.getElementById("c");
const u = document.getElementById("u");
const vaibhav = document.getElementById("complete");

v.addEventListener("click", ()=>{
    v.style.display = "none";
    a.style.display = "block";
});

a.addEventListener("click", ()=>{
    a.style.display = "none";
    i.style.display = "block";
});

i.addEventListener("click", ()=>{
    i.style.display = "none";
    b.style.display = "block";
});

b.addEventListener("click", ()=>{
    b.style.display = "none";
    h.style.display = "block";
});

h.addEventListener("click", ()=>{
    h.style.display = "none";
    c.style.display = "block";
});

c.addEventListener("click", ()=>{
    c.style.display = "none";
    u.style.display = "block";
});

u.addEventListener("click", ()=>{
    u.style.display = "none";
    vaibhav.style.display = "block";
});

vaibhav.addEventListener("click",()=>{
    vaibhav.style.display = "none";
    v.style.display = "block";
});


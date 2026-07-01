// =====================================
// ELEMENTS
// =====================================

const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

const card = document.querySelector(".scratch-card");
const continueBtn = document.getElementById("continueBtn");
const hearts = document.getElementById("hearts");

canvas.width = card.offsetWidth;
canvas.height = card.offsetHeight;

// =====================================
// SCRATCH LAYER
// =====================================

const gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height);

gradient.addColorStop(0,"#F2F2F2");
gradient.addColorStop(0.5,"#CFCFCF");
gradient.addColorStop(1,"#ECECEC");

ctx.fillStyle = gradient;
ctx.fillRect(0,0,canvas.width,canvas.height);

// Shine

ctx.fillStyle = "rgba(255,255,255,.25)";

for(let i=0;i<18;i++){

    ctx.fillRect(i*28,0,10,canvas.height);

}

// Text

ctx.fillStyle = "#666";
ctx.font = "bold 30px Poppins";
ctx.textAlign = "center";

ctx.fillText(

    "Scratch Here ✨",

    canvas.width/2,

    canvas.height/2

);

// =====================================
// SCRATCH SETTINGS
// =====================================

ctx.globalCompositeOperation = "destination-out";

let scratching = false;

// =====================================
// POSITION
// =====================================

function getPosition(e){

    const rect = canvas.getBoundingClientRect();

    if(e.touches){

        return{

            x:e.touches[0].clientX-rect.left,

            y:e.touches[0].clientY-rect.top

        };

    }

    return{

        x:e.clientX-rect.left,

        y:e.clientY-rect.top

    };

}

// =====================================
// SCRATCH
// =====================================

function scratch(x,y){

    ctx.beginPath();

    ctx.arc(x,y,28,0,Math.PI*2);

    ctx.fill();

}

// Mouse

canvas.addEventListener("mousedown",()=>{

    scratching=true;

});

window.addEventListener("mouseup",()=>{

    scratching=false;

    revealCheck();

});

canvas.addEventListener("mousemove",(e)=>{

    if(!scratching) return;

    const pos=getPosition(e);

    scratch(pos.x,pos.y);

});

// Mobile

canvas.addEventListener("touchstart",()=>{

    scratching=true;

});

window.addEventListener("touchend",()=>{

    scratching=false;

    revealCheck();

});

canvas.addEventListener("touchmove",(e)=>{

    e.preventDefault();

    if(!scratching) return;

    const pos=getPosition(e);

    scratch(pos.x,pos.y);

});

// =====================================
// REVEAL CHECK
// =====================================

let revealed=false;

function revealCheck(){

    if(revealed) return;

    const pixels=ctx.getImageData(

        0,

        0,

        canvas.width,

        canvas.height

    ).data;

    let cleared=0;

    for(let i=3;i<pixels.length;i+=4){

        if(pixels[i]===0){

            cleared++;

        }

    }

    const percent=

    cleared/(canvas.width*canvas.height)*100;

    if(percent>65){

        revealed=true;

        canvas.style.transition=".8s";

        canvas.style.opacity="0";

        canvas.style.pointerEvents="none";

        continueBtn.style.display="block";

        launchHearts();

    }

}

// =====================================
// HEARTS
// =====================================

function launchHearts(){

    for(let i=0;i<30;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💗";

        heart.style.position="absolute";

        heart.style.left=Math.random()*100+"%";

        heart.style.bottom="-30px";

        heart.style.fontSize=(18+Math.random()*18)+"px";

        heart.style.opacity=".9";

        heart.style.animation=

        `fly ${4+Math.random()*2}s linear forwards`;

        hearts.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6000);

    }

}

// =====================================
// HEART ANIMATION
// =====================================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fly{

0%{

transform:translateY(0) scale(.5);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-900px)

translateX(${Math.random()*300-150}px)

scale(1.4);

opacity:0;

}

}

`;

document.head.appendChild(style);

// =====================================
// CONTINUE BUTTON
// =====================================

continueBtn.addEventListener("click",()=>{

    window.location.href="/home";

});
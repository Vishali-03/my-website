// ======================================
// PAGE LOADED
// ======================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// ======================================
// POLAROID FADE IN
// ======================================

const cards = document.querySelectorAll(".polaroid");

cards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = "0.8s ease";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, index * 250);

});


// ======================================
// FLOATING HEARTS
// ======================================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤";

    heart.style.position="fixed";

    heart.style.left=Math.random()*window.innerWidth+"px";

    heart.style.bottom="-40px";

    heart.style.fontSize=(15+Math.random()*18)+"px";

    heart.style.color="#FF7DA5";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    document.body.appendChild(heart);

    const duration=5000+Math.random()*3000;

    const drift=(Math.random()-0.5)*180;

    heart.animate([

        {
            transform:"translate(0,0) scale(.5)",
            opacity:0
        },

        {
            transform:`translate(${drift}px,-${window.innerHeight+150}px) scale(1.3)`,
            opacity:1
        }

    ],{

        duration:duration,

        easing:"linear"

    });

    setTimeout(()=>{

        heart.remove();

    },duration);

}

setInterval(createHeart,700);


// ======================================
// VIDEO AUTOPLAY
// ======================================

document.querySelectorAll("video").forEach(video => {

    video.muted = true;

    video.play().catch(() => {

        console.log("Autoplay blocked by browser.");

    });

});


// ======================================
// HOVER SCALE
// ======================================

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.zIndex = "10";

    });

    card.addEventListener("mouseleave", () => {

        card.style.zIndex = "1";

    });

});


// ======================================
// BACK BUTTON TRANSITION
// ======================================

const backBtn = document.querySelector(".back-btn");

if(backBtn){

    backBtn.addEventListener("click",(e)=>{

        e.preventDefault();

        document.body.style.transition="0.5s";

        document.body.style.opacity="0";

        setTimeout(()=>{

            window.location.href=backBtn.href;

        },500);

    });

}
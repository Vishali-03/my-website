// =========================================
// MOON MEMORIES
// =========================================

const cards = document.querySelectorAll(".polaroid");

// -----------------------------------------
// AUTO PLAY VIDEOS WHEN HOVER
// -----------------------------------------



// =========================================
// CLICK TO ENLARGE
// =========================================

const overlay = document.createElement("div");

overlay.className = "overlay";

document.body.appendChild(overlay);

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        overlay.innerHTML="";

        const clone = card.cloneNode(true);

        clone.classList.add("popup");

        overlay.appendChild(clone);

        overlay.classList.add("show");

        const video = clone.querySelector("video");

        if(video){

            video.controls = true;

            video.play();

        }

    });

});


// =========================================
// CLOSE POPUP
// =========================================

overlay.addEventListener("click",()=>{

    overlay.classList.remove("show");

    overlay.innerHTML="";

});


// =========================================
// PAGE FADE
// =========================================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="1s";

        document.body.style.opacity="1";

    },100);

});
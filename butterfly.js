// ======================================
// ELEMENTS
// ======================================

const jars = document.querySelectorAll(".jar");
const butterflies = document.querySelectorAll(".butterfly");


const startBtn = document.getElementById("startBtn");
const playAgain = document.getElementById("playAgain");
const result = document.getElementById("result");

let correctJar = 0;
let gameStarted = false;
let canChoose = false;

// ======================================
// RANDOM BUTTERFLY POSITION
// ======================================

function placeButterfly(){

    butterflies.forEach(b => {

        b.classList.add("hide");

        b.classList.remove("fly");

    });

    correctJar = Math.floor(Math.random() * 3);

    butterflies[correctJar].classList.remove("hide");

}

// Initial position

placeButterfly();
jars[0].classList.add("pos0");
jars[1].classList.add("pos1");
jars[2].classList.add("pos2");
// ======================================
// START GAME
// ======================================

startBtn.onclick = () => {

    if(gameStarted) return;

    gameStarted = true;

    canChoose = false;

    result.innerHTML = "";

    playAgain.style.display = "none";

    // Hide butterfly before shuffle

    butterflies.forEach(b => b.classList.add("hide"));

    shuffleJars();

};

// ======================================
// SHUFFLE
// =====================================

function shuffleJars(){

    let positions = [0,1,2];

    let count = 0;

    const interval = setInterval(()=>{

        // Random 2 jars select
        let a = Math.floor(Math.random()*3);
        let b;

        do{
            b = Math.floor(Math.random()*3);
        }while(a===b);

        // Swap positions
        [positions[a], positions[b]] =
        [positions[b], positions[a]];

        // Update CSS classes
        jars.forEach((jar,index)=>{

            jar.classList.remove("pos0","pos1","pos2");

            jar.classList.add("pos"+positions[index]);

        });

        count++;

        if(count>=10){

            clearInterval(interval);

            canChoose=true;

        }

    },700);

}
// ======================================
// JAR CLICK
// ======================================

jars.forEach((jar,index)=>{

    jar.addEventListener("click",()=>{

        if(!canChoose) return;

        canChoose = false;

        if(index===correctJar){

            jar.classList.add("correct");

            butterflies[correctJar].classList.remove("hide");
            butterflies[correctJar].classList.add("fly");

            result.innerHTML="🎉 Correct!";

        }else{

            jar.classList.add("wrong");

            butterflies[correctJar].classList.remove("hide");
            butterflies[correctJar].classList.add("fly");

            result.innerHTML="❌ Wrong!";

        }

        result.classList.add("show-result");

        playAgain.style.display="inline-block";

    });

});

// ======================================
// PLAY AGAIN
// ======================================

playAgain.onclick=()=>{

    jars.forEach(j=>{

        j.classList.remove("correct");
        j.classList.remove("wrong");
        j.classList.remove("shuffle-left");
        j.classList.remove("shuffle-right");

    });

    butterflies.forEach(b=>{

        b.classList.remove("fly");
        b.classList.add("hide");

    });

    result.innerHTML="";
    result.classList.remove("show-result");

    playAgain.style.display="none";

    gameStarted=false;
    canChoose=false;

    placeButterfly();

};

// ======================================
// FLOATING PARTICLES
// ======================================

const particleContainer=document.querySelector(".particles");

for(let i=0;i<50;i++){

    const dot=document.createElement("span");

    dot.style.left=Math.random()*100+"vw";

    dot.style.animationDuration=(5+Math.random()*6)+"s";

    dot.style.animationDelay=Math.random()*5+"s";

    particleContainer.appendChild(dot);

}
// =====================================
// SONG LIST
// =====================================

const songs = [

{
    name:"Our fav song",
    file:"/static/music/song2.mp3"
    
},

{
    name:"Your fav",
    file:"/static/music/song3.mp3"
    
},

{
    name:"My fav",
    file:"/static/music/song4.mp3"
},

{
    name:"Swim",
    file:"/static/music/song5.mp3"
},

{
    name:"BTS",
    file:"/static/music/song6.mp3"
}

];

// =====================================
// ELEMENTS
// =====================================

const audio=document.getElementById("audio");

const playBtn=document.getElementById("play");

const nextBtn=document.getElementById("next");

const prevBtn=document.getElementById("prev");

const vinyl=document.querySelector(".vinyl");

const quote=document.querySelector(".quote");

const progress=document.querySelector(".progress-bar");

const buttons=document.querySelectorAll(".song");

let currentSong=0;

// =====================================
// LOAD SONG
// =====================================

function loadSong(index){

    currentSong=index;

    audio.src=songs[index].file;

    quote.innerHTML=songs[index].quote;

    buttons.forEach(btn=>btn.classList.remove("active"));

    buttons[index].classList.add("active");

}

loadSong(0);

// =====================================
// PLAY
// =====================================

function playSong(){

    audio.play();

    playBtn.innerHTML="⏸";

    vinyl.classList.add("playing");

}

// =====================================
// PAUSE
// =====================================

function pauseSong(){

    audio.pause();

    playBtn.innerHTML="▶";

    vinyl.classList.remove("playing");

}

// =====================================
// PLAY BUTTON
// =====================================

playBtn.onclick=()=>{

    if(audio.paused){

        playSong();

    }else{

        pauseSong();

    }

};

// =====================================
// NEXT
// =====================================

nextBtn.onclick=()=>{

    currentSong++;

    if(currentSong>=songs.length){

        currentSong=0;

    }

    loadSong(currentSong);

    playSong();

};

// =====================================
// PREVIOUS
// =====================================

prevBtn.onclick=()=>{

    currentSong--;

    if(currentSong<0){

        currentSong=songs.length-1;

    }

    loadSong(currentSong);

    playSong();

};

// =====================================
// SONG BUTTONS
// =====================================

buttons.forEach((button,index)=>{

    button.onclick=()=>{

        loadSong(index);

        playSong();

    };

});

// =====================================
// SONG END
// =====================================

audio.onended=()=>{

    currentSong++;

    if(currentSong>=songs.length){

        currentSong=0;

    }

    loadSong(currentSong);

    playSong();

};

// =====================================
// PROGRESS BAR
// =====================================

audio.ontimeupdate=()=>{

    if(audio.duration){

        let percent=

        (audio.currentTime/audio.duration)*100;

        progress.style.width=

        percent+"%";

    }

};

// =====================================
// SEEK
// =====================================

document.querySelector(".progress").onclick=(e)=>{

    let width=e.currentTarget.clientWidth;

    let click=e.offsetX;

    audio.currentTime=

    (click/width)*audio.duration;

};

// =====================================
// PARTICLES
// =====================================

const particles=document.querySelector(".particles");

for(let i=0;i<80;i++){

    const dot=document.createElement("span");

    dot.style.left=Math.random()*100+"vw";

    dot.style.top=Math.random()*100+"vh";

    dot.style.animationDuration=

    (5+Math.random()*8)+"s";

    dot.style.animationDelay=

    Math.random()*5+"s";

    particles.appendChild(dot);

}

// =====================================
// AUTO PLAY AFTER FIRST CLICK
// =====================================

document.body.addEventListener("click",()=>{

    if(audio.paused){

        playSong();

    }

},{once:true});
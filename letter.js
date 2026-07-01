// ==========================================
// ROYAL LETTER
// ==========================================

window.addEventListener("load", () => {

    createParticles();

    setTimeout(() => {

        typeWriter();

    }, 700);

});

// ==========================================
// FLOATING PARTICLES
// ==========================================

function createParticles() {

    const container = document.querySelector(".particles");

    for (let i = 0; i < 100; i++) {

        const star = document.createElement("span");

        star.style.left = Math.random() * 100 + "vw";

        star.style.top = Math.random() * 100 + "vh";

        star.style.animationDuration =
            (5 + Math.random() * 6) + "s";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        star.style.opacity = Math.random();

        container.appendChild(star);

    }

}

// ==========================================
// TYPEWRITER EFFECT
// ==========================================

function typeWriter() {

    const textBox = document.getElementById("typing");

    const text = textBox.innerHTML
        .replace(/<br>/g, "\n")
        .replace(/<[^>]*>/g, "");

    textBox.innerHTML = "";

    let i = 0;

    function write() {

        if (i < text.length) {

            if (text.charAt(i) === "\n") {

                textBox.innerHTML += "<br>";

            } else {

                textBox.innerHTML += text.charAt(i);

            }

            i++;

            setTimeout(write, 25);

        }

    }

    write();

}

// ==========================================
// MUSIC
// ==========================================

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

music.volume = 0.35;

// Browser autoplay restriction
document.body.addEventListener("click", () => {

    music.play().catch(() => { });

}, { once: true });

// Button

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "⏸";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";

    }

});

// ==========================================
// LETTER APPEAR
// ==========================================

const letter = document.querySelector(".letter-card");

letter.animate(

    [

        {

            opacity:0,

            transform:"translateY(40px) scale(.9)"

        },

        {

            opacity:1,

            transform:"translateY(0) scale(1)"

        }

    ],

    {

        duration:1200,

        easing:"ease-out",

        fill:"forwards"

    }

);

// ==========================================
// QUOTE FADE
// ==========================================

const quote = document.querySelector(".quote");

setTimeout(() => {

    quote.animate(

        [

            {

                opacity:0

            },

            {

                opacity:1

            }

        ],

        {

            duration:1500,

            fill:"forwards"

        }

    );

}, 2500);

// ==========================================
// MUSIC BUTTON PULSE
// ==========================================

setInterval(() => {

    musicBtn.animate(

        [

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(1.12)"

            },

            {

                transform:"scale(1)"

            }

        ],

        {

            duration:1200

        }

    );

}, 3500);
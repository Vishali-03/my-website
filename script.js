// ======================================
// SPARKLES
// ======================================

const sparkles = document.querySelector(".sparkles");

for (let i = 0; i < 70; i++) {

    const star = document.createElement("span");

    star.style.position = "absolute";

    star.style.width = Math.random() * 4 + 2 + "px";
    star.style.height = star.style.width;

    star.style.background = "white";

    star.style.borderRadius = "50%";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random();

    star.style.animation = `twinkle ${2 + Math.random() * 4}s infinite`;

    sparkles.appendChild(star);

}



// ======================================
// FLOATING PETALS
// ======================================

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.top = "-40px";

    petal.style.fontSize = (18 + Math.random() * 12) + "px";

    petal.style.opacity = "0.8";

    petal.style.pointerEvents = "none";

    petal.style.zIndex = "-1";

    document.body.appendChild(petal);

    const duration = 7000 + Math.random() * 4000;

    const drift = (Math.random() - 0.5) * 250;

    petal.animate([
        {
            transform: "translate(0,0) rotate(0deg)"
        },
        {
            transform: `translate(${drift}px,${window.innerHeight + 100}px) rotate(360deg)`
        }
    ], {
        duration: duration,
        easing: "linear"
    });

    setTimeout(() => {

        petal.remove();

    }, duration);

}

setInterval(createPetal, 700);



// ======================================
// MOUSE SPARKLE
// ======================================

document.addEventListener("mousemove", (e) => {

    const dot = document.createElement("div");

    dot.style.position = "fixed";

    dot.style.left = e.clientX + "px";

    dot.style.top = e.clientY + "px";

    dot.style.width = "8px";

    dot.style.height = "8px";

    dot.style.borderRadius = "50%";

    dot.style.background = "#ffb6d9";

    dot.style.pointerEvents = "none";

    dot.style.boxShadow = "0 0 15px white";

    document.body.appendChild(dot);

    dot.animate([
        {
            transform: "scale(1)",
            opacity: 1
        },
        {
            transform: "scale(0)",
            opacity: 0
        }
    ], {
        duration: 600
    });

    setTimeout(() => {

        dot.remove();

    }, 600);

});



// ======================================
// BUTTON
// ======================================

const btn = document.getElementById("openBtn");

btn.addEventListener("click", () => {

    document.body.style.transition = "all .8s ease";

    document.body.style.opacity = "0";

    document.body.style.transform = "scale(1.05)";

    setTimeout(() => {

        window.location.href = "/home";

    }, 700);

});



// ======================================
// CARD FLOAT
// ======================================

const card = document.querySelector(".glass-card");

let angle = 0;

setInterval(() => {

    angle += 0.02;

    card.style.transform =
        `translateY(${Math.sin(angle) * 8}px)`;

}, 30);



// ======================================
// TITLE GLOW
// ======================================

const title = document.querySelector(".glass-card h1");

setInterval(() => {

    title.style.textShadow =
        `0 0 ${20 + Math.random() * 20}px rgba(255,255,255,.9)`;

}, 1200);
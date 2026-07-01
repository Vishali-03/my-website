// ======================================
// DIARY JS
// ======================================

const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentPage = 0;

// ======================================
// SHOW PAGE
// ======================================

function showPage(index) {

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    pages[index].classList.add("active");

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === pages.length - 1;

    prevBtn.style.opacity = index === 0 ? "0.5" : "1";
    nextBtn.style.opacity = index === pages.length - 1 ? "0.5" : "1";

    startTyping();
    updateCounter();
}

// ======================================
// TYPEWRITER EFFECT
// ======================================

/*function typeWriter(element, speed = 25) {

    const text = element.dataset.text || element.innerHTML;

    element.dataset.text = text;
    element.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        element.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {
            clearInterval(timer);
        }

    }, speed);

}

function startTyping() {

    const page = pages[currentPage];

    const paragraph = page.querySelector("p");

    if (paragraph) {

        typeWriter(paragraph);

    }

}*/

// ======================================
// NEXT BUTTON
// ======================================

nextBtn.addEventListener("click", () => {

    if (currentPage < pages.length - 1) {

        currentPage++;

        showPage(currentPage);

    }

});

// ======================================
// PREVIOUS BUTTON
// ======================================

prevBtn.addEventListener("click", () => {

    if (currentPage > 0) {

        currentPage--;

        showPage(currentPage);

    }

});

// ======================================
// KEYBOARD SUPPORT
// ======================================

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        if (currentPage < pages.length - 1) {

            currentPage++;

            showPage(currentPage);

        }

    }

    if (e.key === "ArrowLeft") {

        if (currentPage > 0) {

            currentPage--;

            showPage(currentPage);

        }

    }

});

// ======================================
// PAGE COUNTER
// ======================================

const diary = document.querySelector(".diary");

const counter = document.createElement("div");

counter.style.position = "absolute";
counter.style.bottom = "12px";
counter.style.right = "20px";
counter.style.fontSize = "15px";
counter.style.color = "#6B4A2D";
counter.style.fontWeight = "600";

diary.appendChild(counter);

function updateCounter() {

    counter.innerHTML = `Page ${currentPage + 1} / ${pages.length}`;

}

// ======================================
// DOUBLE CLICK EFFECT
// ======================================

diary.addEventListener("dblclick", () => {

    diary.animate(

        [
            { transform: "scale(1)" },
            { transform: "scale(1.02)" },
            { transform: "scale(1)" }
        ],

        {
            duration: 350
        }

    );

});

// ======================================
// INITIAL LOAD
// ======================================

showPage(currentPage);
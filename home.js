const popup = document.getElementById("popup");
const title = document.getElementById("popupTitle");
const text = document.getElementById("popupText");
const closeBtn = document.getElementById("close");

/* CAMERA */

document.querySelector(".camera").onclick = function () {
    window.location.href = "/memories";
};

/* DIARY */

document.querySelector(".diary").onclick = function () {
    title.innerHTML = "📖 Diary";
    text.innerHTML = "Our story begins here.";
    popup.classList.add("active");
};

/* LETTER */


document.querySelector(".letter").onclick = function () {
    window.location.href = "/letter";
};


/* GIFT */

document.querySelector(".gift").onclick = function () {
    title.innerHTML = "🎁 Surprise";
    text.innerHTML = "A surprise is waiting.";
    popup.classList.add("active");
};

/* PIG */

document.querySelector(".pig").onclick = function () {
    window.location.href = "/funny";
};


/* STAR */

document.querySelector(".star").onclick = function () {
    title.innerHTML = "⭐ Favorite Quote";
    text.innerHTML = "Good friends are like stars.";
    popup.classList.add("active");
};

/* BALLOON */


document.querySelector(".balloon").onclick = function () {
    window.location.href = "/balloon";
};
/* BUTTERFLY */

document.querySelector(".butterfly").onclick = function () {
    window.location.href = "/butterfly";
};

/* HEART */

document.querySelector(".heart").onclick = function () {
    window.location.href = "/heart";
};

closeBtn.onclick = function () {
    popup.classList.remove("active");
};

window.onclick = function (e) {
    if (e.target == popup) {
        popup.classList.remove("active");
    }
};
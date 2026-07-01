document.addEventListener("DOMContentLoaded", () => {

    const gallery = document.querySelector(".gallery");
    const videos = document.querySelector(".videos");

    gallery.style.opacity = "0";
    videos.style.opacity = "0";

    setTimeout(() => {
        gallery.style.opacity = "1";
        gallery.style.transform = "translateY(0)";
    }, 300);

    setTimeout(() => {
        videos.style.opacity = "1";
        videos.style.transform = "translateY(0)";
    }, 700);

});
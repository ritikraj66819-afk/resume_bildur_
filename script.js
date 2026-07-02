// Smooth Animation
const preview = document.getElementById("resume-preview");
preview.style.opacity = "0";
preview.style.transform = "translateY(30px)";

setTimeout(() => {
    preview.style.transition = "all 0.5s ease";
    preview.style.opacity = "1";
    preview.style.transform = "translateY(0)";
}, 100);

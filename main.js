AOS.init({
    duration: 1200,
});

const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax1.style.backgroundPositionY = offset * 0.1 + "px";
    parallax2.style.backgroundPositionY = offset * 0.025 + "px";
})
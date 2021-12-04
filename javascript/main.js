const isTouchDevice = () => {
    return window.matchMedia("(pointer: coarse)").matches
}
console.log(isTouchDevice());
// Horizontal Scoll
const scrollContainer = document.querySelector("#wrapper");

if (!isTouchDevice()) {
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
}
var html = document.querySelector("html");
var popupButtonOpen = document.querySelector("#popup-open-button");
var popupButtonClose = document.querySelector("#popup-close-button");

popupButtonOpen.addEventListener("click", function (){
    html.classList.add ("popup-open");
    popupButtonClose.focus();
});

popupButtonClose.addEventListener("click", function(){
    html.classList.remove("popup-open");
});

window.addEventListener("keydown", function(event) {
    if (event.code === "Escape" && html.classList.contains("popup-open"))
        html.classList.remove("popup-open");
});
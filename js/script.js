function nextClick() {
    var activeImg = $(".active");
    console.log(activeImg);
}

function prevClick() {
    console.log("Hello world prev!");
}

function init() {
    $(".next").click(nextClick);
    $(".prev").click(prevClick);
}

$(document).ready(init);
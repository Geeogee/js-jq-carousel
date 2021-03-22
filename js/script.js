function nextClick() {
    console.log("Hello world next!")
}

function prevClick() {
    console.log("Hello world prev!");
}

function init() {
    $(".next").click(nextClick);
    $(".prev").click(prevClick);
}

$(document).ready(init);
function nextClick() {
    var activeImg = $(".active");
    console.log(activeImg);

    var nextImg = activeImg.next();
    console.log(nextImg);
    activeImg.removeClass("active");
    nextImg.addClass("active");
}

function prevClick() {
    var activeImg = $(".active");
    console.log(activeImg);

    var prevImg = activeImg.prev();
    console.log(prevImg);
    activeImg.removeClass("active");
    prevImg.addClass("active");
}

function init() {
    $(".next").click(nextClick);
    $(".prev").click(prevClick);
}

$(document).ready(init);
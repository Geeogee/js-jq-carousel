function nextClick() {

    var activeImg = $(".active");
    var nextImg = activeImg.next();

    if (activeImg.hasClass("last")) {
        
        nextImg = $(".first");
        activeImg.removeClass("active");
        nextImg.addClass("active");
    } else {

        activeImg.removeClass("active");
        nextImg.addClass("active");
    }
    
}

function prevClick() {
    var activeImg = $(".active");
    var prevImg = activeImg.prev();

    if (activeImg.hasClass("first")) {
        
        prevImg = $(".last");
        activeImg.removeClass("active");
        prevImg.addClass("active");
    } else {

        activeImg.removeClass("active");
        prevImg.addClass("active");
    }
}

function init() {
    $(".next").click(nextClick);
    $(".prev").click(prevClick);
}

$(document).ready(init);
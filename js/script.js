// JQuery Version

function nextClick() {

    var activeDot = $(".image-dots > i.dot-active");
    var nextDot = activeDot.next();

    var activeImg = $(".active");
    var nextImg = activeImg.next();
    

    if (activeImg.hasClass("last")) {
        
        nextImg = $(".first");
        nextDot = $(".image-dots > i.first");

        activeImg.removeClass("active");
        activeDot.removeClass("dot-active");

        nextImg.addClass("active");
        nextDot.addClass("dot-active");
    } else {

        activeImg.removeClass("active");
        activeDot.removeClass("dot-active");

        nextImg.addClass("active");
        nextDot.addClass("dot-active");
    }
    
}

function prevClick() {
    var activeDot = $(".image-dots > i.dot-active");
    var prevDot = activeDot.prev();

    var activeImg = $(".active");
    var prevImg = activeImg.prev();

    if (activeImg.hasClass("first")) {
        
       
        prevImg = $(".last");
        prevDot = $(".image-dots > i.last");

        activeImg.removeClass("active");
        activeDot.removeClass("dot-active");

        prevImg.addClass("active");
        prevDot.addClass("dot-active"); 
    } else {

        activeImg.removeClass("active");
        activeDot.removeClass("dot-active");

        prevImg.addClass("active");
        prevDot.addClass("dot-active");
    }
}

function genDots(n) {

    var dots = "";
    for (var i=0; i<n; i++) {   
        
        dots += "<i class=\"fas fa-circle\" data-number=\"" + i + "\"></i>";
        $(".image-dots").html(dots);
        
    }
}

function clickedDot() {
    var images = $("#images > img");
    var activeDot = $(".image-dots > i.dot-active");
    var dotValue = $(this).data("number");

    activeDot.removeClass("dot-active");
    $(this).addClass("dot-active");

    $(".active").removeClass("active");
    images.eq(dotValue).addClass("active");
    
}

function init() {
    
    $("#images img:first-child").addClass("active");
    var imagesLng = $("#images > img").length;
    genDots(imagesLng);
    $(".image-dots i:first-child").addClass("dot-active");
    $(".image-dots i:first-child").addClass("first");
    $(".image-dots i:last-child").addClass("last");

    $(".next").click(nextClick);
    $(".prev").click(prevClick);

    $(".image-dots > *").click(clickedDot);

}

$(document).ready(init);


// VanillaJs version

//---------- WORK IN PROGRESS --------------//

// querySelector da usare
// generare pallini con for in base al numero di immagini
// gestire immagini con this

// function changeSlide(index, images, actionVal) {
    
//     var newIndex = index + actionVal;
//     images[index].classList.remove("active");

//     if (newIndex > images.length - 1) {

//         newIndex = 0;
//     } else if (newIndex < 0) {

//         newIndex = images.length - 1;
//     }

//     images[newIndex].classList.add("active");
    
//     return newIndex;
// }

// function init() {
    
//     var images = document.querySelectorAll("#images > img");
//     var index = 0;
//     images[index].classList.add("active");

//     var nextButton = document.getElementById("next");
//     var prevButton = document.getElementById("prev");

//     nextButton.addEventListener("click", function() {

//        index = changeSlide(index, images, 1);
//     });

//     prevButton.addEventListener("click", function() {

//         index = changeSlide(index, images, -1);
//      });
    
// }

// document.addEventListener("DOMContentLoaded", init);
// JQuery Version

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

// VanillaJs version

// function nextClick() {
    
//     var images = document.getElementById("images").children;
    
//     for (var i=0; i<images.length; i++) {
//         if (images[i].classList.contains("active")) {
//             images[i].classList.remove("active");
//             var next = i + 1;
//             if (next > images.length - 1) {
//                 next = 0;
//             }
//             images[next].classList.add("active");
//             break;
//         }
//     }
// }

// function prevClick() {

//     var images = document.getElementById("images").children;

//     for (var i=images.length - 1; i>=0; i--) {

//         if (images[i].classList.contains("active")) {

//             images[i].classList.remove("active");
//             var prev = i - 1;
//             if (prev < 0) {

//                 prev = images.length - 1;
//             }
//             images[prev].classList.add("active");
//             break;
//         }
//     }
// }


// function init() {
    
//     var nextButton = document.getElementById("next");
//     var prevButton = document.getElementById("prev");
    
//     nextButton.addEventListener("click", nextClick);
//     prevButton.addEventListener("click", prevClick);
// }

// document.addEventListener("DOMContentLoaded", init);






//---------- WORK IN PROGRESS --------------//

// Vanilla JS refactoring 

// function slideShow(newSlide) {
//     console.log(newSlide);
//     var images = document.getElementById("images").children;
//     for (var i=0; i<images.length; i++) {
//         if(images[i].classList.contains("active")) {
//             images[i].classList.remove("active");
//         }
//     }

//     if (newSlide > images.length - 1) {
//         newSlide = 0;
//     }
//     images[newSlide].classList.add("active");
    
// } 

// function init() {
//     var nextButton = document.getElementById("next");
//     var prevButton = document.getElementById("prev");
//     var firstSlide = 1;
//     var newSlide;
//     nextButton.addEventListener("click", function() {

//         newSlide = firstSlide + 1;
//         slideShow(newSlide);
//         firstSlide = newSlide;
        
//     })
// }

// document.addEventListener("DOMContentLoaded", init);
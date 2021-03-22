// // JQuery Version

// function nextClick() {

//     var activeImg = $(".active");
//     var nextImg = activeImg.next();

//     if (activeImg.hasClass("last")) {
        
//         nextImg = $(".first");
//         activeImg.removeClass("active");
//         nextImg.addClass("active");
//     } else {

//         activeImg.removeClass("active");
//         nextImg.addClass("active");
//     }
    
// }

// function prevClick() {
//     var activeImg = $(".active");
//     var prevImg = activeImg.prev();

//     if (activeImg.hasClass("first")) {
        
//         prevImg = $(".last");
//         activeImg.removeClass("active");
//         prevImg.addClass("active");
//     } else {

//         activeImg.removeClass("active");
//         prevImg.addClass("active");
//     }
// }

// function init() {
//     $(".next").click(nextClick);
//     $(".prev").click(prevClick);
// }

// $(document).ready(init);


// VanillaJs version

//---------- WORK IN PROGRESS --------------//

// querySelector da usare
// generare pallini con for in base al numero di imamgini
// gestire immagini con this

function changeSlide(index, images, actionVal) {
    
    var newIndex = index + actionVal;
    images[index].classList.remove("active");

    if (newIndex > images.length - 1) {

        newIndex = 0;
    } else if (newIndex < 0) {

        newIndex = images.length - 1;
    }

    images[newIndex].classList.add("active");
    
    return newIndex;
}

function init() {
    var images = document.querySelectorAll("#images > img");
    var index = 0;
    images[index].classList.add("active");

    var nextButton = document.getElementById("next");
    var prevButton = document.getElementById("prev");

    nextButton.addEventListener("click", function() {

       index = changeSlide(index, images, 1);
    });

    prevButton.addEventListener("click", function() {

        index = changeSlide(index, images, -1);
     });
    
}

document.addEventListener("DOMContentLoaded", init);
// // JQuery Version

// function nextClick() {

//     var activeDot = $(".image-dots > i.dot-active");
//     var nextDot = activeDot.next();

//     var activeImg = $(".active");
//     var nextImg = activeImg.next();
    

//     if (activeImg.hasClass("last")) {
        
//         nextImg = $(".first");
//         nextDot = $(".image-dots > i.first");

//         activeImg.removeClass("active");
//         activeDot.removeClass("dot-active");

//         nextImg.addClass("active");
//         nextDot.addClass("dot-active");
//     } else {

//         activeImg.removeClass("active");
//         activeDot.removeClass("dot-active");

//         nextImg.addClass("active");
//         nextDot.addClass("dot-active");
//     }
    
// }

// function prevClick() {
//     var activeDot = $(".image-dots > i.dot-active");
//     var prevDot = activeDot.prev();

//     var activeImg = $(".active");
//     var prevImg = activeImg.prev();

//     if (activeImg.hasClass("first")) {
        
       
//         prevImg = $(".last");
//         prevDot = $(".image-dots > i.last");

//         activeImg.removeClass("active");
//         activeDot.removeClass("dot-active");

//         prevImg.addClass("active");
//         prevDot.addClass("dot-active"); 
//     } else {

//         activeImg.removeClass("active");
//         activeDot.removeClass("dot-active");

//         prevImg.addClass("active");
//         prevDot.addClass("dot-active");
//     }
// }

// function genDots(n) {

//     var dots = "";
//     for (var i=0; i<n; i++) {   
        
//         dots += "<i class=\"fas fa-circle\" data-number=\"" + i + "\"></i>";
//         $(".image-dots").html(dots);
        
//     }
// }

// function clickedDot() {
//     var images = $("#images > img");
//     var activeDot = $(".image-dots > i.dot-active");
//     var dotValue = $(this).data("number");

//     activeDot.removeClass("dot-active");
//     $(this).addClass("dot-active");

//     $(".active").removeClass("active");
//     images.eq(dotValue).addClass("active");
    
// }

// function init() {
    
//     $("#images img:first-child").addClass("active");
//     var imagesLng = $("#images > img").length;
//     genDots(imagesLng);
//     $(".image-dots i:first-child").addClass("dot-active");
//     $(".image-dots i:first-child").addClass("first");
//     $(".image-dots i:last-child").addClass("last");

//     $(".next").click(nextClick);
//     $(".prev").click(prevClick);

//     $(".image-dots > *").click(clickedDot);

// }

// $(document).ready(init);


// VanillaJs version

function changeSlide(index, images, dots, actionVal) {
    
    var newIndex = index + actionVal;
    images[index].classList.remove("active");
    dots[index].classList.remove("dot-active");

    if (newIndex > images.length - 1) {

        newIndex = 0;
    } else if (newIndex < 0) {

        newIndex = images.length - 1;
    }

    images[newIndex].classList.add("active");
    dots[newIndex].classList.add("dot-active");
    
    return newIndex;
}

function genDots(lng) {
    
    for (var i=0; i<lng; i++) {
        var dot = "<i class=\"fas fa-circle\" data-number=\"" + i + "\"></i>";
        document.getElementById("image-dots").innerHTML += dot;
    }
}



function init() {
    
    var images = document.querySelectorAll("#images > img");
    var index = 0;
    genDots(images.length);

    var dots = document.querySelectorAll(".image-dots > i");

    images[index].classList.add("active");
    dots[index].classList.add("dot-active");


    var nextButton = document.getElementById("next");
    var prevButton = document.getElementById("prev");

    nextButton.addEventListener("click", function() {

       index = changeSlide(index, images, dots, 1);
    });

    prevButton.addEventListener("click", function() {

        index = changeSlide(index, images, dots, -1);
     });

     for (var i=0; i<dots.length; i++) {
        
        dots[i].addEventListener("click", function() {

            var dotValue = parseInt(this.dataset.number);

            images[index].classList.remove("active");
            dots[index].classList.remove("dot-active");
            this.classList.add("dot-active");
            images[dotValue].classList.add("active");

            index = dotValue;
        });
    }    
}

document.addEventListener("DOMContentLoaded", init);
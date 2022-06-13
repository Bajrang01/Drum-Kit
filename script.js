var totalButton = document.querySelectorAll(".drum").length;

//Through this loop we have added event listner for the buttons......
for (var i = 0; i < totalButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //console.log(this);
        //console.log(this.innerHTML);
        //We can change identity of a button, when it get clicked..... 
        //this.style.color = "pink";
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);

    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    //This is how we can add a new class to any element.
    activeButton.classList.add("color");
    //setTimeout function is used to set time for any event.
    //syntax - setTimeout(function, time(milliSeconds), parameter1, parameter2....)
    setTimeout(function() {
        activeButton.classList.remove("pressed");
        //this is how we can remove a class from an element.
    }, 500);
    setTimeout(function() {
        activeButton.classList.remove("color");
    }, 500);
}
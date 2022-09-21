// Obtain a reference to all of the drum classes
let drum = document.querySelectorAll('.drum');


//Get a reference to the document adding a listening event of keydown and passing an anonymous function with the event in which it was envoked
document.addEventListener('keydown', function (event) {
    // passing the function above with the event's key
    makeSound(event.key)

});


// Creating a for loop that will iterate through all the drum elements
for (i = 0; i < drum.length; i++) {
    // Adding an event listener to click and respond to an alert on click
    drum[i].addEventListener('click', function () {
        // Using "this" to access the clicked button where envoked
        console.log(this);
        let buttonClicked = this.innerHTML
        //call function below and pass the buttonClick to run on the switch statment function below
        makeSound(buttonClicked);

    });
}



//creating a function that will pass the key as a parameter to be checked by the switch statment

function makeSound(key) {
    // Impleentation of switch statment depending on innterHTML 
    switch (key) {
        case 'w':
            let wAudio = new Audio('./sounds/tom-1.mp3')
            wAudio.play();
            break;
        case 'a':
            let aAudio = new Audio('./sounds/tom-2.mp3')
            aAudio.play();
            break;
        case 's':
            let sAudio = new Audio('./sounds/tom-3.mp3')
            sAudio.play();
            break;
        case 'd':
            let dAudio = new Audio('./sounds/tom-4.mp3')
            dAudio.play();
            break;
        case 'j':
            let jAudio = new Audio('./sounds/crash.mp3')
            jAudio.play();
            break;
        case 'k':
            let kAudio = new Audio('./sounds/kick-bass.mp3')
            kAudio.play();
            break;
        case 'l':
            let lAudio = new Audio('./sounds/snare.mp3')
            lAudio.play();
            break;
        default:
            console.log('No button was clicked');
            break;
    }
}






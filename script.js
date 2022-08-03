
let drum = document.querySelectorAll('.drum').length;

// anonymous function 
for (let i = 0; i < drum; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        let condition = this.textContent;
        let audio;

        switch (condition) {
            case "w":
                audio = new Audio('./sounds/crash.mp3');
                audio.play();
                break;
            case "a":
                audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                break;
            case "s":
                audio = new Audio('./sounds/snare.mp3');
                audio.play();
                break;
            case "d":
                audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                break;
            case "j":
                audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break;
            case "k":
                audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                break;
            case "l":
                audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                break;
            default:
                alert("You didn't click a button");
                break;
        }

    });
}





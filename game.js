let state = false;
let paused = true;
let character = document.getElementById('chick');
let canvas = document.getElementById('canvas');
let pauseButton = document.getElementById('pause');
let continueButton = document.getElementById('continue');
let y_position = character.style.bottom;

function start() {
    canvas.classList.toggle('active');
    pauseButton.classList.toggle('active');
    state = true;
    paused = false;
}

function pause() {
    canvas.style.animationPlayState = 'paused';
    pauseButton.classList.toggle('active');
    continueButton.classList.toggle('paused');
    paused = true;
}

function cont() {
    canvas.style.animationPlayState = 'running';
    pauseButton.classList.toggle('active');
    continueButton.classList.toggle('paused');
    paused = false;
}

window.onload = function() {
    let score = 0;
    document.getElementById('score').innerHTML = `Score: ${score}`;
    document.onkeydown = function(event) {
        if (event.key === " " && state == true && paused == false) {
            
            console.log(character.style.bottom);  
        }
    }
}





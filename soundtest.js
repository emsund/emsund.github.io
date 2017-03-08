var soundID = "Thunder";

function loadSound () {
createjs.Sound.registerSound("assets/Thundr.ogg", soundID);
}

function playSound () {
createjs.Sound.play(soundID);
}

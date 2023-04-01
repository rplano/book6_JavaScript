/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: PianoConsole
 * 
 * A simple ConsoleProgram that plays a simple tune.
 * 
 * @see Music and mathematics,
 *      en.wikipedia.org/wiki/Mathematics_of_musical_scales
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

include("./libraries/p5.sound.min.js");

// const tune = ["C4", "D4", "E4", "F4", "G4", "G4", "A4", "A4", "A4", "A4", "G4"];
const tune = [0, 1, 2, 3, 4, 4, 5, 5, 5, 5, 4];
const songFileNames = "CDEFGAB";
let soundFiles = [];
let counter = 0;
let currentSong = undefined;

// sounds must be preloaded
function preload() {
	for (let i = 0; i < songFileNames.length; i++) {
		let soundName = songFileNames.charAt(i) + '4';
		let fileName = 'Pr7_Asteroids/music/' + soundName + '.wav';
		soundFiles[i] = loadSound(fileName);
	}
}

function setup() {
	createConsole();
	loop();
	frameRate(5);

	currentSong = soundFiles[0];
}

function draw() {
	if (!currentSong.isPlaying() && counter < tune.length) {
		let tun = tune[counter];
		print(songFileNames.charAt(tun) + ",");
		currentSong = soundFiles[tun];
		currentSong.play();
		counter++;
	}
}
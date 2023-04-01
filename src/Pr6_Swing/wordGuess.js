/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: WordGuess
 * 
 * Like hangman. You are shown empty spaces, and you can guess letters.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 300;
const WIDTH = SIZE;
const HEIGHT = 120;
const rgen = new RandomGenerator();

let wordLbl;
let wordToGuess;
let wordShown;

function setup() {
	createGUI(WIDTH, HEIGHT);
	frameRate(5);
	setLayout('border');

	initWord();

	wordLbl = new JSLabel(wordShown);
	wordLbl.addStyle('font: 60px Courier;');
	addWidget(wordLbl, 'NORTH');
}

function initWord() {
	wordToGuess = pickRandomWord();
	wordShown = "";
	for (let i = 0; i < wordToGuess.length; i++) {
		wordShown += "-";
	}
}

function keyTyped(key) {
	let c = key;
	if (wordToGuess.indexOf(c) > -1) {
		let wordShownNew = "";
		for (let i = 0; i < wordToGuess.length; i++) {
			if (wordToGuess.charAt(i) == c) {
				wordShownNew += c;
			} else {
				wordShownNew += wordShown.charAt(i);
			}
		}
		wordShown = wordShownNew;
		wordLbl.setText(wordShown);
	}
}

function pickRandomWord() {
	words = ["dog", "fish", "chicken", "cat", "mother"];
	let index = rgen.nextInt(0, words.length - 1);
	return words[index];
}
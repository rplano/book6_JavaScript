/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: WordTwist
 * 
 * Take a word, switch some of the letters and let the user guess the original
 * word. Like anagram.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const rgen = new RandomGenerator();

async function setup() {
	createConsole();

	let score = 0;
	while (true) {
		let originalWord = pickGuessWord();
		let scrambledWord = scrambleWord(originalWord);
		println(scrambledWord);
		let guess = await readLine("Your guess: ");
		if (guess.length == 0)
			break;
		if (guess == originalWord) {
			println("correct");
			score++;
		} else {
			println("incorrect");
		}
	}
	println("Your score is: " + score);
}

function scrambleWord(word) {
	for (let i = 0; i < word.length; i++) {
		word = randomSwap(word);
	}
	return word;
}

function randomSwap(word) {
	let i = rgen.nextInt(0, word.length - 2);
	let j = rgen.nextInt(i + 1, word.length - 1);
	let ci = word.charAt(i);
	let cj = word.charAt(j);
	let scrWord = word.substring(0, i) + cj + word.substring(i + 1, j)
		+ ci + word.substring(j + 1);
	return scrWord;
}

// function randomSwap2( word) {
// 	let i = rgen.nextInt(0, word.length() - 1);
// 	let j = rgen.nextInt(0, word.length() - 1);
// 	let[] chars = word.toCharArray();
// 	let c = chars[i];
// 	chars[i] = chars[j];
// 	chars[j] = c;
// 	word = new String(chars);
// 	return word;
// }

function pickGuessWord() {
	let rgen = new RandomGenerator();
	switch (rgen.nextInt(0, 3)) {
	case 0:
		return "dog";
	case 1:
		return "cat";
	default:
		return "chicken";
	}
}

// function pickGuessWord() {
// 	let words = ["dog", "fish", "chicken", "cat", "mother"];
// 	let index = rgen.nextInt(0, words.length - 1);
// 	return words[index];
// }
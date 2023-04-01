/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: VocabularyTrainerSwing
 * 
 * A UI program that shows an English word and asks the user for the German
 * word.
 * 
 * ToDo: <br/>
 * - add more logic <br/>
 * - sounds would be cool <br/>
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 300;
const APP_WIDTH = SIZE;
const APP_HEIGHT = 240;
const rgen = new RandomGenerator();

let englishLbl;
let germanTf;

let dictionary;

function setup() {
	createGUI(APP_WIDTH, APP_HEIGHT);
	frameRate(5);
	setLayout('border');

	initDictionary();

	englishLbl = new JSLabel("english");
	englishLbl.addStyle('font: 60px SansSerif;');
	addWidget(englishLbl, 'NORTH');

	germanTf = new JSTextField(4, "german");
	germanTf.addStyle('font: 60px SansSerif;');
	// germanTf.setPreferredSize(new Dimension(SIZE - 10, 60));
	// germanTf.addActionListener(this);
	addWidget(germanTf, 'SOUTH');

	setRandomWord();
}

function setRandomWord() {
	let mapIter = dictionary.keySet();

	// pick a random word
	for (let i = 0; i < rgen.nextInt(dictionary.size()); i++) {
		mapIter.next();		
	}
	let randomWord = mapIter.next().value;

	// show random word
	englishLbl.setText(randomWord);
	germanTf.setText("");
}

function initDictionary() {
	dictionary = new HashMap();
	dictionary.put("dog", "hund");
	dictionary.put("cat", "katze");
	dictionary.put("fish", "fisch");
}

function actionPerformed(e) {
	let english = englishLbl.getText();
	let guess = germanTf.getText();
	if (guess.toLowerCase() == dictionary.get(english)) {
		JSOptionPane.showMessageDialog(this, "Great job!",
			"Check", JSOptionPane.INFORMATION_MESSAGE);
	} else {
		JSOptionPane.showMessageDialog(this, "Try again!",
			"Check", JSOptionPane.INFORMATION_MESSAGE);
	}

	setRandomWord();
}
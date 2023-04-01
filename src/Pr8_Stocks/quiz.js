/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: Quiz
 * 
 * A Swing program that creates a UI for multiple choice exams, loads questions
 * from a file and administers quiz.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let lbl;
let answersPnl;
let btnPrevious;
let btnNext;

let questions;
let currentQuestion = 0;

function setup() {
	createGUI(300, 150);
	frameRate(5);
	setLayout('border');

	loadQuestions();
	buildUI();
	setQuestion(currentQuestion);
}

function actionPerformed(e) {
	if (e.getSource() == btnNext) {
		currentQuestion++;
		currentQuestion = currentQuestion % questions.size();
		setQuestion(currentQuestion);
	} else if (e.getSource() == btnPrevious) {
		currentQuestion--;
		// needed because Java's modulo is actually remainder
		currentQuestion += questions.size();
		currentQuestion = currentQuestion % questions.size();
		setQuestion(currentQuestion);
	} else {
		print('a selection was made: '+e.getActionCommand());
	}
}

function setQuestion(index) {
	let q = questions.get(index);
	lbl.setText(q.question);
	buildMultipleChoiceAnswers(q.answers);
}

function buildUI() {
	lbl = new JSLabel("hi");
	addWidget(lbl, 'NORTH');

	answersPnl = new JSPanel();
	addWidget(answersPnl, 'CENTER');

	btnPrevious = new JSButton("< Previous");
	addWidget(btnPrevious, 'SOUTH');
	btnNext = new JSButton("Next >");
	addWidget(btnNext, 'SOUTH');
}

function buildMultipleChoiceAnswers(answers) {
	// removeWidget(answersPnl, 'CENTER');	
	// answersPnl = new JSPanel();
	// addWidget(answersPnl, 'CENTER');
	answersPnl.removeAll();
	answersPnl.setLayout('grid', 1);
	for (let i = 1; i < answers.length; i++) {
		let btn1 = new JSRadioButton(answers[i]);
		btn1.addStyle('margin-left: 100px; margin-right: auto;');
		answersPnl.add(btn1);
	}
}

function loadQuestions() {
	questions = new ArrayList();

	// open file
	let fr = new Utils.FileReader("Pr8_Stocks/quiz.txt");

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;
		let words = line.split(";");
		let q = new Question(words);
		questions.add(q);
	}

	// close file
	fr.close();
}

// a local class
class Question {

	constructor(words) {
		this.question = words[0];
		this.answers = words;
	}
	toString() {
		return this.question + this.answers;
	}
}
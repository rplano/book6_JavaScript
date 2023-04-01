/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: Quiz
 * 
 * A Swing program that creates a UI for multiple choice exams.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */
function setup() {
	createGUI(300, 150);
	frameRate(5);
	setLayout('border');

	let question = "Correct:  1 + 1 = 2 ?";
	let answer1 = "Yes";
	let answer2 = "No";
	let answer3 = "Maybe";

	let lbl = new JSLabel(question);
	addWidget(lbl, 'NORTH');

	let answersPnl = new JSPanel();
	buildMultipleChoiceAnswers(answer1, answer2, answer3, answersPnl);
	addWidget(answersPnl, 'CENTER');

	let btnPrevious = new JSButton("< Previous");
	addWidget(btnPrevious, 'SOUTH');
	let btnNext = new JSButton("Next >");
	addWidget(btnNext, 'SOUTH');
}

function buildMultipleChoiceAnswers(answer1, answer2,
	answer3, answersPnl) {
	answersPnl.setLayout('grid', 1);
	// answersPnl.addStyle('justify-self: start;');
	let btn1 = new JSRadioButton(answer1);
	btn1.addStyle('justify-self: start;');
	answersPnl.add(btn1);
	let btn2 = new JSRadioButton(answer2);
	btn2.addStyle('justify-self: start;');
	answersPnl.add(btn2);
	let btn3 = new JSRadioButton(answer3);
	btn3.addStyle('justify-self: start;');
	answersPnl.add(btn3);
	// ButtonGroup happyGrp = new ButtonGroup();
	// happyGrp.add(btn1);
	// happyGrp.add(btn2);
	// happyGrp.add(btn3);
}
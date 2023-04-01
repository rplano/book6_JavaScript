/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: Calculator
 * 
 * A Swing program that counts down second using a JLabel.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const btnNames = ["7", "8", "9", "/", "4", "5", "6", "*",
	"1", "2", "3", "-", ".", "0", "=", "+"];

let display;
let operand1 = 0;
let operation = '+';

function setup() {
	createGUI(300, 150);
	setLayout('border');

	display = new JSTextField(12);
	// display.setEditable(false);
	display.addStyle('font: 32px Arial;');
	display.addStyle('text-align: right;');
	addWidget(display, 'NORTH');

	let pnl = new JSPanel('grid', 4);
	addWidget(pnl, 'CENTER');
	for (let i = 0; i < btnNames.length; i++) {
		let btn = new JSButton(btnNames[i]);
		pnl.add(btn);
	}
}

function actionPerformed(e) {
	let cmd = e.getActionCommand().charAt(0);
	switch (cmd) {
		case '=':
			let operand2 = Number(display.getText());
			let result = calculate(operand1, operand2, operation);
			display.setText("" + result);
			break;
		case '+':
		case '-':
		case '*':
		case '/':
			operand1 = Number(display.getText());
			display.setText("");
			operation = cmd;
			break;
		case '.':
		default:
			display.setText(display.getText() + cmd);
			break;
	}
}

function calculate(operand1, operand2, operation) {
	let result = 0;
	switch (operation) {
		case '+':
			result = operand1 + operand2;
			break;
		case '-':
			result = operand1 - operand2;
			break;
		case '*':
			result = operand1 * operand2;
			break;
		case '/':
			result = operand1 / operand2;
			break;
	}
	return result;
}
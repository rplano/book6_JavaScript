/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: 2. UploadFile
 * 
 * GUIProgram that uplaodes a file from file system to browser.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
	createGUI(300, 150);

	let fritz = new JSFileUpload();
	addWidget(fritz);
}

function onChange(ev) {
	let input = ev.target;
	let reader = new FileReader();
	reader.onload = function () {
		// let dataURL = reader.result;
		// let output = document.getElementById('output');
		// output.src = dataURL;
		let text = reader.result;
		print(text);
	};
	// reader.readAsDataURL(input.files[0]);
	reader.readAsText(input.files[0]);
}
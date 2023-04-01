/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: Encrypt
 * 
 * Encrypts and decrypts a string using Caesar's cipher.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let str = await readLine("Enter String: ");
	let enc = encryptCaesar(str.toLowerCase(), 3);
	println(enc);
	let dec = decryptCaesar(enc, 3);
	println(dec);
}

function decryptCaesar(str, key) {
	let dec = "";
	for (let i = 0; i < str.length; i++) {
		dec += decryptChar(str.charAt(i), key);
	}
	return dec;
}

function decryptChar(c, key) {
	let d = c.charCodeAt(0) - 'a'.charCodeAt(0);
	let e = d - key;
	let f = e % 26;
	let g = String.fromCharCode(f + 'a'.charCodeAt(0));
	return g;
}

function encryptCaesar(str, key) {
	let enc = "";
	for (let i = 0; i < str.length; i++) {
		enc += encryptChar(str.charAt(i), key);
	}
	return enc;
}

function encryptChar(c, key) {
	let d = c.charCodeAt(0) - 'a'.charCodeAt(0);
	let e = d + key;
	let f = e % 26;
	let g = String.fromCharCode(f + 'a'.charCodeAt(0));
	return g;
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: PasswordCreator
 * 
 * Creates a random password.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const small = "abcdefghijklmnopqrstuvwxyz";
const big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!#$%&'()*+,-./:;<=>?@[]^_{|}";

const rgen = new RandomGenerator();

async function setup() {
	createConsole();

	let password = generatePassword();
	println(password);
}

function generatePassword() {
	let password = "";
	password += small.charAt(rgen.nextInt(small.length));
	password += big.charAt(rgen.nextInt(big.length));
	password += numbers.charAt(rgen.nextInt(numbers.length));
	password += symbols.charAt(rgen.nextInt(symbols.length));
	password += small.charAt(rgen.nextInt(small.length));
	password += big.charAt(rgen.nextInt(big.length));
	password += numbers.charAt(rgen.nextInt(numbers.length));
	password += symbols.charAt(rgen.nextInt(symbols.length));
	return password;
}
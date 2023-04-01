/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: Palindrome
 * 
 * Checks if a given string is a palindrome.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let str = await readLine("Enter String: ");
	if (isPalindrome(str)) {
		println("'" + str + "' is a palindrome.");
	} else {
		println("'" + str + "' is NOT a palindrome.");
	}
}

function isPalindrome(str) {
	if (str == revert(str)) {
		return true;
	} else {
		return false;
	}
}

function revert(s) {
	let revers = "";
	for (let i = s.length - 1; i >= 0; i--) {
		revers += s.charAt(i);
	}
	return revers;
}
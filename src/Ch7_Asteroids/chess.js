/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: 3. Chess
 * 
 * A simple console program shows how to use two dimensional arrays.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const chess = [
	['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
	['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
	['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']];

async function setup() {
	createConsole(9, 20);

	printChessBoard();
}

function printChessBoard() {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			print(chess[i][j]);
		}
		println();
	}
}
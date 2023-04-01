/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: GameOfLife
 * 
 * Conway's Game of Life en.wikipedia.org/wiki/Conway's_Game_of_Life
 * 
 * The universe of the Game of Life is an infinite two-dimensional orthogonal
 * grid of square cells, each of which is in one of two possible states, alive
 * or dead. Every cell interacts with its eight neighbours, which are the cells
 * that are horizontally, vertically, or diagonally adjacent.
 * 
 * At each step in time, the following transitions occur: <br/>
 * - Any live cell with fewer than two live neighbours dies, as if caused by
 * under-population. <br/>
 * - Any live cell with two or three live neighbours lives on to the next
 * generation. <br/>
 * - Any live cell with more than three live neighbours dies, as if by
 * overcrowding. <br/>
 * - Any dead cell with exactly three live neighbours becomes a live cell, as if
 * by reproduction. <br/>
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 100;
const CELL_SIZE_IN_PIXEL = 4;
const DELAY = 100;
const LIFE_PROBABILITY = 0.5;
const rgen = new RandomGenerator();

let cells = makeArray(SIZE,SIZE);//new boolean[SIZE][SIZE];

function makeArray(d1, d2) {
    var arr = [];
    for(let i = 0; i < d2; i++) {
        arr.push(new Array(d1));
    }
    return arr;
}

function setup() {
	createCanvas(SIZE * CELL_SIZE_IN_PIXEL, SIZE * CELL_SIZE_IN_PIXEL);
	frameRate(5);

	for (let i = 0; i < SIZE * SIZE * LIFE_PROBABILITY; i++) {
		cells[rgen.nextInt(0, SIZE - 1)][rgen.nextInt(0, SIZE - 1)] = true;
	}
	// print(cells);
}

function draw() {
	displayCells();
	transitions();
	update();
	// noLoop();
}

function transitions() {
	let temp = makeArray(SIZE,SIZE);//new boolean[SIZE][SIZE];
	for (let i = 0; i < SIZE; i++) {
		for (let j = 0; j < SIZE; j++) {
			let nrOfNeighbors = countNeighbors(i, j);
			if (cells[i][j]) {
				// Any live cell with fewer than two live neighbours dies,
				// as if caused by under-population.

				// Any live cell with two or three live neighbours lives on
				// to the next generation.
				if ((nrOfNeighbors == 2) || (nrOfNeighbors == 3)) {
					temp[i][j] = true;
				}
				// Any live cell with more than three live neighbours dies,
				// as if by overcrowding.

			} else {
				// Any dead cell with exactly three live neighbours becomes
				// a live cell, as if by reproduction.
				if (nrOfNeighbors == 3) {
					temp[i][j] = true;
				}
			}
		}
	}
	cells = temp;
}

function countNeighbors(i, j) {
	let counter = 0;
	if (testCell(i - 1, j - 1))
		counter++;
	if (testCell(i - 1, j))
		counter++;
	if (testCell(i - 1, j + 1))
		counter++;
	if (testCell(i, j - 1))
		counter++;
	if (testCell(i, j + 1))
		counter++;
	if (testCell(i + 1, j - 1))
		counter++;
	if (testCell(i + 1, j))
		counter++;
	if (testCell(i + 1, j + 1))
		counter++;
	return counter;
}

// truncates at borders
function testCell1(i, j) {
	if (i >= 0 && i <= SIZE - 1) {
		if (j >= 0 && j <= SIZE - 1) {
			return cells[i][j];
		}
	}
	return false;
}

// loops around at borders
function testCell(i, j) {
	return cells[(i + SIZE) % SIZE][(j + SIZE) % SIZE];
}

function displayCells() {
	removeAll();
	for (let i = 0; i < SIZE; i++) {
		for (let j = 0; j < SIZE; j++) {
			if (cells[i][j]) {
				// print(CELL_SIZE_IN_PIXEL * i);
				let r = new GRect(CELL_SIZE_IN_PIXEL * i,
					CELL_SIZE_IN_PIXEL * j, CELL_SIZE_IN_PIXEL,
					CELL_SIZE_IN_PIXEL);
				r.setFilled(true);
				add(r);
			}
		}
	}
}
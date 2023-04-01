/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: Rabbits
 * 
 * "Fibonacci considers the growth of an idealized rabbit population, assuming
 * that: a newly born pair of rabbits, one male, one female, are put in a field;
 * rabbits are able to mate at the age of one month so that at the end of its
 * second month a female can produce another pair of rabbits; rabbits never die
 * and a mating pair always produces one new pair (one male, one female) every
 * month from the second month on." Source:
 * https://en.wikipedia.org/wiki/Fibonacci_number
 * 
 * The number count pairs of rabbits: 1,1,2,3,5,8,13,21,34,55,89,...
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */
let maleRabbits = 0;
let femaleRabbits = 0;
let boyRabbits = 1;
let girlRabbits = 1;

async function setup() {
	createConsole();

	for (let months = 0; months < 12; months++) {
		print(getTotalNrOfRabbits() + ",");
		reproduce();
	}
}

function reproduce() {
	maleRabbits += boyRabbits;
	boyRabbits = femaleRabbits;
	let tmp = girlRabbits;
	girlRabbits = femaleRabbits;
	femaleRabbits += tmp;
}

function getTotalNrOfRabbits() {
	return (maleRabbits + femaleRabbits + boyRabbits + girlRabbits) / 2;
}
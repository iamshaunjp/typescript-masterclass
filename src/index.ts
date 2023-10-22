//---------------------
// function signatures
//---------------------

type Calculator = (numOne: number, numTwo: number) => number

function addTwoNumbers(a: number, b: number) {
	return a + b
}
function multiplyTwoNumbers(first: number, second: number) {
	return first * second
}
function squareNumber(num: number) {
	return num * num
}
function joinTwoNumbers(numOne: number, numTwo: number) {
	return `${numOne}${numTwo}`
}

let calcs: Calculator[] = []

calcs.push(addTwoNumbers)
calcs.push(multiplyTwoNumbers)
calcs.push(squareNumber)
// calcs.push(joinTwoNumbers) --> not allowed, returns a string

//-----------------------------------
// function signatures on interfaces
//-----------------------------------

interface HasArea {
	name: string
	// calcArea: (a: number) => number
	calcArea(a: number): number
}

const shapeOne: HasArea = {
	name: 'square',
	calcArea(l: number) {
		return l * l
	},
}

const shapeTwo: HasArea = {
	name: 'circle',
	calcArea(r: number) {
		return (Math.PI * r) ^ 2
	},
}

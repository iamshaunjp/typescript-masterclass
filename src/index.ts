//-----------
// functions
//-----------

function addTwoNumbers(a: number, b: number): number {
	return a + b
}

const subtractTwoNumbers = (a: number, b: number): number => {
	return a - b
}

// addTwoNumbers('2', 5)
addTwoNumbers(3, 9)
subtractTwoNumbers(10, 7)

function addAllNumbers(items: number[]): void {
	const total = items.reduce((a, c) => a + c, 0)
	console.log(total)
}

addAllNumbers([5, 7, 9, 11, 3, 2, 1])

//-----------------------
// return type inference
//-----------------------

function formatGreeting(name: string, greeting: string) {
	return `${greeting}, ${name}`
}

// we get inference on return types, but not on argument types
// type inference on return values does not enforce a return type

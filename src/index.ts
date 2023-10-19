//-------------
// type guards
//-------------

// example 1

type Id = number | string

function swapIdType(id: Id): Id {
	if (typeof id === 'string') {
		// can use string methods and properties
		return parseInt(id)
	} else {
		// can use number methods and properties
		return id.toString()
	}
}

const idOne = swapIdType(1)
const idTwo = swapIdType('2')

console.log(idOne, idTwo)

//--------------------
// tagged union types
//--------------------

interface User {
	type: 'user'
	username: string
	email: string
	id: Id
}
interface Person {
	type: 'person'
	firstname: string
	age: number
	id: Id
}

function logDetails(value: User | Person): void {
	if (value.type === 'user') {
		console.log(value.email, value.username)
	}
	if (value.type === 'person') {
		console.log(value.firstname, value.age)
	}
}

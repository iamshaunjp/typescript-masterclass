//--------
// arrays
//--------

let names: string[] = ['mario', 'luigi', 'peach']
let ages: number[] = [25, 28, 24]

// names.push(true)
names.push('bowser')

// ages.push('35')
ages.push(30)

//----------------------------
// type inference with arrays
//----------------------------

let fruits = ['apples', 'pears', 'bananas', 'mangos']

// fruits.push(20)
fruits.push('peaches')

const f = fruits[3] // infers the type based on fruits type

let things = [1, true, 'hello']

const t = things[0] // can be any of the types initially added

//-----------------
// object literals
//-----------------

let user: { firstName: string; age: number; id: number } = {
	firstName: 'mario',
	age: 30,
	id: 1,
	// isFictional: true
}

// user.name = 25
// user.email = 'peach@netninja.dev'
user.firstName = 'peach'
user.id = 2

// destructuring from objects
const { age, id }: { age: number; id: number } = user

//-------------------------------------
// type inference with object literals
//-------------------------------------

let person = {
	name: 'luigi',
	score: 35,
}

// person.name = true
// person.id = 3
person.name = 'bowser'

const score = person.score // infers number type

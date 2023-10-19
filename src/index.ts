//-------------
// union types
//-------------

let someId: number | string

someId = 1
someId = '2'

let email: string | undefined = undefined

email = 'mario@netninja.dev'
email = undefined

type Id = number | string
let anotherId: Id

// anotherId = undefined
anotherId = '1'
anotherId = 2

//--------------------
// union type pitfall
//--------------------

function swapIdType(id: Id): Id {
	// can only use props and methods common to
	// both number and string types
	// parseInt(id) --> not allowed

	return id
}

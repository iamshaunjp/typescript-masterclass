//--------------------
// sets in typescript
//--------------------

const names = new Set<string>()

names.add('mario')
names.add('luigi')
names.add('peach')
names.add('mario') // --> duplicate, won't add it

console.log(names)

//------------------------
// sets with custom types
//------------------------

interface User {
	email: string
	score: number
}

const user1: User = { email: 'mario@netninja.dev', score: 10 }
const user2: User = { email: 'peach@netninja.dev', score: 15 }

const users = new Set<User>()

users.add(user1)
users.add(user2)
users.add(user1) // duplicate of user1 --> won't add

console.log(users)

//----------------------------
// sets as function arguments
//----------------------------

function logUserEmails(users: Set<User>): void {
	users.forEach((user) => console.log(user.email))
}

logUserEmails(users)

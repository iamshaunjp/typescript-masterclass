//-----------------
// Generic Classes
//-----------------

class DataCollection<T> {
	constructor(private data: T[]) {}

	loadOne(): T {
		const i = Math.floor(Math.random() * this.data.length)
		return this.data[i]
	}
	loadAll(): T[] {
		return this.data
	}
	add(val: T): T[] {
		this.data.push(val)
		return this.data
	}
}

interface User {
	name: string
	score: number
}

const users = new DataCollection<User>([
	{ name: 'shaun', score: 125 },
	{ name: 'mario', score: 100 },
	{ name: 'peach', score: 150 },
])

users.add({ name: 'luigi', score: 50 })

console.log('load one - ', users.loadOne())
console.log('load all - ', users.loadAll())

//-------------------
// Intersection Type
//-------------------

type Person = {
	firstName: string
	id: number
}

type User = Person & {
	email: string
}

// example with generic function

function addIdToValue<T>(val: T): T & HasID {
	const id = Math.random()

	return { ...val, id }
}

interface Post {
	title: string
	thumbsUp: number
}

interface HasID {
	id: number
}

const post = addIdToValue<Post>({ title: 'Marmite Rules', thumbsUp: 250 })
console.log(post.id, post.title, post.thumbsUp)

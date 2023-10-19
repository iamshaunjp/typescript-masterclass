//------------
// interfaces
//------------

interface Author {
	name: string
	avatar: string
}

const authorOne: Author = { name: 'mario', avatar: '/img/mario.png' }

interface Post {
	title: string
	body: string
	tags: string[]
	created_at: Date
	author: Author
}

const newPost = {
	title: 'my first post',
	body: 'something interesting',
	tags: ['gaming', 'tech'],
	created_at: new Date(),
	author: authorOne,
}

//----------------------------
// as function argument types
//----------------------------

function createPost(post: Post): void {
	console.log(`created post ${post.title} by ${post.author.name}`)
}

// createPost({ title: 'a new post title' })
createPost(newPost)

//-------------
// with arrays
//-------------

let posts: Post[] = []

// posts.push({ title: 'some title' })
posts.push(newPost)

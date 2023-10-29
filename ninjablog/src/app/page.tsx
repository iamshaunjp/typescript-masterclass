import PostCard from '@/components/PostCard'

const fetchPosts = async (): Promise<Post[]> => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')

	if (!res.ok) {
		console.log('could not fetch the posts')
	}

	return res.json()
}

export default async function Home() {
	const posts = await fetchPosts()

	return (
		<main>
			<h2>Home</h2>
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</main>
	)
}

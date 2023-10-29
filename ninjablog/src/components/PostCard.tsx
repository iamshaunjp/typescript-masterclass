// interface PostCardProps {
//   title: string,
//   author: string,
// }

export default function PostCard({
	title,
	author,
}: {
	title: string
	author: string
}) {
	return (
		<div className='card'>
			<h2>{title}</h2>
			<p>written by {author}</p>
		</div>
	)
}

const titleInput = document.querySelector(
	'input[name="title"]'
) as HTMLInputElement
const descriptionInput = document.querySelector(
	'textarea'
) as HTMLTextAreaElement

const form = document.querySelector('.create') as HTMLFormElement

form.addEventListener('submit', async (e) => {
	e.preventDefault()
})

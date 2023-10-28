export class DataResource<T> {
	constructor(private endpoint: string) {}

	async loadAll() {}
	async loadOne(id: number) {}
	async delete(id: number) {}
	async save(data: T) {}
}

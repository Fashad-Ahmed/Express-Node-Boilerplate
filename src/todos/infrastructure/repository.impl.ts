import { type PaginationDto, type PaginationResponseEntity } from '../../shared';

import { type TodoEntity, type TodoDatasource, type TodoRepository } from '../domain';

export class TodoRepositoryImpl implements TodoRepository {
	constructor(private readonly datasource: TodoDatasource) {}

	async getAll(pagination: PaginationDto): Promise<PaginationResponseEntity<TodoEntity[]>> {
		return await this.datasource.getAll(pagination);
	}
}

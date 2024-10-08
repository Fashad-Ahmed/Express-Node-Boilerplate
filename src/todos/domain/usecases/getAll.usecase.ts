import { type TodoEntity } from '../entities';
import { type TodoRepository } from '../repositories/respository';
import { type PaginationDto, type PaginationResponseEntity } from '../../shared';

export interface GetTodosUseCase {
	execute: (pagination: PaginationDto) => Promise<PaginationResponseEntity<TodoEntity[]>>;
}

export class GetTodos implements GetTodosUseCase {
	constructor(private readonly repository: TodoRepository) {}

	async execute(pagination: PaginationDto): Promise<PaginationResponseEntity<TodoEntity[]>> {
		return await this.repository.getAll(pagination);
	}
}

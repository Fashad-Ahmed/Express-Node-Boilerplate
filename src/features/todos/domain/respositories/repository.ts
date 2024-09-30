import { type TodoEntity } from '../entities/todo.entity';

export abstract class TodoRepository {
	abstract getAll(): Promise<TodoEntity[]>;
}

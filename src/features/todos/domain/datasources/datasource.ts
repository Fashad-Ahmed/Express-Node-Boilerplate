import { type TodoEntity } from '../entities/todo.entity';

export abstract class TodoDatasource {
	abstract getAll(): Promise<TodoEntity[]>;
}

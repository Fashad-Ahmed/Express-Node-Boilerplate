import { type TodoDatasource } from '../domain/datasources/datasource';
import { TodoEntity } from '../domain/entities/todo.entity';

const TODOS_MOCK = [
	{
		id: 1,
		text: 'First TODO...',
		isCompleted: false
	},
	{
		id: 2,
		text: 'Second TODO...',
		isCompleted: false
	}
];

export class TodoDatasourceImpl implements TodoDatasource {
	public async getAll(): Promise<TodoEntity[]> {
		const todos = TODOS_MOCK.map((todo): TodoEntity => TodoEntity.fromJson(todo));
		return todos;
	}

	// In case of external database connection

	// public async getAll(): Promise<TodoEntity[]> {
	//     const todosFromDB = await prisma.todo.findMany();
	//     const todos = todosFromDB.map((todo): TodoEntity => TodoEntity.fromJson(todo));
	//     return todos;
	//    }
}

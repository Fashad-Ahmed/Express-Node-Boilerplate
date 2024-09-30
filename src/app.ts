import { env } from './core/config/env';
import { AppRoutes } from './routes';
import { Server, ServerOptions } from './server';

(() => {
	main();
})();

function main(): void {
	const serverOptions: ServerOptions = {
		routes: AppRoutes.routes,
		port: env.PORT,
		apiPrefix: env.API_PREFIX
	};
	const server = new Server(serverOptions);
	void server.start();
}

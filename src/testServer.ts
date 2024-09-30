import { env } from './core/config/env';
import { AppRoutes } from './routes';
import { Server } from './server';

// This is a test server for testing purposes
export const testServer = new Server({
	port: env.PORT,
	apiPrefix: env.API_PREFIX,
	routes: AppRoutes.routes
});

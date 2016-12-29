import * as hapi from 'hapi';
import { IServerConfig } from '../configs/config';
import * as authentication from './authentication';

export function routes(server: hapi.Server, serverConfig: IServerConfig) {

	server.route({
		method: 'GET',
		path: '/api',
		handler: (request: hapi.Request, reply: hapi.IReply) => {
	    	return reply('Hello world');
	  	}
	});

	authentication.routes(server, serverConfig);

}
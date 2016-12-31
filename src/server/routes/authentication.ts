import * as hapi from 'hapi';
import { IServerConfig } from '../configs/config';

export function routes(server: hapi.Server, serverConfig: IServerConfig) {

	server.route({
		method: 'POST',
		path: '/api/login',
		handler: (request: hapi.Request, reply: hapi.IReply) => {
			if (request.payload.username) {
					reply(`Login Success, User ${request.payload.username}`);
			} else {
	    		reply('Login Unsuccess');
	    	}
	  	}
	});

	server.route({
		method: 'GET',
		path: '/api/logout',
		handler: (request: hapi.Request, reply: hapi.IReply) => {
	    	reply('Logout');
	  	}
	});
	
}
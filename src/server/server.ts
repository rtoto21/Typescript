import * as hapi 				from "hapi";
import * as hoek				from "hoek";
import * as good 				from "good";
import * as goodConsole 		from "good-console";
import * as config 				from "./configs/config";
import * as route				from "./routes/route";

export const server: hapi.Server = new hapi.Server();
const serverConfig: config.IServerConfig = config.getServerConfig();
const pluginOptions = {
	serverConfig: serverConfig
};

server.connection({
	port: serverConfig.port,
	host: serverConfig.host
});

// serverConfig.plugins.forEach((pluginName: string) => {
// 	let plugin: IPlugin = (require('./plugins' + pluginName)).default();
// 	server.log('info', 'Register plugin ' + plugin.info().name + ' v' + plugin.info().version);
// 	plugin.register(server, pluginOptions);
// });

server.register({
	register: good,
	options: {
		reporters: {
			reporterConsole: [
				{
					module: goodConsole,
					args: [{ log: '*', response: '*' }]
				},
				'stdout'
			]
		}
	}
}, (err: any) => {
	hoek.assert(!err, err);
});

route.routes(server, serverConfig);

server.start((err: any) => {
	hoek.assert(!err, err);
	server.log('info', 'Server running at: ' + server.info.uri);
});
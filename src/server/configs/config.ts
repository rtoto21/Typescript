import * as nconf from 'nconf';
import * as path from 'path';

const config = new nconf.Provider({
	arg: true,
	env: true,
	store: {
		type: 'file',
		file: path.join(__dirname, './config-dev.json')
	}
})

export interface IServerConfig {
	port: number;
	host: string;
	plugins: Array<string>;
}

export function getServerConfig(): IServerConfig {
	return config.get('server');
}
import * as lab from "lab";
import * as code from "code";
import * as hapi from "hapi";
import * as server from "../../src/server/server";

const labTest: lab.Lab = exports.lab = lab.script();
const describe = labTest.describe;
const it = labTest.it;
const before = labTest.before;
const after = labTest.after;
const expect = code.expect;

describe('Routes /api', () => {
	before((done: any) => {
		const serverHapi = server.server;
		done();
	})
	it('return 200 HTTP status code /api', (done: any) => {
		let route = {
			method: 'GET',
			url: '/api'
		};
		server.server.inject(route, (response: hapi.IServerInjectResponse) => {
			expect(response.statusCode).to.equal(200) &&
			expect(response.result).to.equals('Hello world');
			done();
		})
	});
	it('return 200 HTTP status code /api/login (Success)', (done: any) => {
		let route = {
			method: 'POST',
			url: '/api/login',
			payload: {
				username: 'Rodrigo'
			}
		};
		server.server.inject(route, (response: hapi.IServerInjectResponse) => {
			expect(response.statusCode).to.equal(200) &&
			expect(response.result).to.equals('Login Success, User Rodrigo');
			done();
		})
	});
	it('return 200 HTTP status code /api/logout', (done: any) => {
		let route = {
			method: 'GET',
			url: '/api/logout'
		};
		server.server.inject(route, (response: hapi.IServerInjectResponse) => {
			expect(response.statusCode).to.equal(200) &&
			expect(response.result).to.equals('Logout');
			done();
		})
	});
	it('return 200 HTTP status code /api/login (Unsuccess)', (done: any) => {
		let route = {
			method: 'POST',
			url: '/api/login',
			payload: {}
		};
		server.server.inject(route, (response: hapi.IServerInjectResponse) => {
			expect(response.statusCode).to.equal(200) &&
			expect(response.result).to.equals('Login Unsuccess');
			done();
		})
	});
});
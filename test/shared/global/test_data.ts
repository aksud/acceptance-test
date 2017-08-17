
import * as chance from 'chance';

export interface IUserData {
	email: string;
	password: string;
	searchBarInput: string;
	accountName: string;
	accountNumber: string;
}

export class UserData {

	static data = (): IUserData => {
		let _chance = new chance();

		const data = {
			email: 'sudakshay@gmail.com',
			password: 'Password1',
			searchBarInput: 'ANZ',
			accountName: 'Akshay ANZ' + _chance.integer({ min: 1, max: 100 }),
			accountNumber: _chance.string({
				pool: '123456789',
				length: 8
			})
		};
		return data;
	}
}


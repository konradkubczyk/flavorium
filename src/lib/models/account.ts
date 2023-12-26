export class Account {
	private _name: string;
	private _email: string;
	private _isLoggedIn: boolean;

	constructor(name = '', email = '', isLoggedIn = false) {
		this._name = name;
		this._email = email;
		this._isLoggedIn = isLoggedIn;
	}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
	}

	get email(): string {
		return this._email;
	}

	set email(value: string) {
		this._email = value;
	}

	get isLoggedIn(): boolean {
		return this._isLoggedIn;
	}

	set isLoggedIn(value: boolean) {
		this._isLoggedIn = value;
	}
}

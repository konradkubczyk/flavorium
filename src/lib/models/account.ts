export class Account {
	private _id: string;
	private _name: string;
	private _email: string;
	private _isLoggedIn: boolean;

	constructor(id = '', name = '', email = '', isLoggedIn = false) {
		this._id = id;
		this._name = name;
		this._email = email;
		this._isLoggedIn = isLoggedIn;
	}

	get id(): string {
		return this._id;
	}

	set id(value: string) {
		this._id = value;
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

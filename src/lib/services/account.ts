import { Account } from '$lib/models/account.ts';
import { account } from '$lib/stores/account.ts';

export async function syncState() {
	const res = await fetch('https://cloud.appwrite.io/v1/account', {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'X-Appwrite-Project': '6556209062be5c6ce4b0'
		}
	});
	if (res.ok) {
		const data = await res.json();
		account.set(new Account(data.$id, data.name, data.email, true));
	} else {
		account.set(new Account('', '', '', false));
	}
}

export async function register(
	email: string,
	password: string,
	name: string,
	userId = 'unique()'
): Promise<number> {
	const res = await fetch('https://cloud.appwrite.io/v1/account', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Appwrite-Project': '6556209062be5c6ce4b0'
		},
		body: JSON.stringify({
			userId: userId,
			email: email,
			password: password,
			name: name
		})
	});
	await syncState();
	return res.status;
}

export async function login(email: string, password: string): Promise<number> {
	const res = await fetch('https://cloud.appwrite.io/v1/account/sessions/email', {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'X-Appwrite-Project': '6556209062be5c6ce4b0'
		},
		body: JSON.stringify({
			email: email,
			password: password
		})
	});
	await syncState();
	return res.status;
}

export async function logout(): Promise<number> {
	const res = await fetch('https://cloud.appwrite.io/v1/account/sessions/current', {
		method: 'DELETE',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'X-Appwrite-Project': '6556209062be5c6ce4b0'
		}
	});
	await syncState();
	return res.status;
}

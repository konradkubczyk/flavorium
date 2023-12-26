import { writable } from 'svelte/store';
import { Account } from '$lib/models/account.ts';
import { syncState } from '$lib/services/account.ts';

export const account = writable(new Account());

syncState();

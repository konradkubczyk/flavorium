import { writable } from 'svelte/store';

const recipes = writable([]);

export default { recipes };

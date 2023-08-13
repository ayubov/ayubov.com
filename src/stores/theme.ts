import { writable } from 'svelte/store';

function createTheme() {
	const { subscribe, update } = writable<'dark' | 'light'>('light');

	return {
		subscribe,
		toggle: () => update((theme) => (theme === 'dark' ? 'light' : 'dark'))
	};
}

export const theme = createTheme();

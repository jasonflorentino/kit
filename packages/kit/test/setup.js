import {
	goto,
	invalidate,
	preloadCode,
	preloadData,
	beforeNavigate,
	afterNavigate
} from '$app/navigation';
import { onMount } from 'svelte';

export function setup() {
	console.log('calling setup()');
	onMount(() => {
		// give tests programmatic control over the app
		Object.assign(window, {
			goto,
			invalidate,
			preloadCode,
			preloadData,
			beforeNavigate,
			afterNavigate
		});

		// communicate that the app is ready
		document.body.classList.add('started');
		console.log('added classlist to body');
	});
}

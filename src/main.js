import App from './App.svelte';
import TextBox from './TextBox.svelte';

const app = new TextBox({
	target: document.body,
	props: {
		name: 'World'
	}
});

export default app;

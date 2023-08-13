<script lang="ts">
	import { onMount } from 'svelte';
	import font from '@fontsource/actor/files/actor-latin-400-normal.woff2';
	import { env } from '$env/dynamic/public';
	import Sidebar from '../components/Sidebar.svelte';
	import Footer from '../components/Footer.svelte';
	import { theme } from '../stores/theme';

	import '../app.css';
	import './styles.css';

	let bgEffect;

	async function init3dBackground(node: HTMLDivElement) {
		const [{ default: Waves }, THREE] = await Promise.all([
			import('vanta/dist/vanta.waves.min'),
			import('three')
		]);

		bgEffect = Waves({
			el: node,
			THREE: THREE,
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: window.innerHeight,
			minWidth: window.innerWidth,
			color: $theme === 'dark' ? '#1f2028' : '#b3b3b3',
			scale: 1.0,
			scaleMobile: 1.0
		});
	}

	onMount(() => {
		function onResize() {
			bgEffect.resize();
		}

		window.addEventListener('resize', onResize);

		return () => window.removeEventListener('resize', onResize);
	});

	theme.subscribe((value) =>
		bgEffect?.setOptions({
			color: value === 'dark' ? '#1f2028' : '#b3b3b3'
		})
	);
</script>

<svelte:head>
	<link rel="preload" href={font} as="font" crossOrigin="anonymous" />
	<title>Alvi Ayubov</title>
	<meta name="description" content="Software engineer, cat lover" />
	<meta name="image" content={env.PUBLIC_META_IMAGE_URL} />
</svelte:head>

<div use:init3dBackground />

<div
	class={`relative mx-4 mb-40 flex max-w-4xl flex-col flex-wrap pt-8 antialiased md:flex-row md:pt-20 lg:mx-auto lg:pt-32 ${$theme}`}
	style={'z-index: 100 !important; backdrop-filter: blur(0px); height: calc(100vh - 40px);'}
>
	<Sidebar />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import font from '@fontsource/actor/files/actor-latin-400-normal.woff2';
	import { afterNavigate } from '$app/navigation';
	import { env } from '$env/dynamic/public';
	import Sidebar from '../components/Sidebar.svelte';
	import Footer from '../components/Footer.svelte';
	import { theme } from '../stores/theme';

	import '../app.css';
	import './styles.css';

	let bgEffect;
	let scrollableWrapper: HTMLElement;

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

	afterNavigate(() => {
		// https://github.com/sveltejs/kit/issues/2733 👀
		if (scrollableWrapper) {
			scrollableWrapper.scrollTop = 0;
		}
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
	<meta property="og:title" content="Alvi Ayubov" />
	<meta property="og:description" content="Software engineer, cat lover" />
	<meta property="og:image" content={env.PUBLIC_META_IMAGE_URL} />
	<meta property="og:image:alt" content="Software engineer, cat lover" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />
</svelte:head>

<div class="h-screen" use:init3dBackground>
	<div
		class={`relative mx-4 flex h-full max-w-4xl flex-col flex-wrap pt-8 antialiased md:flex-row md:flex-nowrap md:pt-20 lg:mx-auto lg:pt-32 ${$theme} `}
		style={'z-index: 100 !important; backdrop-filter: blur(0px);'}
	>
		<Sidebar />
		<div
			bind:this={scrollableWrapper}
			class="m-auto flex max-h-[calc(100vh-88px)] flex-col items-center overflow-scroll md:max-h-[calc(100vh-80px)] lg:max-h-[calc(100vh-128px)]"
		>
			<slot />
			<Footer />
		</div>
	</div>
</div>

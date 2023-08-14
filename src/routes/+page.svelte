<script>
	import { env } from '$env/dynamic/public';

	import { theme } from '../stores/theme';
</script>

<main class="flex flex-col items-center justify-center">
	<picture class="my-8">
		<source srcset={env.PUBLIC_ME_WEBP_URL} type="image/webp" />
		<img
			class="width-full height-auto rounded-full"
			src={env.PUBLIC_ME_URL}
			alt="me"
			width="256"
			height="256"
		/>
	</picture>

	<h2 class="text-primary text-xl md:text-2xl">
		Hello, I'm Alvi. I am a Software Developer, living in gorgeous Yerevan. Welcome to my website {$theme ===
		'dark'
			? '🤍'
			: '🖤'}
	</h2>
</main>

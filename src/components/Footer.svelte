<script lang="ts">
	import SocialMedia from './SocialMedia.svelte';
	import { theme } from '../stores/theme';

	const SOCIAL_MEDIAS = [
		{ type: 'github', href: 'https://github.com/ayubov' },
		{ type: 'linkedin', href: 'https://www.linkedin.com/in/aaayubov/' },
		{ type: 'telegram', href: 'https://t.me/aayubov' },
		{ type: 'email', href: 'mailto:alvi.ayubov@ya.com' },
		{ type: 'instagram', href: '/feed' }
	] as const;
</script>

<footer class="self-end">
	<div class="flex gap-0.5">
		{#each SOCIAL_MEDIAS as { type, href }}
			<SocialMedia variant={type} {href} fgColor={$theme === 'dark' ? '#fff' : '#000'} />
		{/each}
	</div>
	<p class="text-primary">© 2023 by Alvi Ayubov</p>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		width: 100%;
		margin: 80px 0 40px 0;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

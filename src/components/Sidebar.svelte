<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import { theme } from '../stores';

	const NAV_ITEMS = [
		{ href: '/', name: 'Home' },
		{ href: '/about', name: 'About' },
		{ href: '/feed', name: 'Feed' }
	];

	const level = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	const linkUrls = ['/', '/about', '/feed'];

	page.subscribe(({ url: { pathname } }) => {
		const currentLinkIndex = linkUrls.findIndex((url) => pathname === url);
		const newLevel = (1 / linkUrls.length) * currentLinkIndex;
		level.set(newLevel);
	});
</script>

<aside class="-mx-4 font-serif md:mx-0 md:w-[150px] md:flex-shrink-0 md:px-0">
	<div class="lg:sticky lg:top-20">
		<nav
			class="fade relative flex scroll-pr-6 flex-row items-start px-4 pb-0 md:relative md:flex-col md:overflow-auto md:px-0"
			id="nav"
		>
			<div class="relative mb-2 mt-2 flex w-full flex-row space-x-0 md:mt-0 md:flex-col">
				<div
					class="bg-inverse absolute hidden h-10 w-16 opacity-10 md:block"
					style={`top: ${$level * 120}px;`}
				/>
				<div
					class="bg-inverse absolute block h-10 w-20 opacity-10 md:hidden"
					style={`left: ${$level * 240}px;`}
				/>
				<ul class="flex flex-row px-2 md:flex-col">
					{#each NAV_ITEMS as { href, name }}
						<li class="flex h-10 w-20 items-center justify-items-center">
							<a class="text-primary hoverable-link" {href}>{name}</a>
						</li>
					{/each}
				</ul>
				<div class="flex grow justify-end self-center md:mt-8 md:self-start">
					<button class="bg-inverse w-12 self-center rounded-xl p-0.5" on:click={theme.toggle}>
						{$theme === 'dark' ? '🔆' : '🌙'}
					</button>
				</div>
			</div>
		</nav>
	</div>
</aside>

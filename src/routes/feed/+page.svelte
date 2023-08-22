<script lang="ts">
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import type { PageData } from './$types';
	import Post from '../../components/Post.svelte';
	import Modal from '../../components/Modal.svelte';

	export let data: PageData;
	let showModal = false;
	let screenSize: number;
	let carousel;

	function goToPost(index: number) {
		carousel.goTo(index, { animated: false });
	}
</script>

<svelte:window bind:innerWidth={screenSize} />

<main class="mt-4 flex-col gap-4 md:mt-0">
	{#each data.posts as post, index}
		<Post
			{post}
			handlePostClick={() => {
				if (screenSize > 480) {
					goToPost(index);
					showModal = true;
				}
			}}
		/>
	{/each}
</main>

{#if browser}
	<Modal bind:showModal>
		<Carousel bind:this={carousel}>
			{#each data.posts as post}
				<div>
					<picture class="my-8">
						<img class="h-[592px] rounded-md" loading="lazy" src={post.image} alt={post.content} />
					</picture>
					<div class="text-primary w3-container flex justify-between p-1">
						<span>{post.content}</span>
						<span>{post.date}</span>
					</div>
				</div>
			{/each}
		</Carousel>
	</Modal>
{/if}

<script lang="ts">
	import type { Post } from '../types';

	export let post: Post;
	export let handlePostClick: () => void;
</script>

<div class="w3-card post w3-section mb-4 cursor-pointer px-4" on:click={handlePostClick}>
	<picture class="my-8">
		<img
			class="h-[448px] rounded-md"
			src={post.image}
			loading="lazy"
			alt={post.content}
			width="336"
		/>
	</picture>
	<div class="text-primary w3-container flex justify-between p-1">
		<span>{post.content}</span>
		<span>{post.date}</span>
	</div>
</div>

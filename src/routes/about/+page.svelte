<script>
	import { env } from '$env/dynamic/public';
</script>

<section class="max-h-[calc(100vh-232px)] overflow-scroll">
	<h1 class="text-primary mb-4">About me</h1>
	<p class="text-primary">
		I’m a passionate software engineer with extensive experience in big tech companies and startups,
		both as a team leader and as an engineer. Throughout most of my career, I’ve been focused on
		frontend tasks, but I also have a solid understanding of the backend world.
	</p>
	<br />
	<p class="text-primary">
		Aside from my technical expertise, I am very enthusiastic about making team work more
		efficient.I have had the opportunity to serve as a Scrum Master and am currently in the process
		of obtaining my Professional Scrum Master I certificate.
	</p>
	<br />
	<p class="text-primary">
		I greatly value companies and teams that care about the culture and put effort into creating a
		pleasant and friendly working environment for all participants, because, at the end of the day,
		we are all human and need this.
	</p>
	<br />
	<p class="text-primary">
		Originally from Moscow, I've had the opportunity to experience different cultures and live in
		different countries, currently residing in wonderful Armenia. I like reading both fictional and
		non-fictional literature, with Fyodor Dostoevsky being my favorite author. Keeping an active
		lifestyle is vital to me, and I enjoy going to the gym, practicing boxing and running. Recently,
		I've also found excitement in playing tennis and am dedicated to improving my skills in the
		sport.
	</p>
	<br />
	<p class="text-primary">
		On top of all this, I am a proud owner of three adorable cats who bring joy and warmth to my
		home. While it can be challenging to travel with them, the love and companionship they provide
		make it all worthwhile. I mean... look at them:
	</p>
	<div class="my-8 flex flex-wrap justify-evenly gap-8 sm:flex-nowrap">
		<picture>
			<img
				class="width-full height-auto rounded-lg"
				src={env.PUBLIC_KSYUSHA_AND_LEYA__IMAGE_URL}
				alt="Leya and Ksusha"
				width="256"
			/>
		</picture>
		<picture>
			<img
				class="width-full height-auto rounded-lg"
				src={env.PUBLIC_ADELE_IMAGE_URL}
				alt="Adele"
				width="256"
			/>
		</picture>
	</div>
</section>

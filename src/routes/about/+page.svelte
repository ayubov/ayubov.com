<script>
	import { env } from '$env/dynamic/public';
</script>

<main class="px-2">
	<h1 class="text-primary mb-4">About me</h1>
	<p class="text-primary">
		I am a passionate software engineer with extensive experience in big tech companies and startups, serving as both a tech lead and developer.
		Throughout most of my career, I've been focused on frontend development, but I also have backend experience and skills in building complex end-to-end systems.
		I've had the pleasure of mentoring other engineers and love supporting their growth and development.
		I am dedicated to improving team efficiency and creating a positive work environment.
		Additionally, I have experience as a Scrum Master, contributing to agile project management.
		I value companies and teams that prioritize culture and foster a collaborative workplace.
	</p>
	<br />
	<p class="text-primary">
		Originally from Moscow, I've had the opportunity to experience different cultures and live in various countries, currently residing in wonderful Armenia.
		Reading both fictional and non-fictional literature is one of my passions, with Fyodor Dostoevsky being my favorite author.
		Keeping an active lifestyle is vital to me; I enjoy going to the gym, practicing boxing, and running.
		Recently, I've also found excitement in playing tennis and am dedicated to improving my skills in the sport.
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
				alt="Leya and Ksyusha"
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
</main>

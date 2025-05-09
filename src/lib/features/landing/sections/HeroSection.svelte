<script>
	import Section from '$lib/features/landing/components/PageSection.svelte';
	import Marquee from '../components/Marquee.svelte';
	import PlatformText from '../components/PlatformText.svelte';
</script>

<Section id="landing">
	<h1
		class="px-8 md:px-12 lg:px-36 w-full text-center text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary"
	>
		Tous vos contenus,<br />
		sur tous vos appareils.
	</h1>

	<div class="w-full max-w-md flex gap-4 text-center text-white">
		<a
			class="flex-1"
			href="https://apps.apple.com/fr/app/zen-iptv/id6458223193?itsct=apps_box_badge&amp;itscg=30200"
		>
			<img
				alt="Download on the App Store"
				class="w-full h-full"
				src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-fr?size=250x83&amp;releaseDate=1668124800"
			/>
		</a>

		<a
			class="flex-1"
			href="http://play.google.com/store/apps/details?id=app.zeniptv.mobile&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
		>
			<img
				alt="Disponible sur Google Play"
				class="w-full h-full"
				src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"
			/>
		</a>
	</div>

	<div class="px-8 md:px-12 lg:px-36 hidden lg:block lg:relative w-[800px] h-[500px]">
		<img
			alt="Home large"
			class="absolute top-0 left-0 right-0 m-auto w-3/4 rounded-xl shadow-2xl"
			src="/images/large_home.webp"
		/>
		<img
			alt="Serie iPhone"
			class="absolute bottom-0 left-0 h-3/4 rounded-xl shadow-2xl"
			src="/images/serie.webp"
		/>
		<img
			alt="Home iPhone"
			class="absolute bottom-0 right-0 h-3/4 rounded-xl shadow-2xl"
			src="/images/movies.webp"
		/>
	</div>

	<div class="w-full lg:hidden">
		<Marquee speed={40}>
			<img alt="Serie iPhone" class="h-[400px] rounded-xl" src="/images/serie.webp" />
			<div class="w-6" />
			<img alt="Home large" class="h-[400px] rounded-xl" src="/images/large_home.webp" />
			<div class="w-6" />
			<img alt="Home iPhone" class="h-[400px] rounded-xl" src="/images/movies.webp" />
			<div class="w-6" />
		</Marquee>
	</div>

	<div class="px-8 md:px-12 lg:px-36 flex flex-wrap justify-center gap-4 md:gap-12">
		<PlatformText src="/icons/android.svg" text="Android / Android TV" />
		<PlatformText src="/icons/apple.svg" text="iOS iPadOS macOS tvOS" />
		<PlatformText src="/icons/windows.svg" text="Windows"/>
	</div>
</Section>

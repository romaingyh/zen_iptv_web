<script lang="ts">
	import Section from '$lib/features/landing/components/PageSection.svelte';
	import FilledButton from '$lib/shared/components/FilledButton.svelte';
</script>

<svelte:head>
	<title>Zen IPTV Android</title>
	<meta
		name="description"
		content="Informations sur la disponibilité Android de Zen IPTV, téléchargement de l'APK et guide d'installation."
	/>
</svelte:head>

<main>
	<Section id="android">
		<div class="flex w-full max-w-[800px] flex-col gap-5 text-left md:gap-6">
			<div class="flex justify-center text-center">
				<h1 class="from-secondary to-primary bg-linear-to-r bg-clip-text text-transparent">
					Installation via APK
				</h1>
			</div>
			<p>
				L'application a été suspendue sur le Play Store suite à un signalement droit d'auteur
				mensonger. Les procédures sont en cours et nous espérons un retour prochainement.
			</p>
			<p>
				En attendant, l'installation reste possible via notre APK officiel pour Android, Android TV
				et Fire TV.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<FilledButton
					href="https://zeniptv.app/releases/zenplayer.apk"
					target="_blank"
					rel="noreferrer"
				>
					Télécharger l'APK
				</FilledButton>
			</div>
		</div>

		<div class="flex w-full max-w-[800px] flex-col gap-5 md:gap-6">
			<h2>Comment installer l'APK</h2>
			<p>
				Les intitulés peuvent varier selon l'appareil, mais le principe reste toujours le même :
				télécharger le fichier, autoriser l'installation depuis une source inconnue, puis ouvrir
				l'APK.
			</p>
			<div class="grid gap-4 md:grid-cols-2 md:gap-5">
				<div class="flex flex-col gap-3 p-6 md:p-8">
					<h4 class="text-primary">1. Téléchargez le fichier</h4>
					<p>
						Appuyez sur le bouton de téléchargement puis attendez la fin du transfert sur votre
						téléphone, box Android, Android TV ou Fire TV.
					</p>
				</div>
				<div class="flex flex-col gap-3 p-6 md:p-8">
					<h4 class="text-primary">2. Autorisez les sources inconnues</h4>
					<p>
						Si l'installation est bloquée, ouvrez les réglages de sécurité et autorisez
						l'application utilisée pour télécharger ou ouvrir le fichier.
					</p>
				</div>
				<div class="flex flex-col gap-3 p-6 md:p-8">
					<h4 class="text-primary">3. Ouvrez l'APK</h4>
					<p>
						Retrouvez le fichier dans les téléchargements ou via la notification, puis lancez
						l'installation.
					</p>
				</div>
				<div class="flex flex-col gap-3 p-6 md:p-8">
					<h4 class="text-primary">4. Lancez Zen Player</h4>
					<p>
						Une fois l'installation terminée, ouvrez l'application normalement. Vous pouvez ensuite
						désactiver les sources inconnues si vous le souhaitez.
					</p>
				</div>
			</div>

			<div class="grid w-full gap-4 md:grid-cols-2 md:gap-5">
				<div class="flex flex-col gap-3 p-6 md:p-8">
					<h4>Où trouver l'option "sources inconnues"</h4>
					<p>
						Le menu change selon les fabricants, mais vous retrouverez généralement l'option dans
						les réglages de sécurité.
					</p>
					<ul class="space-y-3 text-sm text-gray-600 md:text-base">
						<li>
							Android téléphone ou tablette : Réglages, Sécurité, Installer des applis inconnues.
						</li>
						<li>Android TV ou box TV : Réglages, Sécurité et restrictions, Sources inconnues.</li>
						<li>Fire TV : Settings, My Fire TV, Developer Options, Apps from Unknown Sources.</li>
					</ul>
				</div>

				<div class="flex flex-col gap-3 p-6 md:p-8">
					<h4 class="text-red-500">Important</h4>
					<p>
						Utilisez uniquement le lien officiel ci-dessus. Cette page sera mise à jour dès que la
						situation sur le Play Store évoluera.
					</p>
				</div>
			</div>
		</div>
	</Section>
</main>

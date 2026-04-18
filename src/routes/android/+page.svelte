<script lang="ts">
	import FaqItem from '$lib/features/landing/components/FaqTile.svelte';
	import Section from '$lib/features/landing/components/PageSection.svelte';
	import FilledButton from '$lib/shared/components/FilledButton.svelte';
	import HorizontalDivider from '$lib/shared/components/HorizontalDivider.svelte';
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

		<HorizontalDivider />

		<div class="flex w-full max-w-[800px] flex-col gap-4 md:gap-6">
			<h3>Guide d'installation de l'APK</h3>
			<p>
				Les intitulés peuvent varier selon l'appareil, mais le principe reste toujours le même :
				télécharger le fichier, autoriser l'installation depuis une source inconnue, puis ouvrir
				l'APK.
			</p>
			<div class="grid gap-4 md:grid-cols-2">
				<div class="flex flex-col gap-2 p-4">
					<h4 class="text-primary">1. Téléchargez le fichier</h4>
					<p>
						Appuyez sur le bouton de téléchargement puis attendez la fin du transfert sur votre
						téléphone, box Android, Android TV ou Fire TV.
					</p>
				</div>
				<div class="flex flex-col gap-2 p-4">
					<h4 class="text-primary">2. Autorisez les sources inconnues</h4>
					<p>
						Si l'installation est bloquée, ouvrez les réglages de sécurité et autorisez
						l'application utilisée pour télécharger ou ouvrir le fichier.
					</p>
				</div>
				<div class="flex flex-col gap-2 p-4">
					<h4 class="text-primary">3. Ouvrez l'APK</h4>
					<p>
						Retrouvez le fichier dans les téléchargements ou via la notification, puis lancez
						l'installation.
					</p>
				</div>
				<div class="flex flex-col gap-2 p-4">
					<h4 class="text-primary">4. Lancez Zen Player</h4>
					<p>
						Une fois l'installation terminée, ouvrez l'application normalement. Vous pouvez ensuite
						désactiver les sources inconnues si vous le souhaitez.
					</p>
				</div>
				<div class="flex flex-col gap-2 p-4">
					<h4 class="text-red-500">Important</h4>
					<p>
						Utilisez uniquement le lien officiel ci-dessus. Cette page sera mise à jour dès que la
						situation sur le Play Store évoluera.
					</p>
				</div>
			</div>

			<div>
				<FaqItem title="Où trouver l'option &quot;sources inconnues&quot; ?">
					<p>
						Le menu change selon les fabricants, mais vous retrouverez généralement l'option dans
						les réglages de sécurité. <br /> <br />
						- Android téléphone ou tablette : Réglages, Sécurité, Installer des applis inconnues.
						<br />
						- Android TV ou box TV : Réglages, Sécurité et restrictions, Sources inconnues. <br />
						- Fire TV : Settings, My Fire TV, Developer Options, Apps from Unknown Sources.
					</p>
				</FaqItem>

				<FaqItem title="Erreur lors de l'installation ?">
					<p>
						Il est possible de rencontrer une erreur du type "Invalide", "Signature", "Analyse"...
						si vous avez la version du Play Store encore installée. Dans ce cas, désinstallez là
						d'abord puis réessayez.
					</p>
				</FaqItem>
			</div>
		</div>

		<HorizontalDivider />

		<div class="flex w-full max-w-[800px] flex-col gap-5 md:gap-6">
			<h3>Comment ça se passe pour mon abonnement ?</h3>

			<div class="grid gap-4">
				<div class="flex flex-col gap-2 p-4">
					<h4>Si vous aviez un abonnement actif</h4>
					<p>
						Il a normalement été annulé automatiquement et restera actif jusqu'à sa date de
						renouvellement. Passée cette date, vous ne serez plus abonné.
					</p>
					<p>👉 Solutions possibles :</p>
					<ul class="space-y-2">
						<li>
							- Prendre un abonnement via le site web
							<a class="text-primary hover:underline" href="https://zeniptv.app">zeniptv.app</a>,
							plus d'infos en bas de cette page.
						</li>
						<li>
							- Attendre le retour de l'application sur le Play Store pour redémarrer l'abonnement.
						</li>
					</ul>
				</div>

				<div class="flex flex-col gap-2 p-4">
					<h4>Si vous aviez payé l'achat unique</h4>
					<p>
						Ce cas est plus flou pour le moment.<br />
						Si vous avez encore la version Play Store installée, l'achat devrait toujours être pris en
						compte dans l'application, sauf si les données de l'app ont été effacées, par exemple après
						une désinstallation. <br />
						Si vous avez installé l'apk l'achat devrait être pris en compte.
					</p>
					<ul class="space-y-2">
						<li>- Le bouton <strong>Restaurer les achats</strong> devrait fonctionner.</li>
						<li>- S'il ne fonctionne pas, une régularisation pourra être faite au cas par cas.</li>
						<li>- <strong>Le plus important : ne repayez pas.</strong></li>
					</ul>
					<p>
						En cas de problème rendez-vous sur le <a
							class="text-primary hover:underline"
							href="/help">support</a
						>.
					</p>
				</div>

				<div class="flex flex-col gap-2 p-4">
					<h4>Si vous voulez vous abonner pour la première fois</h4>
					<p>
						Il n'est actuellement pas possible de payer directement dans l'application sur Android.
					</p>
					<p>👉 Solutions possibles :</p>
					<ul class="space-y-2">
						<li>
							- Prendre un abonnement via le site web
							<a class="text-primary hover:underline" href="https://zeniptv.app">zeniptv.app</a>.
							Plus d'infos en bas de cette page.
						</li>
						<li>- Attendre le retour de l'application sur le Play Store.</li>
					</ul>
				</div>
			</div>

			<div class="flex flex-col gap-2 p-4">
				<h4>Comment s'abonner via le site internet ?</h4>
				<ol class="space-y-2">
					<li>1. Cliquez en haut à droite sur <strong>Connexion</strong>.</li>
					<li>
						2. Connectez-vous avec <strong>le même compte que sur l'application</strong>. C'est
						primordial. Sur l'application, vous pouvez voir l'adresse mail du compte Zen sur la page
						Profil.
					</li>
					<li>3. La section abonnement se trouve sur la page <strong>Mon compte</strong>.</li>
					<li>
						4. Le paiement vous redirigera vers Stripe. Indiquez la même adresse mail que votre
						compte Zen quand elle est demandée.
					</li>
					<li>5. Redémarrez l'application.</li>
				</ol>
			</div>
		</div>
	</Section>
</main>

<script>
    import HorizontalDivider from "../../../shared/components/HorizontalDivider.svelte";
    import FaqItem from "../components/FaqTile.svelte";
    import Section from "../components/PageSection.svelte";
</script>

<Section id="faq">
    <h2>FAQ</h2>
    <div class="min-w-full bg-gray-100 rounded-3xl px-5">
        <FaqItem
                content="Zen IPTV ne fourni et ne fournira JAMAIS de contenu. L'application permet seulement de simplifier et synchroniser la lecture de vos contenus dans une interface agréable. Vous devez avoir votre propre source de visionnage."
                title="Est-ce que le contenu (films/séries/chaines) est inclus ?"/>
        <HorizontalDivider/>

        <FaqItem
                content="Oui Zen IPTV est disponible au téléchargement ! Rendez-vous en haut de cette page pour télécharger l'application sur votre appareil."
                title="Est-ce que l'application est disponible ?"/>

        <HorizontalDivider/>

        <FaqItem
                content="Voici les plateformes sur les quelles vous pouvez télécharger Zen IPTV :
                - iOS (App Store), iPadOS (App Store), macOS (App Store), tvOS (App Store)
                - Android (Play Store) et Android TV (Play Store)
                - FireStick, https://zeniptv.app/releases/zeniptv_fireos.apk
                - Windows (Windows Store)

                Ces plateformes ne sont pas supportées pour le moment :
                - Linux, Tizen OS, Web OS, pas de date prévue"

                title="Quels appareils sont compatibles ?"/>

        <HorizontalDivider/>

        <FaqItem
                content="Oui les fonctions de base pour regarder vos chaines TV, films et séries sont gratuires. Cependant vous pouvez débloquer l'ensemble des fonctionnalités de l'application comme la synchronisation entre appareils, plusieurs profils de visionnage, historique de visionnage et beaucoup d'autres avec un achat unique ou un abonnement selon vos préférences."
                title="Est-ce que l'application est gratuite ?"/>

        <HorizontalDivider/>
        
        <FaqItem
                content="Actuellement Zen IPTV prend en charge les playlistes Xtream et M3U. Les deux fonctionnent mais l'affichage est optimisé pour les playlistes  Xtream dont les films et séries ont un identifiant TMDB."
                title="Quelles sont les formats de playlist supportés ?"/>
    </div>
</Section>
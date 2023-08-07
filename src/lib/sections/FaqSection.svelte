<script>
    import Section from "./Section.svelte";
    import HorizontalDivider from "../components/HorizontalDivider.svelte";
    import FaqItem from "../components/FaqItem.svelte";
</script>

<Section id="faq">
    <h2>FAQ</h2>
    <div class="min-w-full bg-gray-100 rounded-3xl px-5">
        <FaqItem
                content="Zen IPTV est en cours de développement. Vous pouvez entrer votre mail en bas de cette page pour rejoindre la beta."
                title="Est-ce que l'application est disponible ?"/>

        <HorizontalDivider/>

        <FaqItem
                content="Zen IPTV ne fourni et ne fournira JAMAIS de contenu. L'application permet seulement de simplifier et synchroniser la lecture de vos contenus dans une interface agréable. Vous devez avoir votre propre source de visionnage."
                title="Est-ce que vous founissez le contenu ?"/>
        <HorizontalDivider/>

        <div class="w-full h-[1px] bg-black opacity-5"/>

        <FaqItem
                content="Actuellement Zen IPTV prend en charge les playlistes Xtream et M3U. Les deux fonctionnent mais l'affichage est optimisé pour les playlistes  Xtream dont les films et séries ont un identifiant TMDB."
                title="Quelles sont les formats de playlist supportés ?"/>
    </div>
</Section>
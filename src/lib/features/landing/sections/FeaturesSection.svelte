<script>
    import Section from "../components/PageSection.svelte";
    import FeatureBlock from "../components/FeatureBlock.svelte";
</script>

<Section id="features">
    <FeatureBlock
            description="Séparez vos profils avec vos proches. Commencez à regarder sur votre téléphone, finissez sur la TV."
            title="Synchro">

        <div class="min-w-full flex flex-col items-center gap-10">
            <img alt="Profiles" class="w-[290px] rounded-xl shadow-2xl self-start"
                 src="/images/profiles.webp"/>
            <img alt="Continue watching" class="w-[290px] rounded-xl shadow-2xl self-end"
                 src="/images/continue_watching.webp"/>
        </div>

    </FeatureBlock>

    <FeatureBlock
            description="Vous êtes alerté quand plusieurs personnes regardent simultanément."
            reversed={true}
            title="Protection">

        <img alt="Protection" class="max-h-[500px] rounded-xl shadow-2xl"
             src="/images/protection.webp"/>

    </FeatureBlock>

    <FeatureBlock
            description="Vous n'avez jamais vu une application de lecture IPTV aussi soignée et claire."
            title="Design">
        <img alt="Design" class="max-h-[500px] rounded-xl shadow-2xl" src="/images/serie_2.webp"/>
    </FeatureBlock>
</Section>
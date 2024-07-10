<script>
    import Section from "./Section.svelte";
    import Button from "../components/Button.svelte";
</script>

<Section id="join_beta">
    <h2>Rejoindre la Bêta de Zen IPTV</h2>

    <div class="w-fit flex flex-col items-center gap-2">
        <p>Rejoignez la Bêta de Zen IPTV pour découvrir les nouveautés en avant-première.<br>
            Cliquez sur le bouton qui vous correspond pour rejoindre la bêta de Zen IPTV.
        </p>
        <div class="flex gap-4 w-full">
            <Button href="https://twitter.com/messages/compose?recipient_id=1166689715812257792&text=Bonjour%2C%20j%27aimerai%20rejoindre%20la%20Beta%20de%20Zen%20IPTV%20sur%20Android.%0AL%27adresse%20mail%20de%20mon%20compte%20sur%20le%20Play%20Store%20est%20%3A%0A%5B%20affich%C3%A9e%20en%20haut%20%C3%A0%20droite%20du%20Play%20Store%20%5D"
                    target="_blank">
                Je suis sous Android
            </Button>
            <Button href="https://twitter.com/messages/compose?recipient_id=1166689715812257792&text=Bonjour%2C%20j%27aimerai%20rejoindre%20la%20Beta%20de%20Zen%20IPTV%20sur%20iOS.%0AL%27adresse%20mail%20de%20mon%20compte%20iCloud%20est%20%3A%0A%5B%20affich%C3%A9e%20en%20haut%20%C3%A0%20droite%20de%20l%27App%20Store%20%5D"
                    target="_blank">
                Je suis sous iOS
            </Button>
        </div>
    </div>
</Section>

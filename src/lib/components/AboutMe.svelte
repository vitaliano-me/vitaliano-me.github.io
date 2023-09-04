<script lang="ts">
    import { MenuItemName } from "$lib/data/menu"
    
    export let offset = "4rem";
</script>

<div
    class="container-top-padding container-bottom-margin"
    id={MenuItemName.aboutMe}
    style="--offset-size:{offset}"
    >
    <div class="about-me">
        ABOUT ME
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam beatae ducimus ex laborum, deserunt accusantium exercitationem, ipsa quod totam commodi praesentium ipsam. Harum totam facilis atque quas, eius architecto maxime.
    </div>
</div>

<style lang="scss">
    .about-me {
        height: 30rem;
        background-color: blue;
    }
</style>
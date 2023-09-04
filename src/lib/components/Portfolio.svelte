<script lang="ts">
    import { MenuItemName } from "$lib/data/menu"
    
    export let offset = "4rem";
</script>

<div
    class="offset-block"
    id={MenuItemName.portforlio}
    style="--offset-size:{offset}"
    >
</div>
<div class="portforlio">
    PORTFOLIO
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam beatae ducimus ex laborum, deserunt accusantium exercitationem, ipsa quod totam commodi praesentium ipsam. Harum totam facilis atque quas, eius architecto maxime.
</div>

<style lang="scss">
    .portforlio {
        height: 30rem;
        background-color: green;
    }
</style>
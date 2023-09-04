<script lang="ts">
    import TopMenu from "$lib/components/TopMenu.svelte";
    import Home from "$lib/components/Home.svelte";
    import AboutMe from "$lib/components/AboutMe.svelte";
	import Career from "$lib/components/Career.svelte";
	import Portfolio from "$lib/components/Portfolio.svelte";
	import { MenuItemName } from "$lib/data/menu";

    const topMenuHeight = "4rem";
    console.log("+page");
</script>

<TopMenu height={topMenuHeight}></TopMenu>

<div class="content-container">
    <Home offset={topMenuHeight} nextSectionId={MenuItemName.aboutMe}></Home>
    <AboutMe offset={topMenuHeight}></AboutMe>
    <Career offset={topMenuHeight}></Career>
    <Portfolio offset={topMenuHeight}></Portfolio>
</div>


<style lang="scss">
    .content-container {
        display: flex;
        flex-direction: column;
    }
</style>
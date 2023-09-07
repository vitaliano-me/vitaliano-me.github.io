<script lang="ts">
    import TopMenu from "$lib/components/TopMenu.svelte";
    import Home from "$lib/components/Home.svelte";
    import AboutMe from "$lib/components/AboutMe.svelte";
	import Career from "$lib/components/Career.svelte";
	import Portfolio from "$lib/components/Portfolio.svelte";
	import { MenuItemName, setMenuItemActive } from "$lib/data/menu";
	import { onMount } from "svelte";

    const topMenuHeight = "4rem";
    let scrollY: number;
    let home: HTMLElement;
    let aboutMe: HTMLElement;
    let career: HTMLElement;
    let portfolio: HTMLElement;
    const items: Array<[HTMLElement, MenuItemName]> = []

    $: selectedItem = updateSelectedItem(scrollY);
    $: console.log(`selectedItem: ${selectedItem}`);

    onMount(() => {
        items.push(
            [home, MenuItemName.home],
            [aboutMe, MenuItemName.aboutMe],
            [career, MenuItemName.career],
            [portfolio, MenuItemName.portforlio],
        );
    });

    function updateSelectedItem(scrollY: number): MenuItemName {
        for (const [item, name] of items) {
            if (scrollY < item.offsetTop + window.screen.availHeight * 0.5) {
                setMenuItemActive(name);
                return name;
            }
        }

        return MenuItemName.home;
    }

    console.log("+page");
</script>

<svelte:window bind:scrollY />
{#key selectedItem}
    <TopMenu height={topMenuHeight}></TopMenu>
{/key}

<div class="content-container">
    <Home bind:homeElement="{home}" offset={topMenuHeight} nextSectionId={MenuItemName.aboutMe}></Home>
    <AboutMe bind:aboutMeElement="{aboutMe}" offset={topMenuHeight}></AboutMe>
    <Career bind:careerElement="{career}" offset={topMenuHeight}></Career>
    <Portfolio bind:portfolioElement="{portfolio}" offset={topMenuHeight}></Portfolio>
</div>


<style lang="scss">
    .content-container {
        display: flex;
        flex-direction: column;
    }
</style>
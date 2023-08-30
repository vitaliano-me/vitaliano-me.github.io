<script lang="ts">
    import { setLocale } from "$i18n/i18n-svelte";
    import TopMenu from "$lib/components/TopMenu.svelte";

    setLocale("en");
    console.log("+page");
</script>

<TopMenu></TopMenu>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

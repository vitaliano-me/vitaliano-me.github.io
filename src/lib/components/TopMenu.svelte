<script lang="ts">
    import menu from "$lib/data/menu"
	import { LL, setLocale } from "$i18n/i18n-svelte";

    setLocale("en");
    console.log("top menu");
</script>

<ul>
    {#each menu as menuItem}
        <li>
            <a href={`#${menuItem.name}`}>
                <!-- {$LL[menuItem.textKey]()} -->
                {menuItem.name}
            </a>
        </li>
    {/each}
</ul>

1. {$LL.MENU_HOME()} |<br>
2. {$LL.MENU_ABOUT_ME()} |<br>
3. {$LL.MENU_CAREER()} |<br>
4. {$LL.MENU_PORTFOLIO()} |<br>
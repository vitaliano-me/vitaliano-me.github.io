<script lang="ts">
    import { mainMenu } from "$lib/data/menu"

    const menuItems = mainMenu.values();
    console.log("top menu");
</script>

<ul class="top-menu">
    {#each menuItems as menuItem}
        <li>
            <a href={`#${menuItem.name}`}>
                {menuItem.text}
            </a>
        </li>
    {/each}
</ul>

<style lang="scss">
    .top-menu {
        position: fixed;
        margin: 0 auto;
        width: 100%;
    }

    ul {
    list-style-type: none;
    display: flex;
    gap: 0.5rem;
    background-color: #141e6a;

        li>a {
            all: initial;
            cursor: pointer;
            padding: 0.5rem;
            color: #1e90ff;

            // &.active {
            //     color: #7d1d41;
            //     border-bottom: 1px solid;
            // }
        }
    }
</style>
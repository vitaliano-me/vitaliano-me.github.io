<script lang="ts">
    import { mainMenu } from "$lib/data/menu"

    const menuItems = mainMenu.values();

    export let height = "4rem";
    console.log("top menu");
</script>

<div class="top-menu" style="--top-menu-height:{height}">
    <ul>
        {#each menuItems as menuItem}
            <li class:active={menuItem.selected}>
                <a href={`#${menuItem.name}`}>
                    {menuItem.text}
                </a>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .top-menu {
        overflow: hidden;
        position: fixed;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--top-menu-height, 4rem);
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type:none;
        display:flex;
        // gap:1.5rem;
        background-color:#141e6a;
        height: inherit;
        width: inherit;
        margin: 0;
        padding: 0;
        justify-content: space-around;
        align-items: center;
        white-space: pre-line;

        li {
            display: flex;
            width: 5rem;
            text-align: center;
            text-transform: uppercase;
            background-color: #141e6a;
            justify-content: center;

            a {
                cursor: pointer;
                padding: 0.5rem;
                color: #1e90ff;
                text-decoration: none;
            }
            
            &:hover {
                background-color: #000;
            }

            &.active {
                color: #7d1d41;
                border-bottom: 1px solid;
            }
        }
    }
</style>
<script lang="ts">
    import { MenuItemName, mainMenu } from "$lib/data/menu"

    export let height = "4rem";
    console.log("top menu");
</script>

<div class="top-menu" style="--top-menu-height:{height}">
    <ul>
        {#each mainMenu.values() as menuItem, index (index)}
            <li class:active={menuItem.selected}>
                <a href={`#${menuItem.name}`}>
                    {menuItem.text}
                </a>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    :root {
        --light-color: #f0f0f0;
        --dark-color: #2c212b;
        --hover-color: #000;
    }
    .top-menu {
        overflow: hidden;
        position: fixed;
        box-sizing: border-box;
        font-family: 'Noto Sans', sans-serif;
        font-size: 2.8vmax;
        font-weight: 700;
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
        background-color:var(--dark-color);
        height: inherit;
        width: inherit;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        white-space: pre-line;

        li {
            display: flex;
            flex-direction: column;
            // color: #1e90ff;
            color: var(--light-color);
            width: 6.5em;
            height: var(--top-menu-height, 4rem);
            text-align: center;
            text-transform: uppercase;
            align-items: center;
            justify-content: center;

            a {
                cursor: pointer;
                color: inherit;
                padding: 0.5rem;
                text-decoration: none;
            }
            
            &:hover {
                background-color: var(--hover-color);
            }

            &.active {
                color: var(--dark-color);
                // background-color: #484f5b;
                background-color: var(--light-color);
                border-bottom: 1px solid;
            }
        }
    }
</style>
export enum MenuItemName {
    home = "MenuItemName_home",
    aboutMe = "MenuItemName_aboutMe",
    career = "MenuItemName_career",
    portforlio = "MenuItemName_portforlio",
}

interface MenuItem {
    name: MenuItemName;
    textKey?: string;// keyof Translation;
    text: string;
    selected: boolean;
}

export const mainMenu: ReadonlyMap<MenuItemName, MenuItem> = new Map([
    [ MenuItemName.home, {
        name: MenuItemName.home,
        textKey: "MENU_HOME",
        text: "Home",
        selected: true
    }],
    [ MenuItemName.aboutMe, {
        name: MenuItemName.aboutMe,
        textKey: "MENU_ABOUT_ME",
        text: "About Me",
        selected: false
    }],
    [ MenuItemName.career, {
        name: MenuItemName.career,
        textKey: "MENU_CAREER",
        text: "Career",
        selected: false
    }],
    [ MenuItemName.portforlio, {
        name: MenuItemName.portforlio,
        textKey: "MENU_PORTFOLIO",
        text: "Portfolio",
        selected: false
    }],
]);

export function setMenuItemActive (menuItemName: MenuItemName) {
    let found = false;
    for (const [ name, menuItem ] of mainMenu) {
        if (menuItemName === name) {
            found = true;
            menuItem.selected = true;
            continue;
        }

        menuItem.selected = false;
    }

    const home = mainMenu.get(MenuItemName.home);
    if (!found && home) {
        home.selected = true;
    }
}

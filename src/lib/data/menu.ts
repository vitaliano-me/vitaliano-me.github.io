import type { Translation } from "../../i18n/i18n-types";



enum MenuItemName {
    home = "MenuItemName_home",
    aboutMe = "MenuItemName_aboutMe",
    career = "MenuItemName_career",
    portforlio = "MenuItemName_portforlio",
}

interface MenuItem {
    name: MenuItemName;
    textKey: keyof Translation;
    selected: boolean;
}

const mainMenu: readonly MenuItem[] = [
    {
        name: MenuItemName.home,
        textKey: "MENU_HOME",
        selected: true
    },
    {
        name: MenuItemName.aboutMe,
        textKey: "MENU_ABOUT_ME",
        selected: false
    },
    {
        name: MenuItemName.career,
        textKey: "MENU_CAREER",
        selected: false
    },
    {
        name: MenuItemName.portforlio,
        textKey: "MENU_PORTFOLIO",
        selected: false
    },

];

export default mainMenu;
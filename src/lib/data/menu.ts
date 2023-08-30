import type { Translation } from "../../i18n/i18n-types";



export enum MenuItemName {
    home = "MenuItemName_home",
    aboutMe = "MenuItemName_aboutMe",
    career = "MenuItemName_career",
    portforlio = "MenuItemName_portforlio",
}

interface MenuItem {
    name: MenuItemName;
    textKey: keyof Translation;
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
        text: "Who am I?",
        selected: false
    }],
    [ MenuItemName.career, {
        name: MenuItemName.career,
        textKey: "MENU_CAREER",
        text: "Professional Experience",
        selected: false
    }],
    [ MenuItemName.portforlio, {
        name: MenuItemName.portforlio,
        textKey: "MENU_PORTFOLIO",
        text: "Portfolio",
        selected: false
    }],
]);

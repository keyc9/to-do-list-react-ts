import {Theme, Themes} from "../models/theme";

const light: Theme = {
    name: 'light',
    colors: {
        bgPrimary: '##edf0f1',
        bgSecondary: '##4682b4'
    }
}

const dark: Theme = {
    name: 'dark',
    colors: {
        bgPrimary: '#626262ff',
        bgSecondary: '#000000ff'
    }
}

export const themes: Themes = {light,dark,}
export interface Theme {
    name: string,
    colors: {
        bgPrimary: string,
        bgSecondary: string
    },
}

export interface Themes {
    [key:string] : Theme,
}
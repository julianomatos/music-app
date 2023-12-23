import { extendTheme } from "native-base";

const THEME = extendTheme({
    colors: {
        primary: {
            50: '#E3F2F9',
            100: '#000000',
            200: '#A2D4EC',
            300: '#7AC1E4',
            400: '#47A9DA',
            500: '#0088CC',
            600: '#007AB8',
            700: '#006BA1',
            800: '#005885',
            900: '#003F5E',
        },
        secondary: {
            100: '#0088CC',
        },
        light: {
            50: '#FFFFFF',
            100: '#F9F9F9',
            200: '#F0F0F0',
            300: '#E6E6E6',
            400: '#D8D8D8',
            500: '#C0C0C0',
            600: '#A0A0A0',
            700: '#808080',
            800: '#606060',
            900: '#404040',
          },
    }

})

export default THEME;
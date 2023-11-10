import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#35609B',
            dark: '#4473ac',
        },
        secondary: {
            main: '#ededed'
        },
        info: {
            main: '#98B24A'
        }
    },
    typography: {
        fontFamily: `sans-serif`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
});

export default theme;

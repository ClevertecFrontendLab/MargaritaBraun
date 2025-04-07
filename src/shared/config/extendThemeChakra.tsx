import { extendTheme } from '@chakra-ui/react';
// extendThemeСhakra
const theme = extendTheme({
    styles: {
        global: {
            '::-webkit-scrollbar': {
                width: '8px',
                height: '8px',
            },
            '::-webkit-scrollbar-thumb': {
                background: 'transparent',
                borderRadius: '4px',
            },
            '::-webkit-scrollbar-track': {
                background: 'transparent',
            },
            '::-webkit-scrollbar-button': {
                display: 'none',
            },
            div: {
                scrollbarColor: '#d4d4d8 transparent',
                scrollbarWidth: 'thin',
            },
            body: {
                backgroundColor: '#FFFFFF',
                overflow: 'hidden',
                height: '100svh',
                maxWidth: '1920px',
                margin: '0 auto',
                fontFamily: 'Inter, sans-serif',
            },
            fonts: {
                body: 'Inter, sans-serif',
                heading: 'Inter, sans-serif',
            },
        },
    },
    textStyles: {
        textParagraph: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '24px',
            fontStyle: 'normal',
        },
    },
    colors: {
        lime: {
            50: '#FFFFD3',
            600: '#2DB100',
            800: '#134B00',
        },
    },
    breakpoints: {
        // base: '0em',
        sm: '360px',
        xl: '1440px',
        '2xl': '1920px',
    },
    // breakpoints: {
    //     base: '0em',
    //     sm: '360px',
    //     md: '768px',
    //     lg: '1024px',
    //     xl: '1440px',
    //     '2xl': '1920px',
    // },
});

export default theme;

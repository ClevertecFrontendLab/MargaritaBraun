import { extendTheme } from '@chakra-ui/react';

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
                fontFamily: 'Inter, sans-serif',
            },
            fonts: {
                body: 'Inter, sans-serif',
                heading: 'Inter, sans-serif',
            },
        },
    },
    textStyles: {
        h1: {
            fontSize: ['20px', '20px', '30px', '48px'],
            fontFamily: 'Inter',
            fontWeight: '700',
            lineHeight: ['32px', '48px'],
            fontStyle: 'normal',
        },
        h3: {
            fontSize: ['16px', '20px'],
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '28px',
            fontStyle: 'normal',
        },
        textParagraph: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '24px',
            fontStyle: 'normal',
        },
        titleCard: {
            fontFamily: 'Inter, sans-serif',
            fontSize: ['16px', null, null, '20px'],
            fontWeight: '500',
            lineHeight: ['24px', null, null, '28px'],
            fontStyle: 'normal',
        },
        profileNotific: {
            fontSize: ['12px', '16px'],
            fontFamily: 'Inter',
            fontWeight: '600',
            lineHeight: ['16px', '24px'],
            fontStyle: 'normal',
            color: 'lime.600',
        },
    },

    colors: {
        lime: {
            50: '#FFFFD3',
            150: '#D7FF94',
            300: '#C4FF61',
            400: '#B1FF2E',
            600: '#2DB100',
            800: '#134B00',
        },
    },
    breakpoints: {
        sm: '22.5rem',
        xl: '90rem',
        '2xl': '120rem',
    },
});

export default theme;

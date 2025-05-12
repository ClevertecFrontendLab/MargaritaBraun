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
            fontSize: ['24px', '24px', '24px', '48px'],
            fontFamily: 'Inter',
            fontWeight: '700',
            lineHeight: ['32px', '48px'],
            fontStyle: 'normal',
            color: 'red',
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
        textCardDescription: {
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '20px',
        },
    },

    colors: {
        lime: {
            50: '#FFFFD3',
            150: '#D7FF94',
            300: '#C4FF61',
            400: '#B1FF2E',
            // 500: '#FFFFD3', // повтор для 400
            500: '#B1FF2E', // повтор для 400
            600: '#2DB100', // #2DB100;
            700: '#207e00',
            800: '#134B00',
            900: '#364e0d', // повтор для 400
            // color: #207e00;
        },
    },
    breakpoints: {
        sm: '22.5rem',
        xl: '90rem',
        '2xl': '120rem',
    },

    components: {
        Checkbox: {
            baseStyle: {
                color: 'lime.600',
                backgroundColor: 'lime.300',

                control: {
                    borderColor: 'lime.600',
                },
                icon: {
                    color: 'black',
                    // backgroundColor: 'transparent',
                    background: 'lime.300',
                },
            },
        },

        Badge: {
            baseStyle: {
                fontFamily: 'Inter, sans-serif',
            },
            defaultProps: {
                fontFamily: 'Inter, sans-serif',
            },
        },

        Button: {
            baseStyle: {
                fontWeight: '600',
                color: 'black',
                fontFamily: 'Inter',
            },
            colorScheme: {
                lime: {
                    color: 'black',
                },
            },
            variants: {
                'lime-brand': {
                    bg: 'lime.400',
                    color: 'black',
                },
                solid: {
                    // bg: 'lime.400',
                    color: 'black',
                },
            },

            defaultProps: {
                color: 'black',
            },
        },
    },
});

export default theme;

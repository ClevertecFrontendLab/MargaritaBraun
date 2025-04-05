import { extendTheme } from '@chakra-ui/react';
// extendThemeСhakra
const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                backgroundColor: '#FFFFFF',
            },
            fonts: {
                body: 'Inter, sans-serif',
                heading: 'Inter, sans-serif',
            },
        },
    },
});

export default theme;

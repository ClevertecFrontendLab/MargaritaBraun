import 'swiper/swiper-bundle.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { store } from '~/store/configure-store.ts';

import AppRouter from './app/AppRouter';
import { UserProvider } from './context/UserContext';
import theme from './shared/config/extendThemeChakra';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <UserProvider>
            <Provider store={store}>
                <ChakraProvider theme={theme}>
                    <BrowserRouter>
                        <AppRouter />
                    </BrowserRouter>
                </ChakraProvider>
            </Provider>
        </UserProvider>
    </StrictMode>,
);

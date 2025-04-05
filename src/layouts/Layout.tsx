import { Outlet } from 'react-router';

import { Header } from '~/widgets/Header';

const Layout = () => (
    <>
        <Header />
        <main style={{ padding: '1rem 0' }}>
            <Outlet />
        </main>
    </>
);

export default Layout;

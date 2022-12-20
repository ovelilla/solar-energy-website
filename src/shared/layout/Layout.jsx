import { Outlet } from "react-router-dom";

import Header from "@shared/header";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import useWindowSize from "@hooks/useWindowSize";

import Header from "@shared/header";
import Sidebar from "@shared/sidebar";

import { breakpoints } from "@shared/styles/sizes";

const Layout = () => {
    const [sidebar, setSidebar] = useState({
        isOpen: false,
        isClosing: false,
        isAnimated: false,
    });

    const { width } = useWindowSize();

    useEffect(() => {
        if (width > breakpoints.lg) {
            setSidebar({
                ...sidebar,
                isOpen: false,
                isClosing: false,
                isAnimated: false,
            });
        }
    }, [width]);

    return (
        <>
            <Header sidebar={sidebar} setSidebar={setSidebar} />
            {sidebar.isOpen && (
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
            )}
            <Outlet />
        </>
    );
};

export default Layout;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProposalProvider } from "@context/ProposalProvider";

import Layout from "@shared/layouts/Layout";

import Home from "@pages/Home";
import Roof from "@pages/Roof";

function App() {
    return (
        <BrowserRouter>
            <ProposalProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="roof" element={<Roof />} />
                </Routes>
            </ProposalProvider>
        </BrowserRouter>
    );
}

export default App;

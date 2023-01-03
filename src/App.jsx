import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProposalProvider } from "@context/ProposalProvider";

import Layout from "@shared/layouts/Layout";
import ProposalLayout from "@shared/layouts/ProposalLayout";

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
                    <Route path="/" element={<ProposalLayout />}>
                        <Route path="roof" element={<Roof />} />
                    </Route>
                </Routes>
            </ProposalProvider>
        </BrowserRouter>
    );
}

export default App;

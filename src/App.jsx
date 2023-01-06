import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProposalProvider } from "@context/ProposalProvider";

import Layout from "@shared/layouts/Layout";

import Home from "@pages/Home";
import Roof from "@pages/Roof";
import Consumption from "@pages/Consumption";
import Proposal from "@pages/Proposal";

function App() {
    return (
        <BrowserRouter>
            <ProposalProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="tejado" element={<Roof />} />
                    <Route path="consumo" element={<Consumption />} />
                    <Route path="propuesta" element={<Proposal />} />
                </Routes>
            </ProposalProvider>
        </BrowserRouter>
    );
}

export default App;

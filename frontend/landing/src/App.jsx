import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ProposalProvider } from "@context/ProposalProvider";

import Layout from "@shared/layouts/Layout";
import ProtectedRoute from "@routes/ProtectedRoute";

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
                    <Route element={<ProtectedRoute />}>
                        <Route path="tejado" element={<Navigate to="/" />} />
                        <Route path="tejado/:id" element={<Roof />} />
                        <Route path="consumo" element={<Navigate to="/" />} />
                        <Route path="consumo/:id" element={<Consumption />} />
                        <Route path="propuesta" element={<Navigate to="/" />} />
                        <Route path="propuesta/:id" element={<Proposal />} />
                    </Route>
                </Routes>
            </ProposalProvider>
        </BrowserRouter>
    );
}

export default App;

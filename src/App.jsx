import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ProposalProvider } from "@context/ProposalProvider";
import { CalculatorProvider } from "@context/CalculatorProvider";

import Layout from "@shared/layouts/Layout";
import ProtectedRoute from "@routes/ProtectedRoute";

import Home from "@pages/Home";
import Roof from "@pages/Roof";
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
                        <Route path="tejado/:uuid" element={<Roof />} />
                        <Route path="propuesta" element={<Navigate to="/" />} />
                        <Route element={<CalculatorProvider />}>
                            <Route path="propuesta/:uuid" element={<Proposal />} />
                        </Route>
                    </Route>
                </Routes>
            </ProposalProvider>
        </BrowserRouter>
    );
}

export default App;

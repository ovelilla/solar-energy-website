import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProposalProvider } from "@context/ProposalProvider";

import Layout from "@shared/layout";

import Home from "@pages/Home";

function App() {
    return (
        <BrowserRouter>
            <ProposalProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </ProposalProvider>
        </BrowserRouter>
    );
}

export default App;

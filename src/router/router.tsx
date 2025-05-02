import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../features/Home/Home";
import AboutPage from "../features/About/About";
import PrivacyPolicyPage from "../features/PrivacyPolicy/PrivacyPolicy";
import NotFound from "../features/NotFound/NotFound";

const ResponsiveRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default ResponsiveRouter;

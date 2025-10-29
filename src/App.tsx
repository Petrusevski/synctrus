import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Audit from "./pages/services/Audit";
import Redesign from "./pages/services/Redesign";
import Engagement from "./pages/services/Engagement";
import Analytics from "./pages/services/Analytics";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <>
      <NavBar />
            <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/audit" element={<Audit />} />
        <Route path="/services/redesign" element={<Redesign />} />
        <Route path="/services/engagement" element={<Engagement />} />
        <Route path="/services/analytics" element={<Analytics />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

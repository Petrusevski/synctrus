// src/App.tsx
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

import AcademyHome from "./pages/academy/AcademyHome";
import Course from "./pages/academy/Course";
import Lesson from "./pages/academy/Lesson";
import CaseStudyDetail from "./pages/case-studies/CaseStudyDetail"; // non-Academy detail

// ✅ Auth + context
import { AuthProvider } from "@/context/AuthContext";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import Account from "@/pages/account/Account";
import Protected from "@/components/Protected";

// ✅ Legal
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// ✅ Academy Case Study (Tier Stall)
import RetailFashionTierStall from "./pages/academy/case-studies/retail-fashion-tier-stall";

export default function App() {
  return (
    <AuthProvider>
      <NavBar />
      <ScrollToTop />

      <Routes>
        {/* Public marketing site */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/audit" element={<Audit />} />
        <Route path="/services/redesign" element={<Redesign />} />
        <Route path="/services/engagement" element={<Engagement />} />
        <Route path="/services/analytics" element={<Analytics />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />

        {/* 🔒 Academy (all routes protected) */}
        <Route
          path="/academy"
          element={
            <Protected>
              <AcademyHome />
            </Protected>
          }
        />
        <Route
          path="/academy/course/:courseSlug"
          element={
            <Protected>
              <Course />
            </Protected>
          }
        />
        <Route
          path="/academy/course/:courseSlug/lesson/:lessonSlug"
          element={
            <Protected>
              <Lesson />
            </Protected>
          }
        />
        <Route
          path="/academy/case-studies/retail-fashion-tier-stall"
          element={
            <Protected>
              <RetailFashionTierStall />
            </Protected>
          }
        />

        {/* Auth */}
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />

        {/* Protected account */}
        <Route
          path="/account"
          element={
            <Protected>
              <Account />
            </Protected>
          }
        />

        {/* Legal */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

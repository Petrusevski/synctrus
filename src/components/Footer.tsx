import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-4 gap-10 border-b border-neutral-800 pb-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Synctrus</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            We help brands turn loyalty into measurable growth — combining strategy,
            design, and data for modern engagement ecosystems.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold uppercase text-amber-400 mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-amber-400">About</Link></li>
            <li><Link to="/case-studies" className="hover:text-amber-400">Case Studies</Link></li>
            <li><Link to="/pricing" className="hover:text-amber-400">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold uppercase text-amber-400 mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/audit" className="hover:text-amber-400">Loyalty Audit</Link></li>
            <li><Link to="/services/redesign" className="hover:text-amber-400">Program Redesign</Link></li>
            <li><Link to="/services/engagement" className="hover:text-amber-400">Engagement Strategy</Link></li>
            <li><Link to="/services/analytics" className="hover:text-amber-400">Measurement & Analytics</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-semibold uppercase text-amber-400 mb-3">Connect</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-amber-400">
              <FaFacebookF size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-amber-400">
              <FaTwitter size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-amber-400">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-400">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-3 text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} Synctrus. All rights reserved.</p>
        <span className="hidden md:inline-block">|</span>
        <div className="flex gap-4">
          <Link to="/terms" className="hover:text-amber-400">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-amber-400">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

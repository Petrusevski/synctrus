export default function Privacy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-neutral-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>

      <p className="mb-4">
        Synctrus (“we”, “our”, “us”) is committed to protecting your personal data in accordance with the General Data Protection Regulation (EU) 2016/679 (“GDPR”).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Data Controller</h2>
      <p>
        The data controller responsible for this website is Synctrus. You can contact us via the details provided on our Contact page.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Data We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Contact details (name, email, phone)</li>
        <li>Company and professional information</li>
        <li>Usage and analytics data from our website</li>
        <li>Cookies and similar technologies for functional and analytical purposes</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Purpose and Legal Basis</h2>
      <p>
        We process your data to provide services, respond to inquiries, and improve user experience.
        Processing is based on consent, contract performance, or legitimate interest as defined under GDPR Articles 6(1)(a), 6(1)(b), and 6(1)(f).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Data Retention</h2>
      <p>
        We retain personal data only as long as necessary for the stated purposes or as required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Your Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Right to access, rectification, and erasure</li>
        <li>Right to data portability</li>
        <li>Right to restrict or object to processing</li>
        <li>Right to lodge a complaint with a supervisory authority</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Cookies</h2>
      <p>
        We use essential and analytics cookies. You can manage preferences in your browser settings or via a cookie banner where applicable.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Data Transfers</h2>
      <p>
        If personal data is transferred outside the EU/EEA, we ensure appropriate safeguards under GDPR Chapter V (e.g., Standard Contractual Clauses).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Updates</h2>
      <p>
        We may update this Privacy Policy periodically. The most recent version will always be available on this page.
      </p>
    </main>
  );
}

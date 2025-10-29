export default function Terms() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-neutral-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-4 text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>

      <p className="mb-4">
        These Terms and Conditions govern the use of the Synctrus website and services operated by Synctrus (“we”, “our”, “us”).
        By accessing or using our website or services, you agree to be bound by these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Services</h2>
      <p>
        Synctrus provides consulting, design, and analytics services for customer engagement and loyalty programs.
        The scope, deliverables, and fees are defined in a separate agreement or proposal.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Client Obligations</h2>
      <p>
        Clients must provide accurate information, timely feedback, and necessary access for project execution.
        Failure to do so may affect timelines or outcomes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Intellectual Property</h2>
      <p>
        Unless otherwise agreed, all concepts, reports, and materials produced by Synctrus remain our intellectual property
        until full payment is received. Upon settlement, the client receives a non-exclusive right to use the deliverables for internal purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Data Protection</h2>
      <p>
        We comply with the EU General Data Protection Regulation (GDPR) regarding the processing of any personal data.
        Each party acts as an independent data controller unless otherwise specified in a Data Processing Agreement.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Limitation of Liability</h2>
      <p>
        Synctrus is not liable for indirect, incidental, or consequential damages.
        Liability for direct damages is limited to the total amount paid by the client for the relevant engagement.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Jurisdiction and Applicable Law</h2>
      <p>
        These Terms are governed by the laws of the European Union and the country of establishment of Synctrus.
        Any disputes shall be subject to the exclusive jurisdiction of the competent courts in that country.
      </p>
    </main>
  );
}

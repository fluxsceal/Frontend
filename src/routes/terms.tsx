import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — FluxScael" },
      { name: "description", content: "Terms governing your use of the FluxScael platform." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" subtitle="Last updated: May 6, 2026">
      <LegalSection title="1. Agreement to Terms">
        <p>By accessing or using the FluxScael platform ("Service"), you agree to be bound by these Terms and Conditions. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these terms.</p>
      </LegalSection>

      <LegalSection title="2. Service Provision">
        <p className="mb-4">FluxScael provides distributed GPU compute resources, AI training orchestration, and related cloud services. We reserve the right to:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Modify or discontinue parts of the Service with reasonable notice.</li>
          <li>Establish general practices and limits concerning use of the Service.</li>
          <li>Perform emergency maintenance that may result in temporary downtime.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Account Responsibility">
        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify FluxScael immediately of any unauthorized use or security breach.</p>
      </LegalSection>

      <LegalSection title="4. Acceptable Use Policy">
        <p className="mb-4">You agree not to use the Service to:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Engage in any illegal activities or violate local, state, or international laws.</li>
          <li>Reverse engineer, decompile, or disassemble the FluxScael infrastructure.</li>
          <li>Train models intended for the creation of malware, deepfakes for harassment, or non-consensual explicit content.</li>
          <li>Attempt to bypass resource limits or interfere with the Service's integrity.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Billing and Payments">
        <p className="mb-4">Fees are based on the subscription plan and metered usage (GPU-hours). All fees are quoted in USD.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li><strong>Payment Method:</strong> You must provide a valid payment method. We charge automatically based on your billing cycle.</li>
          <li><strong>Late Payments:</strong> Late payments may result in the suspension of access to GPU resources.</li>
          <li><strong>Refunds:</strong> Except as required by law, all payments are non-refundable.</li>
          <li><strong>Tax:</strong> Fees are exclusive of taxes, which will be added where applicable.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Intellectual Property Rights">
        <p className="mb-4"><strong>Your Content:</strong> You retain all rights, title, and interest in and to your data, code, and model weights.</p>
        <p><strong>FluxScael Property:</strong> FluxScael retains all rights to its software, logos, trademarks, and infrastructure design. You are granted a limited, non-exclusive license to use the platform for its intended purpose.</p>
      </LegalSection>

      <LegalSection title="7. Limitation of Liability">
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, FLUXSCAEL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</p>
      </LegalSection>

      <LegalSection title="8. Indemnification">
        <p>You agree to indemnify and hold harmless FluxScael from and against any claims, damages, obligations, losses, liabilities, costs, and expenses arising from your use of the Service or violation of these Terms.</p>
      </LegalSection>

      <LegalSection title="9. Termination">
        <p>You may cancel your subscription at any time via the dashboard. FluxScael may terminate or suspend your access immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business interests.</p>
      </LegalSection>

      <LegalSection title="10. Governing Law">
        <p>These Terms shall be governed and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.</p>
      </LegalSection>

      <LegalSection title="11. Contact & Corporate Identity">
        <div className="text-gray-400 space-y-2">
          <p><strong>FluxScael</strong> (Established Oct 3, 2023)</p>
          <p><strong>CEO:</strong> Isabella Fernando</p>
          <p><strong>Address:</strong> 655 Montgomery Street, San Francisco, CA 94111, USA</p>
          <p><strong>Phone:</strong> +1 (415) 731-6408</p>
          <p><strong>Email:</strong> legal@fluxscael.com</p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}

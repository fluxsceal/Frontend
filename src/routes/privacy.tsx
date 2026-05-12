import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — FluxScael" },
      { name: "description", content: "How FluxScael collects, uses, and protects your data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" subtitle="Last updated: May 6, 2026">
      <LegalSection title="1. Information Collection and Usage">
        <p className="mb-4">FluxScael collects several types of information from and about users of our Services, including:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li><strong>Personal Identifiers:</strong> Name, email address, physical address, and telephone number provided during registration.</li>
          <li><strong>Billing Information:</strong> Credit card details and billing addresses, processed securely through our third-party payment processors (e.g., Stripe).</li>
          <li><strong>Technical Data:</strong> IP addresses, browser type, operating system, and device identifiers collected through automated means.</li>
          <li><strong>Operational Telemetry:</strong> Logs from training jobs, GPU utilization metrics, and resource consumption data required for billing and system optimization.</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Model and Dataset Privacy">
        <p className="mb-4">We maintain a strict "No-Peek" policy regarding your intellectual property:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li><strong>Training Data:</strong> We never access or train our own models on your datasets without explicit, written consent.</li>
          <li><strong>Weights and Artifacts:</strong> Your model weights, checkpoints, and export artifacts remain your exclusive property and are encrypted at rest.</li>
          <li><strong>Isolation:</strong> Customer workloads are executed in logically isolated environments to prevent cross-contamination.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Data Retention and Deletion">
        <p className="mb-4">We retain your information for as long as your account is active or as needed to provide you services. Following account termination:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>System logs are retained for 90 days for security auditing purposes.</li>
          <li>Billing records are retained for 7 years to meet tax and legal obligations.</li>
          <li>You may request immediate deletion of all non-essential data by contacting our privacy team.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Security Measures">
        <p className="mb-4">FluxScael employs industry-standard security protocols to protect your data:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li><strong>Encryption:</strong> Data is encrypted using AES-256 at rest and TLS 1.3 in transit.</li>
          <li><strong>Access Control:</strong> We enforce Multi-Factor Authentication (MFA) for all administrative access.</li>
          <li><strong>Auditing:</strong> Regular SOC 2 Type II audits and third-party penetration testing.</li>
          <li><strong>Vulnerability Management:</strong> Continuous monitoring of infrastructure for emerging security threats.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. International Data Transfers">
        <p className="mb-4">FluxScael is headquartered in the United States. Data may be transferred to and processed in countries where our sub-processors operate. we utilize Standard Contractual Clauses (SCCs) to ensure equivalent protection for international data transfers.</p>
      </LegalSection>

      <LegalSection title="6. Your Rights and Choices">
        <p className="mb-4">Depending on your location, you may have rights under GDPR, CCPA, or similar regulations, including:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>The right to access and export your data.</li>
          <li>The right to rectify inaccurate information.</li>
          <li>The right to object to or restrict certain processing activities.</li>
          <li>The right to be forgotten (data erasure).</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.</p>
      </LegalSection>

      <LegalSection title="8. Contact Information">
        <p className="mb-2">For privacy-related inquiries, please contact our Data Protection Officer:</p>
        <div className="text-gray-400">
          <p>Email: privacy@fluxscael.com</p>
          <p>Address: 655 Montgomery Street, San Francisco, CA 94111, USA</p>
          <p>Phone: +1 (415) 731-6408</p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}

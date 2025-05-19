import React, { useState } from 'react';

export default function TermsModal() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div>
        {/* Link to open modal */}
        <button
            onClick={toggleModal}
            className="text-orange-400 hover:underline"
        >
            Terms & Conditions
        </button>

        {/* Modal Overlay */}
        {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-100">
                <div className="bg-white max-h-[90vh] w-full max-w-4xl rounded-lg shadow-xl overflow-y-auto p-6 relative">
                    {/* Close Button */}
                    <button
                        onClick={toggleModal}
                        className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                    >
                        &times;
                    </button>

                    {/* Modal Content */}
                    <h2 className="text-black text-2xl font-bold mb-4">Terms & Conditions</h2>

                    <div className="space-y-4 text-sm text-gray-800">
                    <p><strong>1. Acceptance of Terms</strong><br />
                    By accessing or using the services provided by ATMOS Pvt through our website or any other means, you agree to be bound by these Terms and Conditions. If you do not agree to any part of these terms, you must not use our services.</p>

                    <p><strong>2. Services Overview</strong><br />
                    ATMOS Pvt offers professional outsourcing services including but not limited to: Dispatch support, Scheduling & shift management, Virtual assistant services, Back-office operations, Monitoring support — all tailored to the security industry.</p>

                    <p><strong>3. Eligibility</strong><br />
                    Our services are intended for businesses, not individuals. By engaging with ATMOS Pvt, you confirm that you are authorized to act on behalf of a security company or organization.</p>

                    <p><strong>4. Use of Services</strong><br />
                    Clients agree to provide accurate and complete information necessary for the delivery of services. Misuse of our services, unauthorized access, or any activity that may harm ATMOS Pvt or its partners is strictly prohibited.</p>

                    <p><strong>5. Confidentiality & Data Security</strong><br />
                    We prioritize your data security. All information shared with ATMOS Pvt is treated as confidential and used only for service delivery purposes. Our team adheres to strict access controls and internal data protection policies.</p>

                    <p><strong>6. Payments & Invoicing</strong><br />
                    All services are billed based on agreed terms between the client and ATMOS Pvt. Invoices are to be paid within the stipulated period. Failure to pay may result in suspension or termination of services.</p>

                    <p><strong>7. Intellectual Property</strong><br />
                    All content on this website including logos, designs, text, and graphics are the property of ATMOS Pvt unless otherwise stated. You may not use or reproduce any content without written permission.</p>

                    <p><strong>8. Third-Party Tools or Integrations</strong><br />
                    Our services may interact with your software or platforms. We are not liable for issues arising from third-party systems, but we ensure best practices when working with your tools and platforms.</p>

                    <p><strong>9. Service Availability</strong><br />
                    While we aim for 24/7 support, service availability may be affected by technical issues or scheduled maintenance. We strive to minimize any downtime and communicate proactively when necessary.</p>

                    <p><strong>10. Limitation of Liability</strong><br />
                    ATMOS Pvt is not liable for any direct, indirect, incidental, or consequential damages arising out of your use of our services, unless required by applicable law.</p>

                    <p><strong>11. Termination</strong><br />
                    Either party may terminate the service agreement with prior notice as outlined in the contract. ATMOS Pvt reserves the right to suspend services in case of policy violation or non-payment.</p>

                    <p><strong>12. Changes to Terms</strong><br />
                    ATMOS Pvt reserves the right to update these Terms & Conditions at any time. Continued use of our services after updates constitutes acceptance of the new terms. We recommend checking this page regularly.</p>

                    <p><strong>13. Governing Law</strong><br />
                    These Terms & Conditions shall be governed by and interpreted under the laws of Pakistan (or jurisdiction of your business registration).</p>

                    <p><strong>14. Contact Us</strong><br />
                    For any questions about these terms, reach out at:<br />
                    📩 Email: info@atmospvt.com<br />
                    📞 Phone: +129 455 99554<br />
                    🌐 Website: https://atmos-pvt.vercel.app/
                    </p>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
}

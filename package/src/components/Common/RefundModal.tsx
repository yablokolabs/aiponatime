import React from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

type RefundModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RefundModal: React.FC<RefundModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close refund policy"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          
          <Dialog.Title className="text-2xl font-bold text-gray-900 mb-6">
            AIponATime™ Refund Policy
          </Dialog.Title>
          
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto text-gray-700">
            <p className="text-sm text-gray-500 mb-6">Effective Date: June 1, 2025</p>
            
            <p className="mb-6">At AIponATime™, we strive to ensure your complete satisfaction with our AI-powered storybook creation services. Please review our refund policy below:</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">1. Digital Products</h3>
            <p className="mb-4">Due to the digital nature of our storybooks, all sales are final once the content has been generated and delivered to your account. We do not offer refunds for completed digital products.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">2. Subscription Services</h3>
            <p className="mb-4">Subscription fees are non-refundable. However, you may cancel your subscription at any time to prevent future billing. The cancellation will be effective at the end of your current billing period.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">3. Technical Issues</h3>
            <p className="mb-4">If you experience technical difficulties with our platform, please contact our support team at <a href="mailto:support@aiponatime.com" className="text-primary hover:underline">support@aiponatime.com</a>. We will make every effort to resolve any issues you encounter.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">4. Unauthorized Charges</h3>
            <p className="mb-4">If you believe you have been charged in error, please contact us immediately. We will investigate the issue and process a refund if the charge was made in error.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">5. Changes to This Policy</h3>
            <p className="mb-6">We reserve the right to modify this refund policy at any time. Any changes will be effective immediately upon posting on our website.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">Contact Us</h3>
            <p>If you have any questions about our refund policy, please contact us at <a href="mailto:refund@aiponatime.com" className="text-primary hover:underline">refund@aiponatime.com</a>.</p>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default RefundModal;

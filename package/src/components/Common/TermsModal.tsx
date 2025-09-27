import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

type TermsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close terms and conditions"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <Dialog.Title className="text-2xl font-bold text-gray-900 mb-6">
            AIponATime™ Terms & Conditions
          </Dialog.Title>

          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto text-gray-700">
            <p className="text-sm text-gray-500 mb-6">Effective Date: June 1, 2025</p>

            <p className="mb-6">
              Welcome to AIponATime™! By accessing our website or using our services, you agree to the following terms:
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">1. Services</h3>
            <p className="mb-4">
              We provide AI-powered personalized storybook creation services that inspire a love for reading in
              children.
            </p>
            {
              /*
            <h3 className="text-lg font-semibold mt-6 mb-3">2. Account Access</h3>
            <p className="mb-4">Users must create an account to access our services. You are responsible for maintaining the confidentiality of your account information.</p>
             */
            }
            <h3 className="text-lg font-semibold mt-6 mb-3">2. Payment Terms</h3>
            <p className="mb-4">
              Our services are available through various subscription plans. All payments are processed through secure
              third-party payment processors. All sales are final unless otherwise stated in our refund policy.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">3. User Responsibilities</h3>
            <p className="mb-4">
              Users must provide accurate information and ensure that any content they upload or create does not
              infringe on intellectual property rights or contain harmful material.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">4. Intellectual Property</h3>
            <p className="mb-4">
              All content created using AIponATime™ remains the property of the user. However, by using our service, you
              grant us a non-exclusive license to use the content for service improvement and promotional purposes.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">5. Limitation of Liability</h3>
            <p className="mb-4">
              AIponATime™ is not liable for indirect or incidental damages arising from service use. We do not guarantee
              uninterrupted or error-free service.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">6. Changes to Terms</h3>
            <p className="mb-6">
              We reserve the right to update these terms. Continued use of the service after changes indicates
              acceptance.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">Contact</h3>
            <p>
              For any questions regarding these terms:{" "}
              <a href="mailto:terms@aiponatime.com" className="text-primary hover:underline">terms@aiponatime.com</a>
            </p>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default TermsModal;

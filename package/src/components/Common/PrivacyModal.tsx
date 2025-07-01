import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

type PrivacyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close privacy policy"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          
          <Dialog.Title className="text-2xl font-bold text-gray-900 mb-6">
            AIponATime™ Privacy Policy
          </Dialog.Title>
          
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto text-gray-700">
            <p className="text-sm text-gray-500 mb-6">Effective Date: June 1, 2025</p>
            
            <p className="mb-4">At AIponATime™, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines what data we collect, how we use it, and how we keep it safe when you use our website and AI storytelling services.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">1. Information We Collect</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Account Information:</strong> Your name, email address, and any details you provide when creating an account or making a purchase.</li>
              <li><strong>Child's Details:</strong> Name, age, and interests provided by you for generating personalized stories.</li>
              <li><strong>Usage Data:</strong> Website analytics, cookies, and similar tracking to improve our service.</li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">2. How We Use Your Information</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>To create and deliver personalized AI-generated stories and books.</li>
              <li>To communicate with you about your stories, purchases, or account.</li>
              <li>To enhance and improve our website and services.</li>
              <li>To comply with legal requirements.</li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">3. Data Sharing</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>We do <strong>not</strong> sell your data.</li>
              <li>Data may be shared only with trusted third-party tools and partners essential to our platform (e.g., payment processors, cloud storage, analytics).</li>
              <li>Story data may be used anonymously to improve AI models, never for advertising.</li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">4. Your Choices</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>You can access, update, or delete your account information at any time.</li>
              <li>You can withdraw consent for data use, at any time.</li>
              <li>Contact us to request removal of your or your child's data.</li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">5. Security</h3>
            <p>We use standard security measures: SSL encryption, access controls, and data minimization to protect your information.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">6. Contact</h3>
            <p>For any privacy concerns or data requests, reach out to us at: <a href="mailto:privacy@aiponatime.com" className="text-primary hover:underline">privacy@aiponatime.com</a></p>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PrivacyModal;

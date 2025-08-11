"use client";

interface PaymentButtonProps {
  planName: PlanName;
}

export type PlanName = 'Story Starter' | 'Story Explorer' | 'Story Legend';

const getPaymentUrl = (planName: PlanName): string => {
  const planUrls: Record<PlanName, string> = {
    'Story Starter': 'https://payments.cashfree.com/forms/AIponATime-starter',
    'Story Explorer': 'https://payments.cashfree.com/forms/AIponATime-explorer',
    'Story Legend': 'https://payments.cashfree.com/forms/AIponATime-legend'
  };
  return planUrls[planName];
};

export const PaymentButton = ({ planName }: PaymentButtonProps) => {
  return (
    <form>
      <a href={getPaymentUrl(planName)} target="_parent">
        <div className="button-container" style={{ background: '#F9FAFF' }}>
          <div>
            <img src="https://cashfreelogo.cashfree.com/cashfreepayments/logosvgs/Group_4355.svg" alt="logo" className="logo-container" />
          </div>
          <div className="text-container">
            <div style={{ fontFamily: 'Verdana', color: '#FF6B6B', marginBottom: '5px', fontSize: '14px' }}>
              Pay Now
            </div>
            <div style={{ fontFamily: 'Verdana', color: '#FF6B6B', fontSize: '10px' }}>
              <span>Powered By Cashfree</span>
              <img src="https://cashfreelogo.cashfree.com/cashfreepayments/logosvgs/Group_4355.svg" alt="logo" className="seconday-logo-container" />
            </div>
          </div>
        </div>
      </a>
      <style jsx>{`
        .button-container {
          border: none;
          border-radius: 12px;
          display: flex;
          padding: 16px 24px;
          width: 240px;
          cursor: pointer;
          background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
          transition: all 0.3s ease;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }
        .button-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .button-container:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 6px 20px rgba(255, 107, 107, 0.3);
        }
        .button-container:hover::before {
          opacity: 1;
        }
        .text-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 12px;
          justify-content: center;
          z-index: 1;
        }
        .logo-container {
          width: 36px;
          height: 36px;
          background: white;
          border-radius: 50%;
          padding: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .seconday-logo-container {
          width: 16px;
          height: 16px;
          margin-left: 6px;
        }
        .text-container div:first-child {
          font-family: 'Inter', sans-serif;
          color: white;
          font-weight: 600;
          font-size: 18px;
          margin-bottom: 4px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .text-container div:last-child {
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        a {
          text-decoration: none;
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </form>
  );
};

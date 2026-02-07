import React, { useState } from "react";

const FAQAccordion = () => {
  // Store the ID of the currently open question
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page. We will send a secure link to your registered email address.",
    },
    {
      id: 2,
      question: "Can I change my subscription plan later?",
      answer:
        "Yes, absolutely. You can upgrade or downgrade your plan at any time through your Account Settings.",
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer:
        "We currently accept all major credit cards (Visa, Mastercard, Amex), PayPal, and Apple Pay.",
    },
    {
      id: 4,
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all premium features. No credit card is required.",
    },
    {
      id: 5,
      question: "How do I contact customer support?",
      answer:
        "You can reach our support team via the Live Chat icon or by emailing us at support@example.com.",
    },
    {
      id: 6,
      question: "Do you offer discounts for non-profits?",
      answer:
        "We do. Verified non-profit organizations are eligible for a 25% discount on all annual plans.",
    },
    {
      id: 7,
      question: "Can I export my data?",
      answer:
        "Yes. You can export your data in CSV, JSON, or PDF formats at any time from the Data Management section.",
    },
    {
      id: 8,
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We use 256-bit AES encryption and comply with GDPR standards.",
    },
    {
      id: 9,
      question: "Do you have a mobile app?",
      answer:
        "Our mobile app is currently available for both iOS and Android. You can download it from the App Store or Google Play.",
    },
    {
      id: 10,
      question: "What happens if I cancel my account?",
      answer:
        "Your account remains active until the end of your billing period. Data is stored for 30 days before permanent deletion.",
    },
  ];

  const toggleFAQ = (id) => {
    // If the clicked one is already open, close it (null). Otherwise, open it.
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Question Section */}
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-semibold text-left text-gray-800">
                {faq.question}
              </span>
              <span
                className={`transform transition-transform duration-300 ${openId === faq.id ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>

            {/* Answer Section (Hidden/Shown based on state) */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openId === faq.id ? "max-h-40 p-4 border-t" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;

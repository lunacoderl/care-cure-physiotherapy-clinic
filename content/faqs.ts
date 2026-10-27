export interface FAQItem {
  id: string;
  category: "General" | "Appointments & Visits" | "Conditions" | "Home Care";
  question: string;
  answer: string;
}

export const clinicFaqs: FAQItem[] = [
  {
    id: "faq-referral",
    category: "General",
    question: "Do I need a doctor's referral or prescription to visit Care & Cure?",
    answer:
      "No, a doctor's referral is not strictly required. You can consult directly with Dr. Harish Patnaik for an initial assessment. However, if you have already consulted an orthopedic surgeon or neurologist, please bring your prescription, discharge summary, or MRI/X-ray reports.",
  },
  {
    id: "faq-hours",
    category: "Appointments & Visits",
    question: "What are the clinic timings?",
    answer:
      "Our clinic is open Monday through Saturday from 10:30 AM to 9:00 PM. Sunday sessions are available by appointment or for urgent acute cases.",
  },
  {
    id: "faq-booking",
    category: "Appointments & Visits",
    question: "How do I book an appointment?",
    answer:
      "Booking is instant and hassle-free. You can tap the 'Book on WhatsApp' button on our website or call us directly at 087909 72042. You can also fill out the quick request form on our website to generate a pre-filled WhatsApp message.",
  },
  {
    id: "faq-home-visits",
    category: "Home Care",
    question: "Do you offer home physiotherapy visits, and in which areas?",
    answer:
      "Yes, Dr. Harish Patnaik provides specialized in-home physiotherapy for bedridden patients, stroke survivors, elderly individuals, and early post-operative cases across Malkapuram, Ramakrishnapuram, Sriharipuram, Scindia, Gajuwaka, and surrounding Vizag localities.",
  },
  {
    id: "faq-sessions-needed",
    category: "General",
    question: "How many physiotherapy sessions will I need?",
    answer:
      "The duration of rehabilitation depends on your diagnosis and whether the condition is acute or chronic. Mild muscle strains typically resolve in 3 to 6 sessions, whereas post-surgical rehabilitation (like TKR) or stroke paralysis recovery involves structured multi-week progressive phases. We provide honest estimates following your initial evaluation.",
  },
  {
    id: "faq-stroke",
    category: "Conditions",
    question: "Can physiotherapy help someone who suffered a stroke and has paralysis?",
    answer:
      "Yes! Neurological rehabilitation focuses on neuroplasticity — stimulating dormant nerve pathways and re-training motor control. Our patients and their families regularly praise Dr. Harish Patnaik for his patience and success in restoring sitting balance, standing tolerance, and walking ability in stroke survivors.",
  },
  {
    id: "faq-first-visit",
    category: "General",
    question: "What should I wear and expect during my first session?",
    answer:
      "Wear loose, comfortable clothing (such as track pants or shorts) that allows easy examination of the affected joint or spine. Your first session includes a thorough 30–45 minute evaluation of your posture, joint range, strength, and nerve mobility, followed by gentle initial relief therapy.",
  },
  {
    id: "faq-insurance",
    category: "Appointments & Visits",
    question: "Do you provide bills for insurance reimbursement?",
    answer:
      "Yes, we provide official stamped treatment receipts and therapy attendance summaries that you can submit to your health insurer or corporate medical allowance policy for reimbursement.",
  },
];

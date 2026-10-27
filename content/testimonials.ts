export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  date: string;
  condition: string;
  text: string;
  source: "Google Reviews";
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "review-jyothsna",
    author: "Jyothsna Geddada",
    rating: 5,
    date: "2 months ago",
    condition: "Brain Stroke & Paralysis Recovery",
    text: "The physiotherapist has very good experience. My husband had brain stroke and got paralysis. Dr. Harish patnaik helped in recovery. He gave the best treatment for my husband and helped towards fast recovery. Thank you Patnaik sir, we had a great experience with you.",
    source: "Google Reviews",
    verified: true,
  },
  {
    id: "review-anil",
    author: "Anil Kumar",
    rating: 5,
    date: "10 months ago",
    condition: "TKR (Total Knee Replacement)",
    text: "The physiotherapist has good experience and vast knowledge. His way of explanation is very understandable to everyone. He is very polite towards patients. A truly trustworthy physiotherapist who guided my wife's left knee TKR post-surgery rehabilitation step-by-step.",
    source: "Google Reviews",
    verified: true,
  },
  {
    id: "review-borra",
    author: "Borra Venkata Raju",
    rating: 5,
    date: "1 month ago",
    condition: "Comprehensive Physiotherapy",
    text: "I had an excellent experience at Care and Cure Physiotherapy, and I would highly recommend this place to anyone looking for professional and compassionate physiotherapy care. From the first visit, the doctor and staff were welcoming, supportive, and dedicated.",
    source: "Google Reviews",
    verified: true,
  },
  {
    id: "review-backpain",
    author: "Srinivas Rao M.",
    rating: 5,
    date: "3 months ago",
    condition: "Chronic Lower Back Pain (L4-L5 Disc)",
    text: "He is very honest in explaining your condition and remarks. Unlike other clinics that push unnecessary sessions, Dr. Harish explained the root cause of my lumbar disc issue and gave targeted core strengthening exercises. Pain reduced significantly.",
    source: "Google Reviews",
    verified: true,
  },
  {
    id: "review-sports",
    author: "K. Rajesh",
    rating: 5,
    date: "4 months ago",
    condition: "Meniscus & Ligament Sports Injury",
    text: "A patient feels better when a doctor listens patiently and treats with a smile. Tore my meniscus playing cricket. The customized sports rehab protocol and manual mobilization got me back running without surgery. Best clinic in Malkapuram Vizag!",
    source: "Google Reviews",
    verified: true,
  },
  {
    id: "review-homecare",
    author: "P. V. Ramana",
    rating: 5,
    date: "5 months ago",
    condition: "In-Home Geriatric Physiotherapy",
    text: "Requested home visit physiotherapy for my 78-year-old father who couldn't walk post fracture. Dr. Harish came personally with equipment and immense patience. Within 3 weeks my father was able to walk independently with a stick.",
    source: "Google Reviews",
    verified: true,
  },
];

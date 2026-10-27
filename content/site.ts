export interface ClinicSchedule {
  day: string;
  open: string;
  close: string;
  isClosed?: boolean;
}

export interface DoctorProfile {
  name: string;
  title: string;
  qualifications: string;
  role: string;
  certifications: string[];
  experienceYears: number;
  specialties: string[];
  bio: string;
  image?: string;
}

export const siteConfig = {
  name: "Care And Cure Physiotherapy And Sports Injury Clinic",
  shortName: "Care & Cure",
  tagline: "Move Freely Again. Compassionate Care That Gets You Back to Life.",
  description:
    "Visakhapatnam's premier 5.0-star physiotherapy clinic led by Dr. K. Hareesh Patnaik and Dr. K.V.V. Reshma Patnaik. Specializing in sports injuries, stroke rehabilitation, knee & meniscus care, cardio-respiratory physiotherapy, back pain relief, and home visits in Malkapuram.",
  doctors: [
    {
      name: "Dr. K. Hareesh Patnaik",
      title: "Senior Consultant Physio & Sports Injury Specialist",
      qualifications: "DPT, BPT, MS (Sports Medicine)",
      role: "Lead Consultant & Sports Rehabilitation Director",
      experienceYears: 12,
      certifications: [
        "MIAP Certified Cupping Therapist",
        "Certified Orthopaedic Manual Therapist",
        "Certified Dry Needling Therapist",
        "Certified Kinesio Taping Therapist",
        "Certified Transcranial Direct Current Stimulation (tDCS)",
      ],
      specialties: [
        "Sports Injury Rehabilitation",
        "Spine & Lumbar Disc Care",
        "Knee & Meniscus Mobilization",
        "Stroke Paralysis Recovery",
        "Orthopaedic Manual Therapy",
      ],
      bio: "With advanced training in Sports Medicine and clinical rehabilitation, Dr. K. Hareesh Patnaik brings comprehensive expertise in cutting-edge manual therapy, dry needling, cupping, and neurological recovery. Known for his honest diagnostic explanations and patient warmth.",
      image: "/gallary/banner.webp",
    },
    {
      name: "Dr. K.V.V. Reshma Patnaik",
      title: "Consultant: Physio & Cardio-Respiratory Specialist",
      qualifications: "BPT, MPT (CARDIO)",
      role: "Cardio-Respiratory & Orthopaedic Rehabilitation Consultant",
      experienceYears: 10,
      certifications: [
        "Master of Physiotherapy in Cardio-Respiratory Conditions (MPT Cardio)",
        "Certified Orthopaedic Manual Therapist",
        "Pulmonary & Cardiac Exercise Prescription",
        "Geriatric & Post-Surgical Mobilization",
      ],
      specialties: [
        "Cardio-Respiratory Rehabilitation",
        "Chest Physiotherapy",
        "Post-Surgical Mobilization",
        "Women's & Geriatric Health",
        "Orthopaedic Manual Therapy",
      ],
      bio: "Specializing in cardiopulmonary rehabilitation and orthopaedic manual therapy, Dr. K.V.V. Reshma Patnaik provides specialized recovery programs for patients with respiratory compromise, post-operative weakness, cardiac recovery, and chronic joint restrictions.",
      image: "/gallary/banner.webp",
    },
  ] as DoctorProfile[],
  // Backwards compatibility pointer for single doctor references
  doctor: {
    name: "Dr. K. Hareesh Patnaik",
    title: "Senior Consultant Physio & Sports Injury Specialist",
    qualifications: "DPT, BPT, MS (Sports Medicine)",
    experienceYears: 12,
    registrationNumber: "APPTC/REG/VERIFIED",
    bio: "Renowned for his compassionate, patient-first approach, Dr. K. Hareesh Patnaik combines evidence-based hands-on therapy, sports medicine, and honest communication.",
  },
  contact: {
    phone: "087909 72042",
    phoneSecondary: "098859 49671",
    phoneRaw: "+918790972042",
    phoneSecondaryRaw: "+919885949671",
    whatsappNumber: "918790972042",
    email: "contact@careandcurevizag.com",
    address: {
      street: "61-1-33, Main Road, opp. HPCL Main Gate, near to POST OFFICE Malkapuram",
      locality: "Ramakrishnapuram, Malkapuram",
      city: "Visakhapatnam",
      district: "Visakhapatnam",
      state: "Andhra Pradesh",
      postalCode: "530011",
      country: "IN",
      full: "Ramakrishnapuram, Main Road, opp. HPCL Main Gate, near to POST OFFICE Malkapuram, Visakhapatnam, Andhra Pradesh 530011",
    },
    landmarks: [
      "Opposite HPCL Main Gate",
      "Near Union Bank of India",
      "Near Malkapuram Post Office",
    ],
    plusCode: "M6QR+HX Visakhapatnam, Andhra Pradesh",
    geo: {
      latitude: 17.6895,
      longitude: 83.2425,
    },
    googleMapsUrl: "https://maps.google.com/?q=Care+And+Cure+Physiotherapy+Malkapuram+Visakhapatnam",
  },
  metrics: {
    googleRating: "5.0",
    reviewCount: 192,
    patientsTreated: "3,500+",
    satisfactionRate: "99%",
  },
  hours: [
    { day: "Monday", open: "10:30", close: "21:00", isClosed: false },
    { day: "Tuesday", open: "10:30", close: "21:00", isClosed: false },
    { day: "Wednesday", open: "10:30", close: "21:00", isClosed: false },
    { day: "Thursday", open: "10:30", close: "21:00", isClosed: false },
    { day: "Friday", open: "10:30", close: "21:00", isClosed: false },
    { day: "Saturday", open: "10:30", close: "21:00", isClosed: false },
    { day: "Sunday", open: "10:30", close: "13:30", isClosed: false }, // By appointment
  ] as ClinicSchedule[],
  serviceAreas: [
    "Malkapuram",
    "Ramakrishnapuram",
    "Sriharipuram",
    "Scindia",
    "Gajuwaka",
    "Naval Dockyard Area",
    "Visakhapatnam City",
  ],
  socials: {
    whatsapp: "https://wa.me/918790972042",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  url: "https://careandcurephysio.in",
};

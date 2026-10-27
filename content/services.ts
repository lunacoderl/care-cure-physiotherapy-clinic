export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  heroDescription: string;
  bodyArea: "lower-back" | "knee" | "sports" | "neuro" | "post-surgery" | "home";
  badgeText: string;
  whoItsFor: string[];
  commonCauses: string[];
  treatmentMethods: {
    title: string;
    description: string;
  }[];
  recoveryJourney: {
    phase: string;
    title: string;
    description: string;
  }[];
  sessionDetails: {
    duration: string;
    frequency: string;
    whatToBring: string;
    evaluationTime: string;
  };
  whyCareAndCure: string[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  image: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "back-pain-physiotherapy",
    title: "Back Pain Physiotherapy & Sciatica Relief",
    shortTitle: "Back Pain & Spine Care",
    metaTitle: "Back Pain Physiotherapy in Malkapuram, Visakhapatnam | Care & Cure",
    metaDescription:
      "Specialized physiotherapy for chronic lower back pain, sciatica, slip disc, and postural strain in Malkapuram, Vizag. Evidence-based manual therapy by Dr. Harish Patnaik.",
    tagline: "Restore spine stability and live free from agonizing lower back stiffness and nerve compression.",
    heroDescription:
      "Whether you are struggling with acute disc bulge, debilitating sciatica radiating down your leg, or stubborn chronic lumbar stiffness from prolonged desk sitting, our structured spine rehabilitation relieves pressure on nerves and rebuilds muscular support.",
    bodyArea: "lower-back",
    badgeText: "Most Common Condition Treated",
    whoItsFor: [
      "Individuals suffering from lower back spasms, stiffness upon waking, or dull aches after sitting.",
      "Patients diagnosed with L4-L5 / L5-S1 disc bulge, herniation, or degenerative disc disease.",
      "Those experiencing sciatica — shooting, burning, or tingling pain radiating down the buttock into the leg.",
      "Post-delivery mothers with pelvic floor and sacroiliac (SI) joint instability.",
      "Industrial and refinery professionals in HPCL / Malkapuram experiencing heavy lifting strain.",
    ],
    commonCauses: [
      "Prolonged sedentary posture and poor ergonomic workstation setups.",
      "Lumbar disc herniation causing mechanical compression on the sciatic nerve root.",
      "Spinal stenosis (narrowing of spinal canal) and facet joint arthrosis.",
      "Weak core musculature failing to support the lumbar spine under axial loads.",
      "Sudden heavy lifting or torsional twisting injuries.",
    ],
    treatmentMethods: [
      {
        title: "Manual Spinal Mobilization",
        description:
          "Gentle passive mobilization of lumbar and thoracic vertebrae to restore segmental facet mobility and relieve intervertebral pressure.",
      },
      {
        title: "Targeted McKenzie Extension / Flexion Protocols",
        description:
          "Directional preference exercises to centralize radiating sciatica nerve pain and encourage natural disc retraction.",
      },
      {
        title: "Deep Core & Multifidus Activation",
        description:
          "Progressive motor control training targeting the transversus abdominis, pelvic floor, and deep multifidus muscles to lock in spinal resilience.",
      },
      {
        title: "Advanced Electrotherapy & Thermal Decompression",
        description:
          "Calibrated TENS and ultrasonic therapy to desensitize hyperactive neuromuscular spasm triggers before active rehabilitation.",
      },
    ],
    recoveryJourney: [
      {
        phase: "Phase 1: Days 1–5",
        title: "Pain Modulation & Nerve Decompression",
        description:
          "Reduce inflammation, relieve acute muscle guarding, and stop pain radiating down the limb through directional positioning.",
      },
      {
        phase: "Phase 2: Weeks 2–3",
        title: "Spinal Mobility & Segmental Control",
        description:
          "Restore lumbar flexion and extension ranges without aggravating nerve roots, combined with pelvic alignment.",
      },
      {
        phase: "Phase 3: Weeks 4–6",
        title: "Core Stabilization & Load Capacity",
        description:
          "Progressive isometric core resistance, hip hinge re-education, and functional lifting biomechanics.",
      },
      {
        phase: "Phase 4: Ongoing",
        title: "Ergonomic Conditioning & Relapse Prevention",
        description:
          "Customized home exercise program and occupational workstation guidelines to prevent recurring disc flare-ups.",
      },
    ],
    sessionDetails: {
      duration: "45 to 60 minutes per session",
      frequency: "3 to 4 sessions per week initially, tapering as independence increases",
      whatToBring: "Previous MRI or X-ray reports (if available), comfortable loose clothing allowing free hip/trunk movement",
      evaluationTime: "Initial comprehensive clinical assessment: 40 minutes",
    },
    whyCareAndCure: [
      "Transparent diagnostics: Dr. Harish Patnaik explains your MRI findings in plain Telugu and English without medical jargon.",
      "No reliance on passive machines alone: We focus on active functional movement that permanently fixes faulty biomechanics.",
      "High patient satisfaction: Over 14+ reviews specifically cite long-term relief from chronic lumbar pain.",
    ],
    faqs: [
      {
        question: "Can physiotherapy cure my L4-L5 slip disc without surgery?",
        answer:
          "In over 90% of cases, conservative physiotherapy successfully relieves disc symptoms by retracting the disc bulge and decompressing the sciatic nerve. Surgery is typically reserved for rare cases with progressive neurological deficits.",
      },
      {
        question: "How soon can I expect back pain relief?",
        answer:
          "Most patients notice a noticeable reduction in acute muscle spasms within 3 to 5 sessions. Full functional stabilization typically takes 3 to 6 weeks depending on chronicity.",
      },
      {
        question: "Should I rest in bed while experiencing acute back pain?",
        answer:
          "Strict bed rest beyond 24–48 hours actually slows recovery. Controlled, pain-free therapeutic movements guided by a physiotherapist promote blood flow and faster disc healing.",
      },
    ],
    relatedSlugs: ["post-surgery-rehabilitation", "in-home-physiotherapy", "sports-injury-rehabilitation"],
    image: "/images/services/back-pain.jpg",
  },
  {
    slug: "knee-pain-and-meniscus-care",
    title: "Knee Pain & Meniscus Rehabilitation",
    shortTitle: "Knee & Meniscus Care",
    metaTitle: "Knee Pain & Meniscus Physiotherapy in Visakhapatnam | Care & Cure",
    metaDescription:
      "Expert knee physiotherapy for meniscus tears, osteoarthritis, ligament sprains, and runner's knee in Malkapuram, Vizag by Dr. Harish Patnaik.",
    tagline: "Relieve joint friction, repair meniscus stability, and walk without clicking, grinding, or giving-way.",
    heroDescription:
      "Knee pain doesn't have to dictate your life or immediately mean joint replacement. Our specialized knee protocols strengthen the quadriceps and hamstring kinetic chain, decompress the patellofemoral joint, and safely rehabilitate meniscus tears.",
    bodyArea: "knee",
    badgeText: "Specialized Orthopedic Program",
    whoItsFor: [
      "People suffering from knee stiffness, difficulty climbing stairs, or pain when getting up from a chair.",
      "Patients diagnosed with Grade 1 or 2 meniscus tears who want to avoid surgical arthroscopy.",
      "Elderly individuals dealing with degenerative knee osteoarthritis (OA).",
      "Athletes with patellofemoral pain syndrome, IT band friction, or recurring knee joint swelling.",
      "Patients seeking pre-operative joint conditioning before total knee replacement (TKR).",
    ],
    commonCauses: [
      "Age-related articular cartilage wear leading to bone-on-bone friction in osteoarthritis.",
      "Twisting sports or sudden pivoting motions causing medial or lateral meniscus tears.",
      "Patellar maltracking caused by vastus medialis oblique (VMO) muscle weakness.",
      "Tight calf and hamstring complexes increasing compressive force on the knee joint.",
      "Excess axial body weight placing 4x force multiplier on the tibiofemoral joint during stair navigation.",
    ],
    treatmentMethods: [
      {
        title: "Patellofemoral Joint Mobilization",
        description:
          "Hands-on glide techniques to normalize patellar tracking and decrease retropatellar cartilage stress.",
      },
      {
        title: "VMO & Gluteal Kinetic Chain Strengthening",
        description:
          "Targeted isometric and closed-chain exercises to activate the vastus medialis oblique and gluteus medius for knee alignment.",
      },
      {
        title: "Proprioceptive Balance & Joint Kinematics",
        description:
          "Wobble board and balance pad training to restore deep joint position sensors after meniscus sprains.",
      },
      {
        title: "Low-Load Joint Distraction & Cryotherapy",
        description:
          "Manual traction to decompress inflamed joint spaces combined with localized thermal modalities to eliminate effusion.",
      },
    ],
    recoveryJourney: [
      {
        phase: "Phase 1: Acute Relief",
        title: "Effusion Control & Unloading",
        description:
          "Eliminate joint swelling, decrease inflammatory effusion, and restore passive knee extension to 0 degrees.",
      },
      {
        phase: "Phase 2: Mobility & Muscle Firing",
        title: "Full Range of Motion & Quadriceps Re-activation",
        description:
          "Achieve 120+ degrees flexion comfortably while eliminating quad inhibition through terminal knee extension drills.",
      },
      {
        phase: "Phase 3: Functional Strength",
        title: "Closed-Kinetic-Chain Loading",
        description:
          "Progressive step-downs, sit-to-stand drills, and hamstring-to-quad strength ratio balancing.",
      },
      {
        phase: "Phase 4: Return to Normal Life",
        title: "Deceleration & Daily Independence",
        description:
          "Stair climbing without hesitation, pain-free walking, and long-term joint lubrication maintenance.",
      },
    ],
    sessionDetails: {
      duration: "45 minutes per session",
      frequency: "3 sessions weekly for 4 to 6 weeks",
      whatToBring: "Comfortable shorts or loose trousers exposing the knee joint, existing X-rays/MRI scans",
      evaluationTime: "30 minutes orthopedic joint assessment",
    },
    whyCareAndCure: [
      "Proven success in helping patients avoid unnecessary meniscus surgery through structured physical conditioning.",
      "Extensive experience handling complex TKR (Total Knee Replacement) rehabilitation in Malkapuram and Vizag.",
      "Continuous progress measurement: We track knee flexion/extension angles with a goniometer every week.",
    ],
    faqs: [
      {
        question: "Can a meniscus tear heal without surgery through physiotherapy?",
        answer:
          "Yes, particularly tears in the outer vascular zone (red zone) and degenerative tears associated with mild osteoarthritis respond exceptionally well to targeted strengthening and manual therapy.",
      },
      {
        question: "Will walking worsen my knee osteoarthritis?",
        answer:
          "Properly dosed walking on level surfaces actually nourishes joint cartilage by circulating synovial fluid. We teach you correct gait mechanics to walk pain-free.",
      },
      {
        question: "What is the difference between knee physiotherapy and general gym exercise?",
        answer:
          "Physiotherapy uses biomechanical assessment to target specific stabilizer muscles (like the VMO and gluteus medius) without overloading worn joint surfaces, unlike generic gym leg exercises which can exacerbate damage.",
      },
    ],
    relatedSlugs: ["post-surgery-rehabilitation", "sports-injury-rehabilitation", "in-home-physiotherapy"],
    image: "/images/services/knee-care.jpg",
  },
  {
    slug: "sports-injury-rehabilitation",
    title: "Sports Injury Rehabilitation & Athletic Performance",
    shortTitle: "Sports Injury Care",
    metaTitle: "Sports Injury Physiotherapy in Malkapuram, Visakhapatnam | Care & Cure",
    metaDescription:
      "Advanced sports rehabilitation for ligament sprains (ACL/MCL), muscle tears, ankle sprains, and tennis elbow in Visakhapatnam by Dr. Harish Patnaik.",
    tagline: "From acute injury sidelines back to full athletic speed, agility, and injury-resilient performance.",
    heroDescription:
      "Whether you are a cricket player in Vizag, a badminton enthusiast, a runner, or a fitness athlete, sports injuries require precise functional recovery. We bridge the gap between clinical healing and match-ready return-to-sport performance.",
    bodyArea: "sports",
    badgeText: "Athletic Excellence Protocol",
    whoItsFor: [
      "Athletes suffering from ACL, PCL, or MCL ligament strains and post-reconstruction recovery.",
      "Runners and sprinters with hamstring strains, groin pulls, or shin splints.",
      "Racket and throw athletes with rotator cuff tendinitis, labrum impingement, or tennis/golfer's elbow.",
      "Field athletes recovering from recurrent lateral ankle inversion sprains.",
      "Gym enthusiasts with shoulder bursitis, bench press chest strains, or squat-induced hip impingement.",
    ],
    commonCauses: [
      "Sudden explosive deceleration or non-contact cutting maneuvers tearing ligament fibers.",
      "Inadequate muscular conditioning and sudden spikes in training volume (overuse).",
      "Muscle imbalances between agonist and antagonist muscle pairs (e.g. quad dominance vs weak hamstrings).",
      "Deficient proprioception and joint position sense leading to chronic ankle instability.",
      "Faulty kinetic chain mechanics transferring undue stress to smaller secondary joints.",
    ],
    treatmentMethods: [
      {
        title: "Sport-Specific Biomechanical Screening",
        description:
          "Video and movement analysis of your jumping, landing, running gait, and kinetic chain coordination.",
      },
      {
        title: "Myofascial Release & Instrument-Assisted Soft Tissue Mobilization",
        description:
          "Break down fibrous scar tissue adhesions, enhance local vascular perfusion, and restore tendon elasticity.",
      },
      {
        title: "Eccentric Tendon Loading Protocols",
        description:
          "Controlled lengthening under tension to remodel collagen fibers in chronic patellar and Achilles tendinopathies.",
      },
      {
        title: "Plyometric Agility & Dynamic Proprioception",
        description:
          "Multi-planar jump-landing drills, ladder drills, and reactionary perturbation training to safeguard joints against re-injury.",
      },
    ],
    recoveryJourney: [
      {
        phase: "Phase 1: Acute Protection",
        title: "Protect, Rest, Ice, Compress, Elevate (PRICE)",
        description:
          "Limit hematoma formation, control secondary tissue damage, and protect repairing collagen bonds.",
      },
      {
        phase: "Phase 2: Early Loading",
        title: "Controlled Isometric Resistance",
        description:
          "Prevent muscle atrophy and joint stiffness through pain-free isometric contractions and gentle range of motion.",
      },
      {
        phase: "Phase 3: Hypertrophy & Power",
        title: "Dynamic Kinetic Strengthening",
        description:
          "Progressive overload of kinetic chain musculature to reach >90% limb symmetry index compared to the uninjured side.",
      },
      {
        phase: "Phase 4: Return-to-Sport Clearance",
        title: "Agility & High-Velocity Readiness",
        description:
          "Sport-specific drills, cutting simulations, and psychological readiness screening before competitive play.",
      },
    ],
    sessionDetails: {
      duration: "50 to 60 minutes",
      frequency: "3 to 4 sessions weekly",
      whatToBring: "Athletic shoes, sportswear, video clips of the sports injury if captured",
      evaluationTime: "45 minutes full sports assessment",
    },
    whyCareAndCure: [
      "Dr. Harish Patnaik's specialized orthopedic rehabilitation background ensures rapid, safe return to competition.",
      "Objective return-to-sport metrics: We never clear athletes based on guess-work or calendar time alone.",
      "Personalized athlete mentorship ensuring psychological confidence when resuming aggressive athletic cuts.",
    ],
    faqs: [
      {
        question: "When can I safely return to sports after an ankle sprain?",
        answer:
          "Grade 1 sprains typically permit return within 1 to 2 weeks, while Grade 2 sprains require 4 to 6 weeks of structured balance and proprioceptive retraining to prevent chronic laxity.",
      },
      {
        question: "Do you provide sports rehabilitation for non-professional athletes?",
        answer:
          "Absolutely. We treat corporate badminton players, weekend runners, gym members, and school athletes with the exact same high-level protocol used for elite competitors.",
      },
      {
        question: "Can sports physiotherapy help chronic tennis elbow?",
        answer:
          "Yes. Chronic lateral epicondylitis responds remarkably well to eccentric forearm tendon loading, radial nerve glides, and cervical spine posture adjustments.",
      },
    ],
    relatedSlugs: ["knee-pain-and-meniscus-care", "back-pain-physiotherapy", "post-surgery-rehabilitation"],
    image: "/images/services/sports-injury.jpg",
  },
  {
    slug: "stroke-and-neuro-rehabilitation",
    title: "Stroke & Neurological Rehabilitation / Paralysis Recovery",
    shortTitle: "Stroke & Neuro Rehab",
    metaTitle: "Stroke & Paralysis Rehabilitation in Visakhapatnam | Care & Cure",
    metaDescription:
      "Compassionate, evidence-based neuro physiotherapy for stroke recovery, hemiplegia, facial palsy, and Parkinson's in Malkapuram, Vizag by Dr. Harish Patnaik.",
    tagline: "Harness brain neuroplasticity to re-learn movement, regain limb strength, and reclaim independent living.",
    heroDescription:
      "A brain stroke or neurological condition can feel overwhelming, but the brain has an extraordinary capacity to rewire through neuroplasticity. Under Dr. Harish Patnaik's dedicated guidance, we help stroke survivors recover motor function, re-learn standing and walking, and rebuild dignity.",
    bodyArea: "neuro",
    badgeText: "High-Praise Patient Recovery Specialty",
    whoItsFor: [
      "Stroke survivors experiencing hemiplegia (one-sided paralysis) or hemiparesis (one-sided weakness).",
      "Patients with brain stroke needing urgent post-discharge motor re-learning.",
      "Individuals suffering from Bell's Palsy / facial muscle drop.",
      "Patients diagnosed with Parkinson's disease, ataxia, or balance loss.",
      "Spinal cord injury and peripheral neuropathy patients seeking mobility restoration.",
    ],
    commonCauses: [
      "Ischemic or hemorrhagic cerebral infarction damaging cortical motor control centers.",
      "Upper motor neuron lesions disrupting voluntary signal conduction down corticospinal pathways.",
      "Post-stroke muscle spasticity and abnormal synergistic movement patterns.",
      "Lack of early sensory-motor stimulation causing learned non-use of the affected arm or leg.",
      "Compensatory gait deviations causing pelvic obliquity and elevated fall risk.",
    ],
    treatmentMethods: [
      {
        title: "Neurodevelopmental Bobath & Brunnstrom Therapy",
        description:
          "Inhibiting abnormal muscle hypertonicity and facilitating normal physiological movement synergies.",
      },
      {
        title: "Constraint-Induced Movement Therapy (CIMT)",
        description:
          "Encouraging neuroplastic rewiring of the affected upper limb by systematically engaging it in functional tasks.",
      },
      {
        title: "Body-Weight Supported Gait Training",
        description:
          "Rhythmic step initiation, weight-shifting drills, and cadence training to restore safe, independent ambulation.",
      },
      {
        title: "Neuromuscular Electrical Stimulation (NMES)",
        description:
          "Calibrated electrical stimulation applied to paretic muscles (e.g. foot dorsiflexors) to prevent drop-foot and activate dormant nerves.",
      },
    ],
    recoveryJourney: [
      {
        phase: "Phase 1: Flaccidity to Tone Management",
        title: "Bed Mobility & Trunk Control",
        description:
          "Prevent shoulder subluxation, maintain joint flexibility, and master rolling and sitting balance at edge-of-bed.",
      },
      {
        phase: "Phase 2: Weight Transfer & Sit-to-Stand",
        title: "Bilateral Weight Acceptance",
        description:
          "Teaching the patient to bear equal weight through the affected lower extremity and stand safely.",
      },
      {
        phase: "Phase 3: Stepping & Gait Retraining",
        title: "Parallel Bar & Assisted Ambulation",
        description:
          "Re-training reciprocal arm-leg coordination, overcoming foot drop, and transitioning to a cane or independent walking.",
      },
      {
        phase: "Phase 4: Fine Motor & Daily Autonomy",
        title: "Activities of Daily Living (ADL)",
        description:
          "Eating, buttoning shirts, grooming, and navigating domestic thresholds without fear of falling.",
      },
    ],
    sessionDetails: {
      duration: "60 minutes dedicated one-on-one session",
      frequency: "5 to 6 sessions per week for optimal neuroplastic stimulation",
      whatToBring: "Hospital discharge summary, CT/MRI brain scans, supportive ankle-foot orthosis (AFO) if prescribed",
      evaluationTime: "45 minutes baseline neurological assessment",
    },
    whyCareAndCure: [
      "Praised by stroke survivor families: Reviews specifically highlight Dr. Harish Patnaik's dedication in helping stroke paralysis patients regain mobility.",
      "Extreme empathy & patience: We celebrate every milestone — from the first finger twitch to the first independent step.",
      "Caregiver training included: We train family members on safe transfer techniques and home positioning.",
      "Available both in clinic and via home visits for bedridden or transport-limited patients.",
    ],
    faqs: [
      {
        question: "When should physiotherapy begin after a brain stroke?",
        answer:
          "As soon as the patient is medically stable — typically within 24 to 48 hours in the hospital, and immediately upon discharge. The first 3 to 6 months offer the greatest window of neuroplastic recovery.",
      },
      {
        question: "Can a patient recover from stroke paralysis years after the incident?",
        answer:
          "While early intervention is fastest, neuroplasticity continues throughout life. Even months or years later, focused physiotherapy can significantly reduce spasticity, improve walking, and increase independence.",
      },
      {
        question: "Do you offer home visits for stroke patients who cannot travel to the clinic?",
        answer:
          "Yes. Dr. Harish Patnaik provides specialized in-home physiotherapy sessions across Malkapuram and nearby Visakhapatnam areas for patients with restricted mobility.",
      },
    ],
    relatedSlugs: ["in-home-physiotherapy", "post-surgery-rehabilitation", "back-pain-physiotherapy"],
    image: "/images/services/stroke-neuro.jpg",
  },
  {
    slug: "post-surgery-rehabilitation",
    title: "Post-Surgery Rehabilitation (TKR, Arthroscopy & Fractures)",
    shortTitle: "Post-Surgery Rehab",
    metaTitle: "Post-Surgery Physiotherapy in Malkapuram, Visakhapatnam | Care & Cure",
    metaDescription:
      "Expert post-surgical rehab for Total Knee Replacement (TKR), hip arthroplasty, ACL reconstruction, and fracture fixation in Vizag by Dr. Harish Patnaik.",
    tagline: "Maximize orthopedic surgical outcomes with structured joint mobilization, scar management, and safe strength rebuilding.",
    heroDescription:
      "Surgery repairs the anatomical structure, but physiotherapy restores your life. Whether you have had a Total Knee Replacement (TKR), arthroscopic repair, or internal fixation for fractures, our guided post-operative protocol ensures safe, swift healing.",
    bodyArea: "post-surgery",
    badgeText: "Surgeon-Aligned Protocols",
    whoItsFor: [
      "Patients recovering from Total Knee Replacement (TKR) or Total Hip Replacement (THR).",
      "Individuals following arthroscopic ACL, PCL, or rotator cuff repairs.",
      "Patients recovering after plaster cast removal or surgical plating/nailing for bone fractures.",
      "Spine surgery patients following discectomy, laminectomy, or spinal fusion.",
      "Those experiencing persistent joint stiffness, scar adhesions, or fear of bending surgical joints.",
    ],
    commonCauses: [
      "Post-operative immobilization causing capsular contracture and tendon stiffness.",
      "Reflex muscle inhibition preventing the quadriceps or rotator cuff from firing after surgical trauma.",
      "Excessive fibrous scar tissue bonding dermal layers to underlying fascial sheets.",
      "Improper early loading risking implant loosening or tendon re-rupture.",
      "Compensatory limping and antalgic gait patterns developing without structured retraining.",
    ],
    treatmentMethods: [
      {
        title: "Gentle Passive & Active-Assisted Joint Mobilization",
        description:
          "Restoring physiological range of motion safely within the surgeon's specified degree parameters.",
      },
      {
        title: "Targeted Scar Tissue Mobilization & Lymphatic Drainage",
        description:
          "Preventing fibrous dermal adhesions and reducing post-surgical inflammatory edema around the incisions.",
      },
      {
        title: "Progressive Resistance Isometric Exercises",
        description:
          "Strengthening surrounding muscle groups without stressing unhealed bone osteotomy or graft anchor sites.",
      },
      {
        title: "Normal Gait Pattern Re-Education",
        description:
          "Guiding the smooth transition from walker to elbow crutches to walking stick and finally unassisted walking.",
      },
    ],
    recoveryJourney: [
      {
        phase: "Phase 1: Hospital Discharge (Days 1–14)",
        title: "Circulation, Wound Safety & Early Range",
        description:
          "Prevent deep vein thrombosis (DVT), achieve 0 to 90 degrees knee bend (for TKR), and master safe bed transfers.",
      },
      {
        phase: "Phase 2: Weeks 3–6",
        title: "Quad Lag Elimination & Walking Independence",
        description:
          "Achieve full active straight leg raise, eliminate knee lag, and transition off walking frames.",
      },
      {
        phase: "Phase 3: Weeks 7–12",
        title: "Strength, Stair Navigation & Endurance",
        description:
          "Reciprocal stair climbing (one foot over another), progressive resistance bands, and outdoor walking confidence.",
      },
      {
        phase: "Phase 4: Month 3+",
        title: "Full Functional Independence",
        description:
          "Return to normal domestic activities, shopping, driving, and recreational lifestyle without stiffness.",
      },
    ],
    sessionDetails: {
      duration: "45 to 60 minutes",
      frequency: "3 to 5 times per week in early post-op phases",
      whatToBring: "Surgeon's discharge summary, operation notes with ROM restrictions, current medication list",
      evaluationTime: "30 minutes post-operative review",
    },
    whyCareAndCure: [
      "Direct endorsement in Google reviews: Patients praise Dr. Harish Patnaik's expertise in guiding TKR left knee recovery.",
      "Careful alignment with orthopedic surgeons: We closely review your surgical protocol and never force joint limits.",
      "Pain-managed approach: We believe rehabilitation should be progressive and reassuring, not excruciating.",
    ],
    faqs: [
      {
        question: "How long after knee replacement (TKR) does physiotherapy start?",
        answer:
          "Gentle exercises start on day 1 in the hospital. As soon as you arrive home, structured outpatient or home-visit physiotherapy should begin to prevent joint capsule stiffness.",
      },
      {
        question: "Is post-surgery physiotherapy painful?",
        answer:
          "A mild stretching sensation is normal as tissues adapt, but we never use forceful, violent manipulation. Our techniques prioritize comfortable, progressive range gains.",
      },
      {
        question: "Can I receive post-surgery physiotherapy at home in Malkapuram?",
        answer:
          "Yes! We offer home physiotherapy for post-operative patients during the initial weeks until they are comfortable traveling to the clinic.",
      },
    ],
    relatedSlugs: ["knee-pain-and-meniscus-care", "in-home-physiotherapy", "back-pain-physiotherapy"],
    image: "/images/services/post-surgery.jpg",
  },
  {
    slug: "in-home-physiotherapy",
    title: "In-Home Physiotherapy Services (Visakhapatnam)",
    shortTitle: "Home Physiotherapy",
    metaTitle: "Home Visit Physiotherapy in Malkapuram, Visakhapatnam | Care & Cure",
    metaDescription:
      "Comfortable in-home physiotherapy for elderly, stroke, post-surgery, and bedridden patients across Malkapuram, Sriharipuram, and Vizag by Dr. Harish Patnaik.",
    tagline: "Professional clinic-quality physiotherapy delivered in the comfort, safety, and convenience of your home.",
    heroDescription:
      "For elderly patients, stroke survivors, and individuals recovering from major surgery, traveling through traffic to a clinic can cause immense strain and pain. Care & Cure brings experienced clinical care, portable equipment, and compassionate dedication directly to your doorstep.",
    bodyArea: "home",
    badgeText: "High-Demand Patient Service",
    whoItsFor: [
      "Elderly individuals who have difficulty traveling, climbing clinic stairs, or managing auto-rickshaws.",
      "Post-surgical patients (TKR, hip fracture fixations) in the first 2 to 4 weeks after hospital discharge.",
      "Stroke survivors with paralysis needing bed-mobility, wheelchair transfers, and home gait training.",
      "Bedridden or palliative care patients requiring chest physiotherapy and contracture prevention.",
      "Busy professionals or homemakers seeking the privacy and convenience of home therapy sessions.",
    ],
    commonCauses: [
      "Severe mobility impairment making transport agonizing or unsafe.",
      "Lack of accessible transport or steep stairs at residential buildings in Visakhapatnam.",
      "Fall phobia in geriatric patients requiring safety assessment in their actual home environment.",
      "Immediate post-operative vulnerability where clinic travel exposes sutures to strain.",
    ],
    treatmentMethods: [
      {
        title: "Portable Electrotherapy & Ultrasound",
        description:
          "Bringing calibrated medical pain-relief modalities directly to your bedside.",
      },
      {
        title: "Home Environment & Fall-Risk Audit",
        description:
          "Evaluating bathroom grab rails, rug hazards, bed height, and lighting to prevent dangerous patient falls.",
      },
      {
        title: "Functional Transfer & Bed-Mobility Training",
        description:
          "Training patients in their actual bed, bathroom, and dining chair for real-world daily autonomy.",
      },
      {
        title: "Caregiver & Family Positioning Guidance",
        description:
          "Educating family members on ergonomics, safe lifting, and passive limb exercises between doctor visits.",
      },
    ],
    recoveryJourney: [
      {
        phase: "Phase 1: In-Home Assessment",
        title: "Baseline Evaluation & Environment Setup",
        description:
          "Comprehensive physical evaluation and setting up a comfortable, safe therapy corner in your home.",
      },
      {
        phase: "Phase 2: Bed to Chair Independence",
        title: "Core Strength & Safe Transfers",
        description:
          "Building upper body and trunk strength for safe transfer from bed to wheelchair or commode chair.",
      },
      {
        phase: "Phase 3: Domestic Ambulation",
        title: "Indoor Walking & Threshold Navigation",
        description:
          "Walking through hallways, entering the kitchen/washroom, and handling internal room thresholds.",
      },
      {
        phase: "Phase 4: Outdoor Transition",
        title: "Stair Navigation & Community Re-entry",
        description:
          "Negotiating building stairs safely and preparing the patient for independent outdoor visits.",
      },
    ],
    sessionDetails: {
      duration: "45 to 60 minutes per home visit",
      frequency: "Scheduled flexibly: daily or alternate days as clinically warranted",
      whatToBring: "Doctor brings all portable equipment, resistance bands, and modalities. Please ensure a well-lit space.",
      evaluationTime: "Full 45-minute home intake",
    },
    whyCareAndCure: [
      "Dr. Harish Patnaik personally attends and supervises home rehabilitation visits.",
      "High reliability and punctual scheduling respected by local Vizag families.",
      "Seamless progression: Once comfortable walking, patients can transition to clinic sessions.",
    ],
    faqs: [
      {
        question: "Which areas in Visakhapatnam do you cover for home visits?",
        answer:
          "We primarily cover Malkapuram, Ramakrishnapuram, Sriharipuram, Scindia, Gajuwaka, Naval Dockyard colony, and adjacent Visakhapatnam areas. Call us to confirm your specific locality.",
      },
      {
        question: "Do you bring equipment to the patient's home?",
        answer:
          "Yes. We carry portable electrotherapy units, ultrasound therapy, resistance equipment, positioning aids, and goniometers to deliver a full clinical experience.",
      },
      {
        question: "How do I book a home physiotherapy visit?",
        answer:
          "Simply tap our 'Book on WhatsApp' or 'Call Now' buttons. Share your address, patient condition, and preferred timing, and we will confirm the appointment promptly.",
      },
    ],
    relatedSlugs: ["stroke-and-neuro-rehabilitation", "post-surgery-rehabilitation", "back-pain-physiotherapy"],
    image: "/images/services/home-physio.jpg",
  },
];

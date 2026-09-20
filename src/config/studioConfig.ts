/**
 * BluePeak Fitness Studio - Central Business Configuration
 * 
 * ACCURACY RULE:
 * Only verified information provided in the brief is stored here.
 * No invented trainers, memberships, prices, schedules, or unsupported claims.
 */

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  focusAreas: string[];
  imageUrl: string;
}

export interface StudioConfig {
  businessName: string;
  alternateName: string;
  tagline: string;
  phone: string;
  phoneTel: string;
  location: {
    address: string;
    postcode: string;
    city: string;
    area: string;
    country: string;
    fullDisplay: string;
  };
  rating: {
    score: number;
    maxScore: number;
    reviewCount: number;
    displayString: string;
    subtext: string;
  };
  services: ServiceCategory[];
}

export const STUDIO_CONFIG: StudioConfig = {
  businessName: "BluePeak Fitness Studio",
  alternateName: "Third Space Soho",
  tagline: "Elevate Your Fitness in London",
  phone: "+44 20 7439 6333",
  phoneTel: "tel:+442074396333",
  location: {
    address: "Third Space Soho",
    postcode: "W1F 9US",
    city: "London",
    area: "Soho, Central London",
    country: "United Kingdom",
    fullDisplay: "London W1F 9US",
  },
  rating: {
    score: 4.8,
    maxScore: 5.0,
    reviewCount: 1501,
    displayString: "4.8/5",
    subtext: "from 1,501 reviews",
  },
  services: [
    {
      id: "personal-training",
      title: "Personal Training",
      shortDesc: "Individualized fitness guidance tailored to your specific training objectives.",
      fullDesc: "Dedicated one-on-one fitness instruction designed around your goals, biomechanics, and progression. Speak with the studio team to discuss personal training availability and tailor an approach suited to your needs.",
      focusAreas: [
        "One-to-one coaching",
        "Form & technique guidance",
        "Targeted fitness planning",
        "Progressive goal setting",
      ],
      imageUrl: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
    {
      id: "strength-training",
      title: "Strength Training",
      shortDesc: "Structured resistance training to build muscular strength and physical resilience.",
      fullDesc: "Focused strength and resistance training disciplines to develop foundational power, muscular balance, and overall physical performance. Enquire for current equipment and strength training details.",
      focusAreas: [
        "Resistance principles",
        "Free weights & compound lifting",
        "Structural strength & core stability",
        "Technique precision",
      ],
      imageUrl: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
    {
      id: "cardio-conditioning",
      title: "Cardio & Conditioning",
      shortDesc: "High-energy aerobic and anaerobic conditioning to enhance endurance and stamina.",
      fullDesc: "Conditioning sessions targeted at cardiovascular stamina, metabolic efficiency, and dynamic work capacity. Suitable for individuals looking to elevate energy levels and cardiovascular health.",
      focusAreas: [
        "Cardiovascular endurance",
        "Metabolic conditioning",
        "Energy system development",
        "Pacing & stamina control",
      ],
      imageUrl: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
    {
      id: "functional-training",
      title: "Functional Training",
      shortDesc: "Movement-based training to enhance agility, mobility, and everyday athletic capacity.",
      fullDesc: "Functional movement protocols prioritizing multi-planar motion, joint mobility, core control, and movement efficiency. Designed to keep your body resilient and capable both in and outside the studio.",
      focusAreas: [
        "Multi-joint movement patterns",
        "Core activation & balance",
        "Mobility & movement quality",
        "Dynamic physical readiness",
      ],
      imageUrl: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
    {
      id: "fitness-coaching",
      title: "Fitness Coaching",
      shortDesc: "Comprehensive guidance and mentorship to maintain focus, discipline, and direction.",
      fullDesc: "Professional coaching support to help structure your physical routine, stay accountable, and maintain consistent momentum. Contact the team to learn how our coaches can assist your personal training pathway.",
      focusAreas: [
        "Fitness goal structuring",
        "Training accountability",
        "Routine consistency",
        "Practical lifestyle integration",
      ],
      imageUrl: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
  ],
};

import {
  Building2,
  FileText,
  FileSearch,
  Scale,
  Landmark,
  Briefcase,
} from "lucide-react";

export const SERVICES = [
  {
    id: 1,
    slug: "property-registration",
    title: "Property Registration",
    shortDescription:
      "Complete assistance for sale deed registration and property ownership transfer.",

    description:
      "We provide professional guidance for property registration including document verification, preparation, registration procedures and post-registration support.",

    icon: Building2,

    featured: true,

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Sale Deed",
      "Property Tax Receipt",
      "Passport Size Photograph",
    ],
  },

  {
    id: 2,
    slug: "patta-transfer",
    title: "Patta Transfer",

    shortDescription:
      "Professional assistance for Patta name transfer and mutation process.",

    description:
      "Our experts guide you through Patta transfer, document preparation and submission to the concerned authorities.",

    icon: FileText,

    featured: true,

    documents: [
      "Sale Deed",
      "Patta Copy",
      "Identity Proof",
      "Address Proof",
    ],
  },

  {
    id: 3,
    slug: "encumbrance-certificate",
    title: "Encumbrance Certificate",

    shortDescription:
      "EC application and verification assistance.",

    description:
      "Obtain Encumbrance Certificates with proper verification and documentation support.",

    icon: FileSearch,

    featured: true,

    documents: [
      "Survey Number",
      "Property Details",
      "Owner Information",
    ],
  },

  {
    id: 4,
    slug: "legal-documentation",
    title: "Legal Documentation",

    shortDescription:
      "Preparation of legal agreements and supporting documents.",

    description:
      "Professional drafting and verification of legal documents for property and related matters.",

    icon: Scale,

    featured: true,

    documents: [
      "Identity Proof",
      "Property Documents",
      "Supporting Records",
    ],
  },

  {
    id: 5,
    slug: "bank-loan-documentation",
    title: "Bank Loan Documentation",

    shortDescription:
      "Documentation support for housing and property loans.",

    description:
      "We prepare and verify documents required by financial institutions for loan processing.",

    icon: Landmark,

    featured: true,

    documents: [
      "Income Proof",
      "Property Documents",
      "Identity Proof",
      "Bank Statements",
    ],
  },

  {
    id: 6,
    slug: "government-services",
    title: "Government Services",

    shortDescription:
      "Assistance for various government documentation services.",

    description:
      "Professional consultancy for documentation and applications across multiple government departments.",

    icon: Briefcase,

    featured: true,

    documents: [
      "Identity Proof",
      "Address Proof",
      "Application Forms",
    ],
  },
] as const;
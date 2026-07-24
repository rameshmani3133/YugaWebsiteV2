export interface Service {
  id: number;
  slug: string;

  title: string;

  shortDescription: string;

  description: string;

  icon: string;

  heroImage: string;

  featured: boolean;

  benefits: string[];

  requiredDocuments: string[];

  process: string[];

  faqs: {
    question: string;
    answer: string;
  }[];

  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}
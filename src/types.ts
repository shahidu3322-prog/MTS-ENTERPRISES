export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  badge?: string;
  keyFeatures: string[];
  specifications: { label: string; value: string }[];
  idealFor: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'jcb' | 'dumper' | 'bolero' | 'debris' | 'cleaning' | 'transport';
  categoryLabel: string;
  image: string;
  description: string;
  location?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  service: string;
  location: string;
  message: string;
  urgency: 'immediate' | 'within_24h' | 'this_week' | 'planning';
}

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'classes'
  | 'training'
  | 'reviews'
  | 'faq'
  | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  serviceInterest?: string;
  message?: string;
}

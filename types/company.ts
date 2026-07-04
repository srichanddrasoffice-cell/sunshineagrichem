export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  socialLinks: Array<{ label: string; href: string }>;
}

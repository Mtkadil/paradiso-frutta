export type CategoryType = 'tutti' | 'frutta' | 'verdura' | 'frutta-stagione' | 'verdura-stagione';

export interface ProductItem {
  id: string;
  name: string;
  category: 'frutta' | 'verdura';
  isSeasonal: boolean;
  seasonName?: string;
  description: string;
  origin: string;
  imageUrl: string;
  tag?: string;
}

export interface MarketStop {
  id: string;
  day: string;
  city: string;
  location: string;
  hours: string;
  isConfirmed: boolean;
  notes?: string;
}

export interface BusinessConfig {
  name: string;
  subtitle: string;
  city: string;
  region: string;
  province: string;
  addressPlaceholder: string;
  googleMapsUrl: string;
  phonePlaceholder: string;
  whatsappPlaceholder: string;
  instagramPlaceholder: string;
  facebookPlaceholder: string;
  openingHoursPlaceholder: {
    days: string;
    morning: string;
    afternoon: string;
    closed: string;
  };
}

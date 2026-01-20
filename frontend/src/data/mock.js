// Mock data for ARVON website

export const categories = [
  {
    id: '1',
    name: 'Sportswear',
    description: 'High-performance athletic apparel',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
  },
  {
    id: '2',
    name: 'Casual Wear',
    description: 'Comfortable everyday clothing',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800',
  },
  {
    id: '3',
    name: 'Custom Apparel',
    description: 'Tailored solutions for your brand',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
  },
];

export const products = [
  {
    id: '1',
    name: 'Performance Track Jacket',
    description: 'Lightweight, breathable track jacket with moisture-wicking technology',
    category: 'Sportswear',
    categoryId: '1',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600'],
    featured: true,
    keywords: 'jacket, athletic, performance',
  },
  {
    id: '2',
    name: 'Pro Training Shorts',
    description: 'Flexible shorts designed for intense workouts and training sessions',
    category: 'Sportswear',
    categoryId: '1',
    images: ['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600'],
    featured: true,
    keywords: 'shorts, training, athletic',
  },
  {
    id: '3',
    name: 'Cotton Crew Neck Tee',
    description: 'Premium cotton t-shirt perfect for everyday comfort',
    category: 'Casual Wear',
    categoryId: '2',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600'],
    featured: false,
    keywords: 'tshirt, casual, cotton',
  },
  {
    id: '4',
    name: 'Relaxed Fit Hoodie',
    description: 'Cozy hoodie with modern fit and premium fabric',
    category: 'Casual Wear',
    categoryId: '2',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600'],
    featured: true,
    keywords: 'hoodie, comfortable, casual',
  },
  {
    id: '5',
    name: 'Custom Team Jersey',
    description: 'Fully customizable jerseys for teams and organizations',
    category: 'Custom Apparel',
    categoryId: '3',
    images: ['https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600'],
    featured: false,
    keywords: 'custom, jersey, team',
  },
  {
    id: '6',
    name: 'Branded Corporate Polo',
    description: 'Professional polo shirts with custom branding options',
    category: 'Custom Apparel',
    categoryId: '3',
    images: ['https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600'],
    featured: false,
    keywords: 'polo, corporate, branded',
  },
];

export const galleryImages = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800',
    alt: 'Manufacturing facility',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea9c6c8c?w=800',
    alt: 'Product showcase',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=800',
    alt: 'Apparel collection',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800',
    alt: 'Design process',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800',
    alt: 'Quality materials',
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    alt: 'Retail display',
  },
];

export const heroSlides = products.filter(p => p.featured);

export const aboutContent = {
  title: 'About ARVON',
  subtitle: 'Premium Apparel Manufacturing Since 2020',
  description: 'ARVON is a leading apparel manufacturer specializing in high-quality sportswear, casual wear, and custom branded clothing. With state-of-the-art facilities and a commitment to excellence, we deliver premium products that meet the highest standards of quality and design.',
  values: [
    {
      title: 'Quality First',
      description: 'We use only premium materials and rigorous quality control',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored apparel solutions for brands and organizations',
    },
    {
      title: 'Sustainable',
      description: 'Environmentally responsible manufacturing practices',
    },
  ],
};

export const manufacturingContent = {
  title: 'Manufacturing & Capabilities',
  description: 'Our state-of-the-art facility is equipped with the latest technology to produce high-quality apparel at scale.',
  capabilities: [
    {
      title: 'Large-Scale Production',
      description: 'Capacity to handle orders from 100 to 100,000+ units',
      icon: 'factory',
    },
    {
      title: 'Custom Design',
      description: 'In-house design team for custom patterns and branding',
      icon: 'palette',
    },
    {
      title: 'Quality Assurance',
      description: 'Multi-stage quality control ensures perfect products',
      icon: 'shield-check',
    },
    {
      title: 'Fast Turnaround',
      description: 'Efficient processes for quick delivery without compromising quality',
      icon: 'clock',
    },
  ],
};

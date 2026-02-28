import { Item } from '../types';

const mockLostItems: Item[] = [
  {
    id: '1',
    title: 'Silver AirPods Pro',
    description: 'Lost in the library on Monday afternoon. Still has the charging case.',
    category: 'Electronics',
    location: 'Central Library - 3rd Floor',
    date: '2026-02-24',
    contactName: 'Alex Johnson',
    contactEmail: 'alex.j@university.edu',
    contactPhone: '+1-555-0101',
    status: 'active',
    type: 'lost',
  },
  {
    id: '2',
    title: 'Blue Backpack',
    description: 'College backpack with laptop inside. Very important documents.',
    category: 'Bags',
    location: 'Science Building Cafeteria',
    date: '2026-02-23',
    contactName: 'Jordan Smith',
    contactEmail: 'jordan.s@university.edu',
    contactPhone: '+1-555-0102',
    status: 'active',
    type: 'lost',
  },
  {
    id: '3',
    title: 'Black Winter Jacket',
    description: 'Thick black parka, lost after sports event.',
    category: 'Clothing',
    location: 'Athletic Center - Gym 2',
    date: '2026-02-22',
    contactName: 'Casey Lee',
    contactEmail: 'casey.lee@university.edu',
    contactPhone: '+1-555-0103',
    status: 'resolved',
    type: 'lost',
  },
];

const mockFoundItems: Item[] = [
  {
    id: '4',
    title: 'Red Water Bottle',
    description: 'Found a YETI branded water bottle near the quad. Has initials "MB" on it.',
    category: 'Accessories',
    location: 'Central Quad - Near Fountain',
    date: '2026-02-26',
    contactName: 'Morgan Brown',
    contactEmail: 'morgan.b@university.edu',
    contactPhone: '+1-555-0201',
    status: 'active',
    type: 'found',
  },
  {
    id: '5',
    title: 'Student ID Card',
    description: 'Found an ID card in the student center. Name is visible but kept for safety.',
    category: 'Documents',
    location: 'Student Center - Main Hall',
    date: '2026-02-25',
    contactName: 'Riley Davis',
    contactEmail: 'riley.d@university.edu',
    contactPhone: '+1-555-0202',
    status: 'active',
    type: 'found',
  },
  {
    id: '6',
    title: 'Gold Ring',
    description: 'Beautiful gold ring found in dorm common area. Appears to be valuable.',
    category: 'Jewelry',
    location: 'East Dorm - Common Room',
    date: '2026-02-24',
    contactName: 'Taylor Martinez',
    contactEmail: 'taylor.m@university.edu',
    contactPhone: '+1-555-0203',
    status: 'active',
    type: 'found',
  },
];

export const getMockItems = (type: 'lost' | 'found'): Item[] => {
  return type === 'lost' ? mockLostItems : mockFoundItems;
};

export const getMockItemById = (id: string): Item | undefined => {
  return [...mockLostItems, ...mockFoundItems].find(item => item.id === id);
};

export const searchItems = (items: Item[], query: string): Item[] => {
  const lowerQuery = query.toLowerCase();
  return items.filter(
    item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.location.toLowerCase().includes(lowerQuery)
  );
};

export const filterByCategory = (items: Item[], category: string): Item[] => {
  if (category === 'All') return items;
  return items.filter(item => item.category === category);
};

export const filterByStatus = (items: Item[], status: 'active' | 'resolved'): Item[] => {
  return items.filter(item => item.status === status);
};

export const CATEGORIES = ['All', 'Electronics', 'Bags', 'Clothing', 'Accessories', 'Documents', 'Jewelry', 'Other'];

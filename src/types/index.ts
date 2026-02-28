export interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  image?: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  status: 'active' | 'resolved';
  type: 'lost' | 'found';
}

export type RootStackParamList = {
  MainTabs: undefined;
  ItemDetail: { item: Item };
};

export type MainTabsParamList = {
  LostItems: undefined;
  FoundItems: undefined;
  Post: undefined;
  Profile: undefined;
};

export interface RootStackParamList {
  MainTabs: undefined;
  ItemDetail: { item: Item };
  PostItem: { type: 'lost' | 'found' };
}

export interface MainTabsParamList {
  LostItems: undefined;
  FoundItems: undefined;
  Post: undefined;
  Profile: undefined;
}

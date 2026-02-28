/**
 * Core data types for Campus Lost & Found App
 */

/**
 * Item interface representing a lost or found item
 */
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
  status: "active" | "resolved";
  type: "lost" | "found";
}

/**
 * Navigation params for the root stack navigator
 */
export type RootStackParamList = {
  MainTabs: undefined;
  ItemDetail: { item: Item };
};

/**
 * Navigation params for the main tab navigator
 */
export type MainTabsParamList = {
  LostItems: undefined;
  FoundItems: undefined;
  Post: undefined;
  Profile: undefined;
};

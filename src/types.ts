export type PoemCategory = 'eve' | 'day' | 'nostalgia' | 'folk' | 'court' | 'lantern';

export interface Poem {
  id: string;
  title: string;
  dynasty: 'Tang' | 'Song';
  author: string;
  content: string; // The full poem text
  translation?: string;
  translationCn?: string; // Modern Chinese translation
  themes: string[]; // e.g., "Nostalgia", "Celebration", "Aging"
  category: PoemCategory;
}

export interface AnalysisSection {
  id: string;
  title: string;
  content: string;
  icon?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum ViewState {
  HOME = 'HOME',
  GALLERY = 'GALLERY',
  CHAT = 'CHAT'
}

export type Language = 'en' | 'zh';
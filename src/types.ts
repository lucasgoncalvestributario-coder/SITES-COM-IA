export interface CourseModule {
  id: number;
  number: string;
  title: string;
  description: string;
  iconName: string;
  lessons: string[];
}

export interface BonusItem {
  id: number;
  badge: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface AudienceItem {
  id: number;
  emoji: string;
  title: string;
  description?: string;
}

export interface CourseFeature {
  id: number;
  emoji: string;
  title: string;
  description: string;
}

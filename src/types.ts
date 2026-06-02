/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TimelineStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  details: string;
  duration: string;
  iconName: string; // references lucide-react icons dynamically
}

export interface SpaService {
  id: string;
  name: string;
  priceSmall: number;   // Pequeño (hasta 10kg)
  priceMedium: number;  // Mediano (11-25kg)
  priceLarge: number;   // Grande (más de 25kg)
  highlightText: string;
  description: string;
  benefits: string[];
  isPopular: boolean;
  timeInMinutes: number;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  breed: string;
  description: string;
  imagePath: string;
  accentColor: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  dogName: string;
  breed: string;
  avatarUrl: string;
  date: string;
  rating: number;
  message: string;
  replyText?: string;
  localTime: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

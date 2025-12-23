import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

// INTERFACE FOR MOTION

export interface ScrollRevealProps {
  children: ReactNode;
  variant: 'container' | 'fadeInUp' | 'fadeInLeft';
  amount?: number;
  className?: string;
}

// INTERFACE FOR HEADER

export interface NavItemsProps {
  closeMenu: (() => void) | null;
}

// INTERFACE FOR CAROUSEL 

export interface Technology {
  id: number;
  img: string | StaticImageData;
  name: string;
}

// INTERFACE FOR BREVO

export interface Params {
  subject: string;
  to: { email: string; name: string }[];
  htmlContent: string;
  sender: { name: string; email: string };
}

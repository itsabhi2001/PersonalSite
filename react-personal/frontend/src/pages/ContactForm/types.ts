// src/pages/Contact/types.ts
export type Purpose = "Software Dev" | "Engineering" | "Dogsitting";

export type Step1 = {
  name: string;
  email: string;
  purpose: Purpose | "";
};

export type Step2Software = {
  summary: string;
  budget?: string;
  timeline?: string;
};

export type Step2Engineering = {
  topic: string;
  details: string;
};

export type Step2Dogsitting = {
  dates: string;
  dogSize: "Small" | "Medium" | "Large" | "";
  notes?: string;
};

export type Step2 = Step2Software | Step2Engineering | Step2Dogsitting;

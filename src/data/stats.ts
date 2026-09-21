// Performance stats shown in the About section on the home page.
// Client-supplied figures carried over from the old otecltd.com home page.
// Do not change the values or add new stats without confirmation from Alfie.
export interface Stat {
  label: string;
  value: number; // 0 to 100, shown as a percentage
  description?: string; // one-line note on what the figure measures, once the client confirms
}

export const stats: Stat[] = [
  { label: 'Response', value: 99 },
  { label: 'Callout', value: 98 },
  { label: 'Fixed', value: 99 },
  { label: 'Satisfaction', value: 100 },
];

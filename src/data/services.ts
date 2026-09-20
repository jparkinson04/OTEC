export type IconName =
  | 'bolt'
  | 'wrench'
  | 'bell'
  | 'camera'
  | 'shield'
  | 'bulb'
  | 'network'
  | 'sun'
  | 'lock'
  | 'arrow';

export interface Service {
  title: string;
  icon: IconName;
  summary: string;
}

// Condensed from the copy on the current otecltd.com site.
export const services: Service[] = [
  {
    title: 'Electrical Installation',
    icon: 'bolt',
    summary:
      'From extra sockets at home to commercial and industrial installs, with inspection, testing and certification covered.',
  },
  {
    title: 'Electrical Maintenance',
    icon: 'wrench',
    summary:
      'Landlord surveys, PAT testing and preventative maintenance schemes that keep premises safe for employees and tenants.',
  },
  {
    title: 'Fire Alarms',
    icon: 'bell',
    summary:
      'Fire alarm systems designed, installed and tested for regulatory compliance, protecting your people and assets.',
  },
  {
    title: 'CCTV',
    icon: 'camera',
    summary:
      'From single-camera domestic setups to multi-camera systems with digital recording and remote monitoring.',
  },
  {
    title: 'Intruder Alarms',
    icon: 'shield',
    summary:
      'Budget systems through to complex bespoke alarms, designed with you to your exact requirements.',
  },
  {
    title: 'Emergency Lighting',
    icon: 'bulb',
    summary:
      'Design, installation and testing of reliable emergency lighting for power outages and emergencies.',
  },
  {
    title: 'Network Installation',
    icon: 'network',
    summary:
      'Structured network cabling, designed, installed and tested for efficient, reliable infrastructure.',
  },
  {
    title: 'External Lighting',
    icon: 'sun',
    summary:
      'Effective, reliable outdoor lighting that improves safety and security around your premises.',
  },
  {
    title: 'Door Entry Systems',
    icon: 'lock',
    summary: 'Secure, reliable access control, from design through to installation and testing.',
  },
];

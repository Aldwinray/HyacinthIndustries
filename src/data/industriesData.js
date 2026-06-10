import OfficeImg from '../assets/img/industries/office.webp';
import MarketingImg from '../assets/img/industries/marketing.webp';
import HealthcareImg from '../assets/img/industries/healthcare.webp';
import AnimationImg from '../assets/img/industries/animation.webp';
import CodingImg from '../assets/img/industries/coding.webp';
import LogisticsImg from '../assets/img/industries/logistics.webp';
import { 
  Truck, 
  Database, 
  Headset, 
  Calendar, 
  Files, 
  Calculator,
  Package, 
  ClockClockwise,
  MapPin,
  Globe,
  Users,
  PhoneCall,
  FirstAidKit, 
  Code, 
  Ruler,
  MagnifyingGlass,
  Envelope,
  ClipboardText,
  Stethoscope,
  Hospital,
  Syringe,
  Brain,
  Desktop,
  Robot,
  TrendUp
} from "@phosphor-icons/react";
import { Coins, Computer, DatabaseBackup, DatabaseBackupIcon, HeadsetIcon, LaptopIcon, LocateIcon, LucideDatabase, MapPinnedIcon, PackageCheck, Phone, User } from 'lucide-react';
import { Coin, MonitorPlay } from 'phosphor-react';

export const industriesData = {
  'Logistics': [
    {
      image: LogisticsImg,
      icon: Computer,
      iconWeight: "duotone",
      title: 'Data Entry',
      description: 'Meticulous accuracy and efficiency at every step',
      tag: 'Explore Now',
      link: '/logistics'
    },
    
    {
      image: LogisticsImg,
      icon: MapPinnedIcon,
      iconWeight: "duotone",
      title: 'Track and Trace',
      description: 'Real-time visibility for all your shipments',
      tag: 'Explore Now',
      link: '/logistics'
    },
    {
      image: LogisticsImg,
      icon: TrendUp,
      iconWeight: "duotone",
      title: 'Carrier Sales',
      description: 'Effective sales strategies to increase your carrier\'s revenue',
      tag: 'Explore Now',
      link: '/logistics'
    },
    {
      image: LogisticsImg,
      icon: PackageCheck,
      iconWeight: "duotone",
      title: 'Load Planning',
      description: 'Planning and optimization of loads for efficient transportation',
      tag: 'Explore Now',
      link: '/logistics'
    },
    {
      image: LogisticsImg,
      icon: Phone,
      iconWeight: "duotone",
      title: 'Customer Support',
      description: 'Prompt, professional issue resolution for enhanced satisfaction',
      tag: 'Explore Now',
      link: '/logistics'
    },
    {
      image: LogisticsImg,
      icon: HeadsetIcon,
      iconWeight: "duotone",
      title: 'Afterhours Support',
      description: 'Support during non-work hours, including evenings and weekends',
      tag: 'Explore Now',
      link: '/logistics'
    },
    {
      image: LogisticsImg,
      icon: User,
      iconWeight: "duotone",
      title: 'Logistics Coordinator',
      description: 'Seamless orchestration from origin to destination',
      tag: 'Explore Now',
      link: '/logistics'
    },
    {
      image: LogisticsImg,
      icon: DatabaseBackupIcon,
      iconWeight: "duotone",
      title: 'Data Analyst',
      description: 'Analysis of data for insights, trends, and decisions',
      tag: 'Explore Now',
      link: '/logistics'
    },
    {
      image: LogisticsImg,
      icon: Coins,
      iconWeight: "duotone",
      title: 'Account Management',
      description: 'Dedicated expertise for tailored solutions',
      tag: 'Explore Now',
      link: '/logistics'
    },
  ],
  'Administrative Support': [
    {
      image: OfficeImg,
      icon: Database,
      iconWeight: "duotone",
      title: 'Data Management',
      description: 'Data Entry, Data Processing, and Database Management',
      tag: 'Explore Now',
      link: '/administrative-support'
    },
    {
      image: OfficeImg,
      icon: Headset,
      iconWeight: "duotone",
      title: 'Communication Support',
      description: 'Email Management, Call Handling, and Customer Support',
      tag: 'Explore Now',
      link: '/administrative-support'
    },
    {
      image: OfficeImg,
      icon: Calendar,
      iconWeight: "duotone",
      title: 'Scheduling and Coordination',
      description: 'Calendar Management, Meeting Arrangements, and Task Coordination',
      tag: 'Explore Now',
      link: '/administrative-support'
    },
    {
      image: OfficeImg,
      icon: Files,
      iconWeight: "duotone",
      title: 'Documentations and Reporting',
      description: 'Document Preparation, Record Keeping, and Transcription',
      tag: 'Explore Now',
      link: '/administrative-support'
    },
    {
      image: OfficeImg,
      icon: Calculator,
      iconWeight: "duotone",
      title: 'Accounting Support',
      description: 'Invoicing, Expense Tracking, and Payroll Support',
      tag: 'Explore Now',
      link: '/administrative-support'
    },
    {
      image: OfficeImg,
      icon: Users,
      iconWeight: "duotone",
      title: 'Human Resource Assistance',
      description: 'Recruitment Support, Employee Records Management',
      tag: 'Explore Now',
      link: '/administrative-support'
    },
    {
      image: OfficeImg,
      icon: ClipboardText,
      iconWeight: "duotone",
      title: 'Project and Task Management',
      description: 'Task Delegation, Project Coordination, Workflow Optimization',
      tag: 'Explore Now',
      link: '/administrative-support'
    },
    {
      image: OfficeImg,
      icon: MagnifyingGlass,
      iconWeight: "duotone",
      title: 'Research and Analysis',
      description: 'Market Research, Administrative Audits, and Data Analysis',
      tag: 'Explore Now',
      link: '/administrative-support'
    },
  ],
  'Medical Outsourcing': [
    {
      image: HealthcareImg,
      icon: Stethoscope,
      iconWeight: "duotone",
      title: 'Medical Billing',
      description: 'Comprehensive medical billing services and claims processing',
      tag: 'Explore Now',
      link: '/healthcare'
    },
    {
      image: HealthcareImg,
      icon: Hospital,
      iconWeight: "duotone",
      title: 'Healthcare Administration',
      description: 'Administrative support for healthcare facilities',
      tag: 'Explore Now',
      link: '/healthcare'
    },
    {
      image: HealthcareImg,
      icon: FirstAidKit,
      iconWeight: "duotone",
      title: 'Medical Records Management',
      description: 'Electronic health records management and organization',
      tag: 'Explore Now',
      link: '/healthcare'
    },
    {
      image: HealthcareImg,
      icon: Syringe,
      iconWeight: "duotone",
      title: 'Clinical Documentation',
      description: 'Accurate documentation of clinical procedures and findings',
      tag: 'Explore Now',
      link: '/healthcare'
    },
    {
      image: HealthcareImg,
      icon: Brain,
      iconWeight: "duotone",
      title: 'Medical Research Support',
      description: 'Assistance with medical research and data analysis',
      tag: 'Explore Now',
      link: '/healthcare'
    },
  ],
  'Marketing': [
    {
      image: MarketingImg,
      icon: MonitorPlay,
      iconWeight: "duotone",
      title: 'Multimedia',
      description: 'Creating visual content through video editing and graphic design.',
      tag: 'Explore Now',
      link: '/marketing'
    },
    {
      image: MarketingImg,
      icon: LaptopIcon,
      iconWeight: "duotone",
      title: 'Social Media Management',
      description: 'Handling a brand\'s presence across platforms like Instagram, Facebook, X, LinkedIn, and more.',
      tag: 'Explore Now',
      link: '/marketing'
    },
  ],
  'Web Design': [
    {
      image: CodingImg,
      icon: Code,
      iconWeight: "duotone",
      title: 'UI/UX Design',
      description: 'UI/UX design for websites and mobile apps',
      tag: 'Explore Now',
      link: '/web-design'
    },
    {
      image: CodingImg,
      icon: Desktop,
      iconWeight: "duotone",
      title: 'Custom Website Design',
      description: 'Custom website design for businesses and organizations',
      tag: 'Explore Now',
      link: '/web-design'
    },
    {
      image: CodingImg,
      icon: MagnifyingGlass,
      iconWeight: "duotone",
      title: 'SEO Management',
      description: 'Incorporate SEO strategies to improve website visibility',
      tag: 'Explore Now',
      link: '/web-design'
    },
    {
      image: CodingImg,
      icon: ClipboardText,
      iconWeight: "duotone",
      title: 'Website Redesign',
      description: 'Optimize existing and outdated websites for improved user experience', 
      tag: 'Explore Now',
      link: '/web-design'
    },
  ],
  '3D Animation': [
    {
      image: AnimationImg,
      icon: Globe,
      iconWeight: "duotone",
      title: 'Product Visualization',
      description: 'Create 3D models and animations for product visualization and marketing',
      tag: 'Explore Now',
      link: '/3d-animation'
    },
    {
      image: AnimationImg,
      icon: Desktop,
      iconWeight: "duotone",
      title: 'Product Animation',
      description: 'Showcase your products in stunning 3D animations',
      tag: 'Explore Now',
      link: '/3d-animation'
    },
  ],
  
  'General Services': [
    {
      image: OfficeImg,
      icon: Database,
      iconWeight: "duotone",
      title: 'Administrative Support',
      description: 'Office management, document processing, data entry, etc.',
      tag: 'Explore Now',
      link: '/general-services'
    },
    {
      image: OfficeImg,
      icon: ClipboardText,
      iconWeight: "duotone",
      title: 'Business Process Support',
      description: 'Process optimization, quality control, and workflow management',
      tag: 'Explore Now',
      link: '/general-services'
    },
    {
      image: OfficeImg,
      icon: Robot,
      iconWeight: "duotone",
      title: 'Technical Support',
      description: 'IT infrastructure management, help desk services, etc.',
      tag: 'Explore Now',
      link: '/general-services'
    }
  ],
};

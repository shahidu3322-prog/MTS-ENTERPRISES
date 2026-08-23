import { ServiceItem, GalleryItem, WhyChooseUsItem, HowItWorksStep } from '../types';

export const CONTACT_INFO = {
  companyName: 'MTS Enterprises',
  tagline: 'Reliable Equipment & Cleaning Services You Can Trust',
  phones: [
    { label: 'Primary Line', number: '9920693090', formatted: '+91 99206 93090' },
    { label: 'Secondary Line', number: '8879153549', formatted: '+91 88791 53549' },
  ],
  whatsapps: [
    { label: 'WhatsApp Support 1', number: '8879153549', formatted: '+91 88791 53549' },
    { label: 'WhatsApp Support 2', number: '9920693090', formatted: '+91 99206 93090' },
  ],
  email: 'mehboob9920@gmail.com',
  locationUrl: 'https://maps.app.goo.gl/KoE2VHvRpbs42TzT6',
  address: 'Mumbai & Surrounding Regions, Maharashtra, India',
  hours: 'Available 24/7 for On-Site Equipment Dispatch & Emergency Cleans',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'jcb-hire',
    title: 'JCB on Hire',
    shortDescription: 'Reliable JCB machines available for excavation, construction, land clearing, digging, loading, and project requirements.',
    fullDescription: 'Heavy-duty JCB backhoe loaders and excavators with certified, experienced operators. Perfect for civil engineering, foundational trenching, demolition, land leveling, site preparation, and rapid bulk material handling.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    badge: 'Heavy Machinery',
    keyFeatures: [
      'Experienced & Licensed Machine Operators',
      'Versatile Heavy Excavation & Trenching',
      'Rock Breaking & Demolition Attachments Available',
      'Prompt On-Site Dispatch & Daily/Monthly Shifts'
    ],
    specifications: [
      { label: 'Machinery Model', value: 'JCB 3DX / 4DX Heavy Duty' },
      { label: 'Bucket Capacity', value: '0.24m³ to 1.1m³' },
      { label: 'Max Dig Depth', value: '4.77 meters' },
      { label: 'Operator Included', value: 'Yes (Highly Experienced)' },
      { label: 'Availability', value: 'Immediate / Scheduled' }
    ],
    idealFor: [
      'Foundation & Basement Digging',
      'Trenching for Cables & Pipelines',
      'Land Leveling & Plot Grading',
      'Road Construction & Civil Works'
    ]
  },
  {
    id: 'dumper-hire',
    title: 'Dumper on Hire',
    shortDescription: 'Professional dumper vehicles available for transporting construction materials, soil, debris, and other heavy loads.',
    fullDescription: 'High-capacity hydraulic tippers and dumpers engineered to haul aggregate, gravel, loose earth, sand, and heavy construction debris over short and long distances with maximum efficiency.',
    icon: 'Truck',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    badge: 'Bulk Hauling',
    keyFeatures: [
      'High-Capacity Hydraulic Tipping Systems',
      'Heavy-Duty Multi-Axle Vehicles',
      'Rapid Site-to-Dumping Ground Clearance',
      'Trained Commercial Drivers with Route Expertise'
    ],
    specifications: [
      { label: 'Vehicle Type', value: 'Hydraulic Tippers & Heavy Dumpers' },
      { label: 'Payload Capacity', value: 'Heavy Payload (Multi-ton)' },
      { label: 'Tipping Mechanism', value: 'High-Angle Hydraulic Lift' },
      { label: 'Driver Included', value: 'Yes (Commercial Licensed)' },
      { label: 'Service Coverage', value: 'Local & Regional Sites' }
    ],
    idealFor: [
      'Excavated Earth & Soil Removal',
      'Aggregate & Sand Transportation',
      'Demolition Waste Haulage',
      'Bulk Material Relocation'
    ]
  },
  {
    id: 'bolero-pickup-hire',
    title: 'Bolero Pickup on Hire',
    shortDescription: 'Affordable and reliable Bolero Pickup vehicles for material transportation, delivery, shifting, and business requirements.',
    fullDescription: 'Agile, robust Mahindra Bolero pickup trucks ideal for quick intra-city transfers, construction hardware transportation, machinery spare deliveries, and localized shifting where heavy trucks cannot easily navigate.',
    icon: 'Car',
    image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=1200&q=80',
    badge: 'Rapid Logistics',
    keyFeatures: [
      'Navigates Narrow Urban Roads & Busy Sites',
      'Strong Payload Bed for Building Materials',
      'Fast Turnaround for Urgent Deliveries',
      'Flexible Short-Trip & Full-Day Bookings'
    ],
    specifications: [
      { label: 'Vehicle Model', value: 'Mahindra Bolero Maxi Truck / Extra Long' },
      { label: 'Loading Bed', value: 'Open Flatbed with Tie-Down Points' },
      { label: 'Maneuverability', value: 'Excellent for City & Narrow Lanes' },
      { label: 'Driver Included', value: 'Yes (Punctual & Experienced)' },
      { label: 'Usage', value: 'Shift-based / Multi-drop' }
    ],
    idealFor: [
      'Cement Bags, Bricks & Tile Delivery',
      'Scaffolding & Pipe Transportation',
      'Site Equipment & Tool Relocation',
      'Hardware & Fitting Distribution'
    ]
  },
  {
    id: 'debris-cleaning',
    title: 'Debris & Rubbish Cleaning',
    shortDescription: 'Quick and efficient debris, waste, rubbish, and unwanted material removal services.',
    fullDescription: 'Complete demolition rubble and construction waste clearance. We collect, load, and dispose of concrete chunks, bricks, broken tiles, plaster, scrap metal, and municipal renovation waste according to environmental norms.',
    icon: 'Trash2',
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80',
    badge: 'Site Clearance',
    keyFeatures: [
      'End-to-End Waste Loading & Safe Disposal',
      'Dedicated Labor & Mechanical Loader Options',
      'Government Approved Dump Site Disposal',
      'Complete Broom-Clean Finish Upon Request'
    ],
    specifications: [
      { label: 'Waste Types', value: 'Concrete, Brick, Plaster, Dry Rubble, Scrap' },
      { label: 'Crew Strength', value: 'Scalable Team as per Site Volume' },
      { label: 'Equipment Used', value: 'Loaders, Dumpers, Manual Labor' },
      { label: 'Compliance', value: 'Safe & Legal Dumping Procedures' },
      { label: 'Turnaround', value: 'Same-Day Clearance Available' }
    ],
    idealFor: [
      'Renovation & Remodeling Waste',
      'Demolition Rubble Clearing',
      'Commercial Fit-Out Disposal',
      'Residential Plot Debris Removal'
    ]
  },
  {
    id: 'site-cleaning',
    title: 'Construction Site Cleaning',
    shortDescription: 'Complete cleaning solutions to help keep construction sites clean, organized, and ready for work.',
    fullDescription: 'Comprehensive site maintenance and deep cleaning for ongoing projects, handover phases, and post-construction audits. We remove dust, excess mortar, hazardous residue, and clutter to maintain peak safety standards.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    badge: 'Safety & Handover',
    keyFeatures: [
      'Post-Construction Handover Deep Cleaning',
      'Hazard & Scrap Material Elimination',
      'Floor Scrubbing & Surface Dusting',
      'Enhances Site Safety & Worker Efficiency'
    ],
    specifications: [
      { label: 'Service Scope', value: 'Pre-Handover, Post-Civil, Ongoing Maintenance' },
      { label: 'Cleaning Standards', value: 'Industrial Grade Heavy Clean' },
      { label: 'Safety Gear', value: 'Full PPE Equipped Cleaning Staff' },
      { label: 'Area Capacity', value: 'From Small Villas to Mega High-Rises' },
      { label: 'Inspection', value: 'Supervisor Quality Verification' }
    ],
    idealFor: [
      'Pre-Handover Building Inspection',
      'Commercial Complex Openings',
      'Ongoing Builder Site Maintenance',
      'Architect & Client Site Walkthroughs'
    ]
  },
  {
    id: 'material-transportation',
    title: 'Material Transportation & Removal',
    shortDescription: 'Reliable transportation and removal services for construction materials, debris, and other loads.',
    fullDescription: 'Dedicated logistics network for shifting heavy raw materials, structural steel, aggregates, specialized machinery parts, and bulk supplies directly to your active project site right on schedule.',
    icon: 'Boxes',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    badge: 'Logistics Network',
    keyFeatures: [
      'Secure Fleet for Heavy & Fragile Building Supplies',
      'Timely Delivery to Prevent Project Downtime',
      'Multi-Point Pickup & Drop-Off Routing',
      'Experienced Freight Handling Crew'
    ],
    specifications: [
      { label: 'Material Types', value: 'Sand, Aggregate, Steel, Tiles, Equipment' },
      { label: 'Fleet Options', value: 'Bolero Pickups, Tippers, Heavy Trucks' },
      { label: 'Tracking', value: 'Active Dispatch & Driver Direct Contact' },
      { label: 'Capacity', value: 'Single Load to Multi-Vehicle Convoys' },
      { label: 'Area', value: 'Metro & Sub-Urban Industrial Zones' }
    ],
    idealFor: [
      'Raw Material Site Stocking',
      'Inter-Site Machinery & Resource Transfers',
      'Urgent Supply Chain Replenishment',
      'Bulky Construction Component Delivery'
    ]
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: '1',
    title: 'Reliable Service',
    description: 'Committed to steady, uncompromised performance with zero unscheduled downtime.',
    iconName: 'ShieldCheck'
  },
  {
    id: '2',
    title: 'Well-Maintained Equipment',
    description: 'Our machinery undergoes rigorous daily multi-point inspection to ensure peak on-site efficiency.',
    iconName: 'Wrench'
  },
  {
    id: '3',
    title: 'Experienced Team',
    description: 'Vetted, licensed operators and seasoned logistics supervisors handling all site complexities.',
    iconName: 'Users'
  },
  {
    id: '4',
    title: 'Quick Availability',
    description: 'Rapid response fleet ready for immediate dispatch across key industrial and urban sectors.',
    iconName: 'Zap'
  },
  {
    id: '5',
    title: 'On-Time Service',
    description: 'We respect your strict project deadlines and ensure seamless coordination on every shift.',
    iconName: 'Clock'
  },
  {
    id: '6',
    title: 'Professional Support',
    description: 'Dedicated phone and WhatsApp support available around the clock to address any site needs.',
    iconName: 'Headphones'
  },
  {
    id: '7',
    title: 'Safety Compliant',
    description: 'Strict adherence to construction safety protocols, certified equipment, and PPE guidelines.',
    iconName: 'Award'
  },
  {
    id: '8',
    title: 'Customer Satisfaction',
    description: 'Trusted by leading contractors, builders, architects, and property owners across the region.',
    iconName: 'Smile'
  }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: '01',
    title: 'Contact Us',
    description: 'Call our direct lines or tap WhatsApp to share your machinery or cleaning requirements.',
    iconName: 'PhoneCall'
  },
  {
    stepNumber: '02',
    title: 'Discuss Requirements',
    description: 'Our specialists understand your site details, timeline, and allocate the exact machinery.',
    iconName: 'ClipboardList'
  },
  {
    stepNumber: '03',
    title: 'Get the Service',
    description: 'Our certified operators and heavy equipment arrive on-site promptly to execute your project.',
    iconName: 'Truck'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Heavy Foundation Excavation',
    category: 'jcb',
    categoryLabel: 'JCB on Hire',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    description: 'Deep basement digging and earth excavation using heavy duty backhoe machinery.',
    location: 'Commercial Project Site'
  },
  {
    id: 'gal-2',
    title: 'High-Capacity Earth Hauling',
    category: 'dumper',
    categoryLabel: 'Dumper on Hire',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    description: 'Multi-axle hydraulic dumper moving excavated soil and construction materials.',
    location: 'Infrastructure Highway Project'
  },
  {
    id: 'gal-3',
    title: 'Rapid Material Delivery',
    category: 'bolero',
    categoryLabel: 'Bolero Pickup',
    image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=1200&q=80',
    description: 'Agile Bolero Pickup delivering cement, fittings, and site hardware.',
    location: 'Urban Residential Complex'
  },
  {
    id: 'gal-4',
    title: 'Demolition Debris Clearance',
    category: 'debris',
    categoryLabel: 'Debris Removal',
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80',
    description: 'Systematic loading and compliant disposal of concrete rubble and scrap.',
    location: 'Renovation Site'
  },
  {
    id: 'gal-5',
    title: 'Post-Construction Handover Cleaning',
    category: 'cleaning',
    categoryLabel: 'Site Cleaning',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    description: 'Complete site sanitation, debris sweeping, and hazard removal before client handover.',
    location: 'Corporate High-Rise'
  },
  {
    id: 'gal-6',
    title: 'Heavy Structural Transport',
    category: 'transport',
    categoryLabel: 'Material Transport',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    description: 'Logistics coordination for bulk building supplies and machinery components.',
    location: 'Industrial Plant'
  },
  {
    id: 'gal-7',
    title: 'Precision Trenching & Digging',
    category: 'jcb',
    categoryLabel: 'JCB on Hire',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    description: 'Narrow trenching for underground storm water drainage and utility lines.',
    location: 'Township Development'
  },
  {
    id: 'gal-8',
    title: 'Site Waste Removal Operations',
    category: 'debris',
    categoryLabel: 'Debris Removal',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    description: 'Thorough rubbish cleanup and haul-away ensuring pristine site working conditions.',
    location: 'Multi-Storey Project'
  }
];

export const TRUST_STATS = [
  { value: '100%', label: 'Operated Fleets', sub: 'Certified Operators' },
  { value: '24/7', label: 'Availability', sub: 'Fast Emergency Response' },
  { value: '1000+', label: 'Projects Serviced', sub: 'Builders & Contractors' },
  { value: 'On-Time', label: 'Dispatch Record', sub: 'Zero Project Delays' },
];

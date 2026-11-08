import {
  Award,
  BookOpen,
  Calendar,
  Compass,
  Cpu,
  FolderGit2,
  Globe,
  GraduationCap,
  Layers,
  Lightbulb,
  type LucideIcon,
  Rocket,
  School,
  Users,
} from "lucide-react";

export interface CampusChapter {
  id: number;
  name: string;
  shortName: string;
  city: string;
  country: string;
  website: string;
  lead: string;
  members: number;
  status: string;
  isFounding: boolean;
  tags: string[];
}

export interface FeatureCardItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface HowItWorksStepItem {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface TargetAudienceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const CAMPUS_CHAPTERS: CampusChapter[] = [
  {
    id: 1,
    name: "Albertian Institute of Science and Technology",
    shortName: "AISAT Chapter",
    city: "Kochi, Kerala",
    country: "India",
    website: "https://aisat.ac.in/",
    lead: "AISAT Student Team",
    members: 50,
    status: "Active Chapter",
    isFounding: true,
    tags: [
      "Hardware & IoT",
      "Software & Web",
      "Open Source",
      "Robotics",
      "Learning Together",
    ],
  },
];

export const WHY_START_CARDS: FeatureCardItem[] = [
  {
    icon: Cpu,
    title: "Build Real Projects",
    desc: "Build real hardware and software solutions that solve meaningful problems beyond the classroom.",
  },
  {
    icon: FolderGit2,
    title: "Open Source Contributions",
    desc: "Contribute to open-source projects, collaborate with developers worldwide, and build a portfolio that lasts.",
  },
  {
    icon: Calendar,
    title: "Workshops & Hackathons",
    desc: "Host workshops, hackathons, and hands-on build sessions that strengthen your campus community.",
  },
  {
    icon: Award,
    title: "Leadership Opportunities",
    desc: "Lead teams, organize events, and develop leadership that extends beyond university.",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    desc: "Transform ideas into research, prototypes, and engineering solutions with fellow builders.",
  },
  {
    icon: Rocket,
    title: "From Projects to Startups",
    desc: "Turn side projects into products, open-source initiatives, or startups with BuilderClan.",
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStepItem[] = [
  {
    step: "01",
    title: "Apply to Lead",
    desc: "Share your vision for bringing hands-on building, hardware labs, and open source to your campus.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Align on Vision",
    desc: "Connect with the BuilderClan team to outline your chapter goals and receive dedicated guidance.",
    icon: Users,
  },
  {
    step: "03",
    title: "Receive Chapter Kit",
    desc: "Get official branding, event decks, workshop templates, and dedicated community channels.",
    icon: Layers,
  },
  {
    step: "04",
    title: "Gather Your Builders",
    desc: "Recruit passionate engineering students, educators, and researchers to form your founding core team.",
    icon: GraduationCap,
  },
  {
    step: "05",
    title: "Host Hands-on Events",
    desc: "Run workshops, hackathons, technical talks, and collaborative build sessions on your campus.",
    icon: Calendar,
  },
  {
    step: "06",
    title: "Ship & Scale",
    desc: "Turn campus projects into open-source repositories, research papers, products, and startups.",
    icon: Rocket,
  },
];

export const TARGET_AUDIENCE: TargetAudienceItem[] = [
  {
    icon: GraduationCap,
    title: "Students",
    desc: "Move beyond textbook theory to build real hardware, software, AI, and open-source projects alongside mentors.",
  },
  {
    icon: BookOpen,
    title: "Educators & Faculty",
    desc: "Guide student innovators, bridge classroom learning with hands-on practice, and turn academic research into real impact.",
  },
  {
    icon: Layers,
    title: "Student Clubs",
    desc: "Partner with BuilderClan to supercharge your workshops, co-host hackathons, and connect your members to a global network.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Cells",
    desc: "Transform campus prototypes and research ideas into open-source initiatives, real-world tools, or startups.",
  },
  {
    icon: School,
    title: "Engineering Colleges",
    desc: "Establish an active builder culture that attracts curious minds, fosters collaboration, and elevates campus tech capability.",
  },
  {
    icon: Globe,
    title: "Universities",
    desc: "Connect your campus academic community directly with global developers, researchers, and technology ecosystems.",
  },
];

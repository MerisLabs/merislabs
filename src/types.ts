import { Project } from "./constants/offerings.1";

export interface offeringType {
  title: string;
  url: string;
  description: string;
  samples: string[];
  projects: Project[];
  clients: {
    name: string;
    image: string;
    description: string;
    website: string;
  }[];
}
[];

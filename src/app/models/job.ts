export interface Job{
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
    link?: string;
    saved?: boolean;
  }
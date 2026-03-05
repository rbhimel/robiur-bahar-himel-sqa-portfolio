
export interface Skill {
  name: string;
  category: 'Tools' | 'Testing' | 'Soft Skills';
  icon: string;
  level: number; // 0-100
  color: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  year: string;
  description: string;
  results: string[];
  status: 'PASSED' | 'FAILED' | 'PENDING';
  tags: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
  type: 'Work' | 'Education';
}

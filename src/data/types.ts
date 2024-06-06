export type ExperienceItem = {
  id: number;
  years: string;
  link: string;
  description: string;
  profession: string;
};

export type Case = {
  id: number;
  title: string;
  description: string;
  linkTitle: string;
  link: string;
  firstImg: string;
  secondImg: string;
};

export type TaskData = {
  id: number;
  taskHeader: string;
  taskDescription: string;
};

export type Fact = {
  id: number;
  title: string;
  description: string;
};

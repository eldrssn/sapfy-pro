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
  firstImgLink?: string;
  secondImgLink?: string;
};

export type TaskData = {
  id: number;
  title: string;
  body: string;
};

export type Fact = {
  id: number;
  title: string;
  description: string;
};

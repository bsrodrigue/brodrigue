export interface PortfolioProject {
  title: string;
  description: string;
  link: string;
  cover: string;
  stack?: string;
}

export interface Service {
  icon?:string;
  title: string;
  description: string;
  price?: string;
}

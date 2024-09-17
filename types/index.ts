import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

type Tag = {
  category: string;
  items: string[];
};

type LinkStatus = {
  link: string;
  active: boolean;
};

export type Project = {
  title: string;
  description: string;
  type: string;
  demo?: LinkStatus;
  repo?: LinkStatus;
  image: string;
  status: string;
  tags: Tag[];
  timeframe: string;
  visible: boolean;
};

export type Entry = {
  title: string;
  company: string;
  location: string;
  timeframe: string;
  description: string[];
};

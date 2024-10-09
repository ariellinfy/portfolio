import {
  SiC,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiHtml5,
  SiHuggingface,
  SiLatex,
  SiJavascript,
  SiMarkdown,
  SiMicrosoftsharepoint,
  SiMicrosoftexcel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPowerautomate,
  SiPowerbi,
  SiPython,
  SiReact,
  SiRedux,
  SiRemix,
  SiRuby,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiVisualstudio,
  SiVisualstudiocode,
  SiWebpack,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "C#", icon: SiCsharp },
  { name: "C", icon: SiC },

  { name: "React", icon: SiReact },
  { name: "Redux", icon: SiRedux },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Node.js", icon: SiNodedotjs },

  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Tailwindcss", icon: SiTailwindcss },
  { name: "Figma", icon: SiFigma },

  { name: "VS Code", icon: SiVisualstudiocode },
  { name: "Visual Studio", icon: SiVisualstudio },

  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Mongodb", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },

  { name: "Git", icon: SiGit },
  { name: "Github", icon: SiGithub },
  { name: "Latex", icon: SiLatex },
  { name: "Markdown", icon: SiMarkdown },

  { name: "Google Colab", icon: SiGooglecolab },
  { name: "Numpy", icon: SiNumpy },
  { name: "Pandas", icon: SiPandas },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Huggingface", icon: SiHuggingface },

  { name: "Power BI", icon: SiPowerbi },
  { name: "Power Automate", icon: SiPowerautomate },
  { name: "SharePoint", icon: SiMicrosoftsharepoint },
  { name: "Excel", icon: SiMicrosoftexcel },
];

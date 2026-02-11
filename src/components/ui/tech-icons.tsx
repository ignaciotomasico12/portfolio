"use client";

import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiHtml5, 
  SiCss3, 
  SiSass, 
  SiJavascript, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiMysql, 
  SiPostgresql, 
  SiJira, 
  SiJest, 
  SiReactquery, 
  SiTestinglibrary, 
  SiDocker, 
  SiIonic, 
  SiPhp, 
  SiChakraui, 
  SiSanity,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";
import { FaJava, FaCodeBranch, FaInfinity, FaAngular, FaCode } from "react-icons/fa6";
import { RiCopilotLine, RiSupabaseFill } from "react-icons/ri";

export const getTechIcon = (techName: string) => {
  const normalized = techName.toLowerCase().replace(/\./g, "").replace(/\s+/g, "");

  const iconClass = "text-primary-500";

  switch (normalized) {
    case "react":
      return <SiReact className={iconClass} />;
    case "angular":
      return <FaAngular className={iconClass} />;
    case "nextjs":
      return <SiNextdotjs className={iconClass} />;
    case "typescript":
      return <SiTypescript className={iconClass} />;
    case "tailwind":
    case "tailwindcss":
      return <SiTailwindcss className={iconClass} />;
    case "nodejs":
      return <SiNodedotjs className={iconClass} />;
    case "express":
      return <SiExpress className={iconClass} />;
    case "html":
      return <SiHtml5 className={iconClass} />;
    case "css":
      return <SiCss3 className={iconClass} />;
    case "sass":
      return <SiSass className={iconClass} />;
    case "javascript":
      return <SiJavascript className={iconClass} />;
    case "mongodb":
      return <SiMongodb className={iconClass} />;
    case "git":
      return <SiGit className={iconClass} />;
    case "github":
      return <SiGithub className={iconClass} />;
    case "mysql":
      return <SiMysql className={iconClass} />;
    case "postgresql":
    case "postgrsql":
      return <SiPostgresql className={iconClass} />;
    case "azuredevops":
      return <VscAzureDevops className={iconClass} />;
    case "jira":
      return <SiJira className={iconClass} />;
    case "scrum":
      return <DiScrum className={iconClass} />;
    case "jest":
      return <SiJest className={iconClass} />;
    case "reactquery":
      return <SiReactquery className={iconClass} />;
    case "testinglibrary":
      return <SiTestinglibrary className={iconClass} />;
    case "docker":
      return <SiDocker className={iconClass} />;
    case "cicd":
      return <FaInfinity className={iconClass} />;
    case "ionic":
      return <SiIonic className={iconClass} />;
    case "php":
      return <SiPhp className={iconClass} />;
    case "chakraui":
      return <SiChakraui className={iconClass} />;
    case "sanity":
      return <SiSanity className={iconClass} />;
    case "java":
      return <FaJava className={iconClass} />;
    case "ci/cd":
      return <FaCodeBranch className={iconClass} />;
    case "groqai":
      return <RiCopilotLine className={iconClass} />;
    case "supabase":
      return <RiSupabaseFill className={iconClass} />;
    default:
      return <FaCode className={iconClass} />; 
  }
};

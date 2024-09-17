"use client";

import { useState } from "react";
import { Input } from "@nextui-org/input";
import { ProjectNarrowCard } from "@/components/project-card-narrow";
import { projects } from "@/config/projects";
import { SearchIcon } from "@/components/icons";
import { sortProjectsByTimeframe, filterProjects } from "@/lib/utils";

export const Projects = () => {
  const [searchText, setSearchText] = useState("");

  const filteredProjects = filterProjects(projects, searchText);
  const sortedProjects = sortProjectsByTimeframe(filteredProjects);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 gap-12">
      <div className="min-w-[300px] w-full max-w-[600px] text-white">
        <Input
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-50",
              "dark:hover:bg-default/80",
              "data-[hover=true]:bg-default-50",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          value={searchText}
          onValueChange={setSearchText}
        />
      </div>
      <div className="z-10 w-full items-start justify-center flex flex-wrap gap-5">
        {sortedProjects.map((project, index) => (
          <ProjectNarrowCard
            key={index}
            title={project.title}
            description={project.description}
            type={project.type}
            demo={project.demo}
            repo={project.repo}
            image={project.image}
            status={project.status}
            tags={project.tags}
            timeframe={project.timeframe}
            visible={project.visible}
          />
        ))}
      </div>
    </div>
  );
};

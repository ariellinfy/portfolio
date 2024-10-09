"use client";

import { useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { experiences } from "@/config/experiences";
import { educations } from "@/config/education";
import { skills } from "@/config/skills";
import { EntryCard } from "./entry-card";
import { SkillCard } from "./skill-card";
import { FaBook, FaBriefcase, FaLightbulb } from "react-icons/fa";

export const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-8 sm:p-24 gap-5 sm:gap-10 min-w-[375px]">
      <Tabs
        fullWidth
        variant="underlined"
        size="lg"
        className="lg:max-w-[1280px]"
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#C4841D]",
          tab: "max-w-fit px-0 h-12 min-w-fit",
          tabContent:
            "group-data-[selected=true]:text-[#C4841D] group-data-[selected=true]:font-bold",
        }}
      >
        <Tab
          key="works"
          title={
            <div className="flex items-center space-x-2">
              <FaBriefcase />
              <span>Works</span>
            </div>
          }
          className="w-full max-w-[1280px]"
        >
          <div className="z-10 w-full max-w-[1280px] flex flex-col items-start justify-center gap-5">
            <h6 className="text-2xl md:text-4xl font-bold text-default-700">
              Work Experiences
            </h6>
            <div className="flex flex-col gap-5 w-full">
              {experiences.map((e, index) => (
                <EntryCard
                  key={index}
                  title={e.title}
                  company={e.company}
                  location={e.location}
                  timeframe={e.timeframe}
                  description={e.description}
                />
              ))}
            </div>
          </div>
        </Tab>
        <Tab
          key="skills"
          title={
            <div className="flex items-center space-x-2">
              <FaLightbulb />
              <span>Skills</span>
            </div>
          }
          className="w-full max-w-[1280px]"
        >
          <div className="z-10 w-full max-w-[1280px] flex flex-wrap items-start justify-center gap-6 lg:gap-9">
            {skills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </Tab>
        <Tab
          key="educations"
          title={
            <div className="flex items-center space-x-2">
              <FaBook />
              <span>Educations</span>
            </div>
          }
          className="w-full max-w-[1280px]"
        >
          <div className="z-10 w-full max-w-[1280px] flex flex-col items-start justify-center gap-5">
            <h6 className="text-2xl md:text-4xl font-bold text-default-700">
              Education
            </h6>

            <div className="flex flex-col gap-5 w-full">
              {educations.map((e, index) => (
                <EntryCard
                  key={index}
                  title={e.title}
                  company={e.company}
                  location={e.location}
                  timeframe={e.timeframe}
                  description={e.description}
                />
              ))}
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

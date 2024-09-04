import { experiences } from "@/config/experiences";
import { educations } from "@/config/education";
import { ExperienceCard } from "@/components/experience-card";

export default function PageAbout() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 sm:p-24 gap-10">
      {/* <div className="z-10 w-full items-center justify-center">
        <h6 className="text-4xl font-bold text-default-700">Skills</h6>
      </div> */}
      <div className="z-10 w-full max-w-[1280px] flex flex-col items-start justify-center gap-5">
        <h6 className="text-4xl font-bold text-default-700">Work Experience</h6>

        <div className="flex flex-col gap-5 w-full">
          {experiences.map((e, index) => (
            <ExperienceCard
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
      <div className="z-10 w-full max-w-[1280px] flex flex-col items-start justify-center gap-5">
        <h6 className="text-4xl font-bold text-default-700">Education</h6>

        <div className="flex flex-col gap-5 w-full">
          {educations.map((e, index) => (
            <ExperienceCard
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
    </main>
  );
}

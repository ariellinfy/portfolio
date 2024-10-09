import { Card, CardBody } from "@nextui-org/card";
import { Skill } from "@/types";

export const SkillCard = ({ name, icon: Icon }: Skill) => {
  return (
    <Card
      isBlurred
      isHoverable
      isPressable
      className="bg-slate-100 dark:bg-slate-800 hover:text-[#C4841D] dark:hover:text-primary"
    >
      <CardBody className="flex flex-col justify-center items-center gap-3 m-0 p-2 w-[100px] h-[100px] lg:w-[125px] lg:h-[125px]">
        <Icon className="w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12 mx-auto" />
        <h6 className="text-center text-wrap leading-tight text-sm lg:text-base">
          {name}
        </h6>
      </CardBody>
    </Card>
  );
};

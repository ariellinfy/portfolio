import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Entry } from "@/types";

export const EntryCard = ({
  title,
  company,
  location,
  timeframe,
  description,
}: Entry) => {
  return (
    <Card className="w-full min-w-[300px] gap-2 p-3 bg-slate-50 dark:bg-slate-800" isPressable isHoverable>
      <CardHeader className="justify-between items-start text-small p-0 gap-4">
        <div className="flex flex-col items-start text-left gap-1 sm:gap-0">
          <h6 className="font-medium text-base sm:text-lg leading-snug">{title}</h6>
          <p className="text-xs sm:text-base text-default-600">
            {company}, {location}
          </p>
        </div>
        <p className="text-xs sm:text-base font-medium text-primary-600 text-right">
          {timeframe}
        </p>
      </CardHeader>
      <CardBody className="gap-1 px-2 py-0 text-sm">
        {description.map((item) => (
          <li>{item}</li>
        ))}
      </CardBody>
    </Card>
  );
};

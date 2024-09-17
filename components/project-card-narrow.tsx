import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";
import { Project } from "@/types";
import { josefin_sans } from "@/config/fonts";

const tagColorMap: { [key: string]: any } = {
  languages: "danger",
  frontend: "warning",
  backend: "secondary",
  database: "success",
  versionControl: "default",
  devops: "default",
  testing: "default",
  deployment: "default",
};

const statusColorMap: { [key: string]: any } = {
  Completed: "success",
  Active: "success",
  Launched: "success",
  Planning: "danger",
  "In Development": "danger",
  Maintenance: "danger",
  "In Review": "danger",
  "On Hold": "primary",
  "Pending Upgrade": "primary",
  "Not Started": "default",
  Archived: "default",
  Retired: "default",
};

export const ProjectNarrowCard = ({
  title,
  description,
  type,
  demo,
  repo,
  image,
  status,
  tags,
  timeframe,
  visible,
}: Project) => {
  if (!visible) return null;

  return (
    <Card className="w-[420px] min-w-[300px] gap-2 p-3" isPressable isHoverable>
      <CardHeader className="justify-between items-start text-small p-0 gap-2">
        <Chip color={statusColorMap[status]} variant="dot" size="sm">
          {status}
        </Chip>
        <div className="flex flex-col items-end text-small p-0">
          <p className="text-tiny font-medium text-primary-600 text-right">{type}</p>
          <p>{timeframe}</p>
        </div>
      </CardHeader>
      <CardBody className="p-0 gap-2">
        <Image
          alt={title}
          className="object-cover rounded-xl"
          src={image}
          isZoomed
        />
        <div className="flex flex-col gap-1 px-2">
          <h4 className={`pt-2 font-medium text-large ${josefin_sans.className}`}>{title}</h4>
          <p className="text-tiny text-default-600">{description}</p>
          <div className="flex flex-wrap gap-1 pt-2">
            {tags.map(({ category, items }) =>
              items.length > 0
                ? items.map((item) => (
                    <Chip
                      key={item}
                      color={tagColorMap[category]}
                      variant="flat"
                      size="sm"
                    >
                      {item}
                    </Chip>
                  ))
                : null
            )}
          </div>
        </div>
      </CardBody>
      <CardFooter className="gap-2 p-0 pt-3">
        <Button
          href={repo?.link}
          as={Link}
          isExternal
          className="w-full"
          variant="flat"
          color="primary"
          isDisabled={!repo?.active}
        >
          Source Code
        </Button>
        <Button
          href={demo?.link}
          as={Link}
          isExternal
          className="w-full"
          color="primary"
          isDisabled={!demo?.active}
        >
          Demo
        </Button>
      </CardFooter>
    </Card>
  );
};

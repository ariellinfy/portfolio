import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";

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
  "Deployed": "success",
  "In Progress": "danger",
  "Not Started": "default",
  "On Hold": "primary",
};

type Tag = {
  category: string;
  items: string[];
};

type LinkStatus = {
  link: string;
  active: boolean;
};

type ProjectNarrowCardProps = {
  title: string;
  description: string;
  type: string;
  demo?: LinkStatus;
  repo?: LinkStatus;
  image: string;
  status: string;
  tags: Tag[];
  timeframe: string;
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
}: ProjectNarrowCardProps) => {
  return (
    <Card className="w-[420px] min-w-[300px] gap-2 p-3" isPressable isHoverable>
      <CardHeader className="justify-between items-start text-small p-0">
        <Chip color={statusColorMap[status]} variant="dot" size="sm">{status}</Chip>
        <div className="flex flex-col items-end text-small p-0">
          <p className="text-tiny font-medium text-primary-600">{type}</p>
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
        <div className="flex flex-col gap-2 px-2">
          <h4 className="font-medium text-large">{title}</h4>
          <p className="text-tiny text-default-600">{description}</p>
          <div className="flex flex-wrap gap-1 pt-1">
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

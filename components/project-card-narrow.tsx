import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";

const colorMap: { [key: string]: any } = {
  languages: "danger",
  frontend: "warning",
  backend: "secondary",
  database: "success",
  versionControl: "default",
  devops: "default",
  testing: "default",
  deployment: "default",
};

type Tag = {
  category: string;
  items: string[];
};

type ProjectNarrowCardProps = {
  title: string;
  description: string;
  type: string;
  demo?: string;
  repo?: string;
  image: string;
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
  tags,
  timeframe,
}: ProjectNarrowCardProps) => {
  return (
    <Card className="w-[420px] min-w-[300px] gap-2 p-3" isPressable isHoverable>
      <CardHeader className="flex-col items-end text-small p-0">
        <p className="text-tiny font-medium text-primary-600">{type}</p>
        <p>{timeframe}</p>
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
                      color={colorMap[category]}
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
          href={repo}
          as={Link}
          isExternal
          className="w-full"
          variant="flat"
          color="primary"
        >
          Source Code
        </Button>
        <Button
          href={demo}
          as={Link}
          isExternal
          className="w-full"
          color="primary"
        >
          Demo
        </Button>
      </CardFooter>
    </Card>
  );
};

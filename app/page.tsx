import { Metadata } from "next";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/sites";
import { josefin_sans } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Portfolio | Ariel Lin",
};

export default function Home() {
  const linkStyles =
    "text-default-500 transition-opacity hover:opacity-80 hover:font-bold cursor-pointer dark:hover:text-zinc-300 dark:hover:opacity-90";

  return (
    <main className="flex justify-center items-center h-screen px-10 sm:px-24 md:py-32">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 min-w-[300px] w-full max-w-[950px] min-h-[475px]"
      >
        <CardBody className="flex flex-row gap-8 lg:gap-14 items-center justify-center px-10 py-12 sm:py-20 md:px-15 lg:p-20 flex-wrap overflow-x-hidden">
          <div className="flex flex-col gap-6 sm:gap-10">
            <div className="flex w-full items-center justify-center">
              <h2
                className={`text-4xl sm:text-5xl font-medium ${josefin_sans.className}`}
              >
                👋 Hi, I'm Ariel Lin
              </h2>
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex gap-5 w-full">
                <Button
                  as={Link}
                  href="/projects"
                  color="primary"
                  variant="shadow"
                  size="lg"
                  className="text-sm sm:text-base px-3 sm:px-6 h-10 sm:h-12 font-medium w-full shadow-md"
                >
                  Projects
                </Button>
                <Button
                  as={Link}
                  href="/about"
                  color="primary"
                  variant="shadow"
                  size="lg"
                  className="text-sm sm:text-base px-3 sm:px-6 h-10 sm:h-12 font-medium w-full shadow-md"
                >
                  Resume
                </Button>
              </div>
              <div className="flex gap-4">
                <Button
                  isIconOnly
                  as={Link}
                  aria-label="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={siteConfig.links.github}
                  variant="shadow"
                >
                  <FaGithub className={linkStyles} size={26} />
                </Button>
                <Button
                  isIconOnly
                  as={Link}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={siteConfig.links.linkedin}
                  variant="shadow"
                >
                  <FaLinkedin className={linkStyles} size={26} />
                </Button>
                <ThemeSwitch />
              </div>
            </div>
          </div>
          <div className="flex min-w-[200px] w-full max-w-[300px] justify-center items-center">
            <Image
              as={NextImage}
              src="/profile.png"
              alt="Profile Picture"
              className="object-cover w-full h-full"
              height={275}
              width={275}
              shadow="md"
              radius="full"
              isBlurred
            />
          </div>
        </CardBody>
      </Card>
    </main>
  );
}

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";

import { ThemeSwitch } from "./theme-switch";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LogoLight } from "@/components/icons";
import { siteConfig } from "@/config/sites";
import { josefin_sans } from "@/config/fonts";

export const Navbar = () => {
  const linkStyles =
    "text-default-500 transition-opacity hover:opacity-80 hover:font-bold cursor-pointer dark:hover:text-zinc-300 dark:hover:opacity-90";

  return (
    <NextUINavbar
      maxWidth="xl"
      className={`${josefin_sans.className} px-6 lg:px-8`}
    >
      <NavbarContent className="basis-1/5 sm:basis-full gap-5" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" href="/">
            <LogoLight />
          </Link>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-7 justify-start ml-2 ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={`${linkStyles} text-xl font-medium`}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-7">
          <Link
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.links.github}
          >
            <FaGithub className={linkStyles} size={26} />
          </Link>
          <Link
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.links.github}
          >
            <FaLinkedin className={linkStyles} size={26} />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4 gap-5" justify="end">
        <Link
          aria-label="Github"
          target="_blank"
          rel="noopener noreferrer"
          href={siteConfig.links.github}
        >
          <FaGithub className={linkStyles} size={26} />
        </Link>
        <Link
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          href={siteConfig.links.linkedin}
        >
          <FaLinkedin className={linkStyles} size={26} />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-4 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`${linkStyles} text-xl font-medium`}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

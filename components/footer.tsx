import Link from "next/link";
import { josefin_sans } from "@/config/fonts";

export const Footer = () => {
  const author = "Ariel Lin";

  return (
    <div
      className={`bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black ${josefin_sans.className}`}
    >
      <div className="flex flex-col gap-1 h-3/5 md:h-2/3 w-full items-center justify-center">
        <p className="text-small text-default-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary-500 dark:text-primary-300 font-medium">
            {author}
          </span>
          . All rights reserved.
        </p>

        <p className="text-small text-default-400 hidden md:inline">
          Built with&nbsp;
          <Link
            className="pointer-events-auto place-items-center text-default-500"
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>
          &nbsp;and&nbsp;
          <Link
            className="pointer-events-auto place-items-center text-default-500"
            href="https://nextui.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextUI
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

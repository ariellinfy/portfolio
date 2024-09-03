"use client";

import { useEffect, useState } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useTheme } from "next-themes";
import { useSwitch } from "@nextui-org/switch";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light",
    "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
    onChange,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Component
      {...getBaseProps({
        className: "px-px transition-opacity cursor-pointer",
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: [
            "w-auto h-auto px-0 mx-0 pt-px",
            "flex items-center justify-center",
            "rounded-lg bg-transparent group-data-[selected=true]:bg-transparent",
          ],
        })}
      >
        {!isSelected ? (
          <SunFilledIcon
            className="text-default-500 dark:hover:text-zinc-300 dark:hover:opacity-90"
            size={24}
          />
        ) : (
          <MoonFilledIcon
            className="text-default-500 hover:opacity-80"
            size={24}
          />
        )}
      </div>
    </Component>
  );
};

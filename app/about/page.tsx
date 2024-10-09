import { Metadata } from "next";
import { About } from "@/components/about";

export const metadata: Metadata = {
  title: "About",
};

export default function PageAbout() {
  return (
    <main className="min-h-screen">
      <About />
    </main>
  );
}

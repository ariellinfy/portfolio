import { Metadata } from "next";
import { Projects } from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function PageProjects() {
  return (
    <main className="min-h-screen">
      <Projects />
    </main>
  );
}

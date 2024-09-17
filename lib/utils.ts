import { Project } from "@/types";

// Helper function for case-insensitive search
const includesCaseInsensitive = (text: string, searchText: string): boolean => {
  return text.toLowerCase().includes(searchText.toLowerCase());
};

// Function to filter projects based on search text
export const filterProjects = (
  projects: Project[],
  searchText: string
): Project[] => {
  return projects.filter((project) => {
    const matchesTitle = includesCaseInsensitive(project.title, searchText);
    const matchesDescription = includesCaseInsensitive(
      project.description,
      searchText
    );
    const matchesType = includesCaseInsensitive(project.type, searchText);
    const matchesStatus = includesCaseInsensitive(project.status, searchText);
    const matchesTimeframe = includesCaseInsensitive(
      project.timeframe,
      searchText
    );
    const matchesTags = project.tags.some((tagCategory) =>
      tagCategory.items.some((tag) => includesCaseInsensitive(tag, searchText))
    );

    return (
      matchesTitle ||
      matchesDescription ||
      matchesType ||
      matchesStatus ||
      matchesTimeframe ||
      matchesTags
    );
  });
};

// Function to parse a single date
const parseSingleDate = (dateStr: string): Date => {
  const [month, year] = dateStr.split(" ");
  return new Date(`${month} 1, ${year}`);
};

// Function to parse timeframe
const parseTimeframe = (timeframe: string): Date => {
  const ranges = timeframe.split("&").map((range) => range.trim());
  const dateObjects: number[] = [];

  ranges.forEach((range) => {
    if (range.includes("-")) {
      const [startDate, endDate] = range
        .split("-")
        .map((dateStr) => dateStr.trim());
      dateObjects.push(parseSingleDate(endDate).getTime()); // Use only the end date for sorting
    } else {
      dateObjects.push(parseSingleDate(range).getTime());
    }
  });

  return new Date(Math.max(...dateObjects));
};

// Sort projects by latest timeframe
export const sortProjectsByTimeframe = (projects: Project[]): Project[] => {
  return projects.sort((a, b) => {
    return (
      parseTimeframe(b.timeframe).getTime() -
      parseTimeframe(a.timeframe).getTime()
    );
  });
};

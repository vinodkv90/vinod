import Projects from "@/components/Projects";
import { ProjectsResponse } from "@/types/home";
import { nextFetch } from "@/utils/nextFetch";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const page = async () => {
  const data = await nextFetch("/project-listing");
  return <Projects {...(data as ProjectsResponse)} />;
};

export default page;

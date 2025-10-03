import Projects from '@/components/Projects'
import { ProjectsResponse } from '@/types/home';
import { nextFetch } from '@/utils/nextFetch'


const page = async () => {
  const data = await nextFetch('/project-listing');
  return (
    <Projects {...(data as ProjectsResponse)} />
  );
}

export default page
import { ProjectInterface } from "@/common";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProject } from "@/lib/actions";

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  },
}

export default async function Home() {
  const data = await fetchAllProject() as ProjectSearch
  const projectsToDisplay = data?.projectSearch?.edges || [];


  if (projectsToDisplay.length === 0) {
    return (
      <section className="flex items-center justify-start flex-col g:px-20 py-6 px-5">
        {/* <Categories /> */}

        <p className="w-full  my-10 px-2 text-center">No projects found, go create some first.</p>
      </section>
    )
  }


  return (
    <section className="mb-16 flex flex-col items-start justify-start px-3">
      <h1>Category</h1>
      <section className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10 w-full">
        {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            id={node?.id}
            key={node?.id}
            image={node?.image}
            title={node?.title}
            name={node?.createdBy?.name}
            avatarUrl={node?.createdBy?.avatarUrl}
            userId={node?.createdBy?.id}
          />
        ))}

      </section>
      <h1>more</h1>
    </section>
  );
}

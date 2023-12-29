import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "@/components/ProjectCard";
import { IAudit } from "@/types";

interface ProjectListProps {
  projects: IAudit[];
  clientName: string;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, clientName }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={{ base: 5, md: 10 }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} clientName={clientName} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectList;

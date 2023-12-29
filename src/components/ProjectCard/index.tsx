import React from "react";
import { Box, Text, Link, VStack } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { IAudit } from "@/types";

interface ProjectCardProps {
  project: IAudit;
  clientName: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, clientName }) => {
  const navigate = useNavigate();

  const url = `/${clientName}/${project.audit_name}`;

  const handleClick = () => {
    navigate(url);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={[2, 4]}
      m={2}
      overflow="hidden"
      textOverflow="ellipsis"
      onClick={handleClick}
    >
      <VStack align="start">
        <Link as={RouterLink} to={url}>
          <Text fontSize={["md", "lg"]} fontWeight="bold">
            {project.audit_name}
          </Text>
        </Link>
        <Text fontSize={["sm", "md"]}>Start Date: {project.start_date}</Text>
        <Text fontSize={["sm", "md"]}>End Date: {project.end_date}</Text>
        {project.desc && <Text fontSize={["sm", "md"]}>{project.desc}</Text>}
      </VStack>
    </Box>
  );
};

export default ProjectCard;

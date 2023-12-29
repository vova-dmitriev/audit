import React from "react";
import { useParams } from "react-router-dom";
import { Container, Heading } from "@chakra-ui/react";
import ProjectList from "@/components/ProjectList";
import useAuditStore from "@/store/useAuditStore";
import { BackButton } from "@/components/UI/BackButton";

const ProjectsPage: React.FC = () => {
  const { client } = useParams<{ client?: string }>();
  const clientData = useAuditStore((state) =>
    state.clients.find((c) => c.client === client)
  );

  return (
    <Container maxW="container.xl">
      <BackButton />
      <Heading as="h2" size="lg" my={5}>
        {client} Projects
      </Heading>
      {clientData ? (
        <ProjectList
          projects={clientData.audits}
          clientName={clientData.client}
        />
      ) : (
        <div>Client not found</div>
      )}
    </Container>
  );
};

export default ProjectsPage;

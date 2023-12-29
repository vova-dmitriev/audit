import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import ClientList from "@/components/ClientList";
import useAuditStore from "@/store/useAuditStore";

const ClientsPage: React.FC = () => {
  const clients = useAuditStore((state) => state.clients);

  return (
    <Container maxW="container.xl">
      <Heading as="h2" size="lg" my={5}>
        Our Clients
      </Heading>
      <ClientList clients={clients} />
    </Container>
  );
};

export default ClientsPage;

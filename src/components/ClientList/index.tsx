import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ClientCard from "@/components/ClientCard";
import { IAuditData } from "@/types";

interface ClientListProps {
  clients: IAuditData[];
}

const ClientList: React.FC<ClientListProps> = ({ clients }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, md: 10 }}>
      {clients.map((client) => (
        <ClientCard key={client.client} name={client.client} />
      ))}
    </SimpleGrid>
  );
};

export default ClientList;

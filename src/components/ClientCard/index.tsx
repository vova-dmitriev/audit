import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface ClientCardProps {
  name: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ name }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} m={2}>
      <Link as={RouterLink} to={`/${name}`}>
        <Text fontSize="xl">{name}</Text>
      </Link>
    </Box>
  );
};

export default ClientCard;

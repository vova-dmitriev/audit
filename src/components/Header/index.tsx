import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Box bg="blue.500" color="white" px={[2, 4, 6]} py={[2, 3]}>
      <Flex justify="space-between" align="center">
        <Link as={RouterLink} to="/" fontSize={["md", "lg", "xl"]}>
          Home
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;

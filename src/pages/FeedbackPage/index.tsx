import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import FeedbackForm from "@/components/FeedbackForm";
import { useParams } from "react-router-dom";
import { BackButton } from "@/components/UI/BackButton";

const FeedbackPage: React.FC = () => {
  const { client, project } = useParams<{
    client: string;
    project: string;
  }>();

  return (
    <Container maxW="container.xl">
      <BackButton />
      <Heading as="h2" size="lg" my={5}>
        Feedback for {client} - {project}
      </Heading>
      <FeedbackForm />
    </Container>
  );
};

export default FeedbackPage;

import React, { useState } from "react";
import { Box, Textarea, Button, useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import useAuditStore from "@/store/useAuditStore";
import { PUBLIC_ROUTES } from "@/routes";

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState("");
  const { client, project } = useParams<{
    client?: string;
    project?: string;
  }>();
  const toast = useToast();
  const navigate = useNavigate();
  const { isLoading, submitData } = useAuditStore();

  const handleSubmit = async () => {
    try {
      await submitData({
        clientName: client,
        projectName: project,
        feedback: feedback,
      });
      toast({
        title: "Feedback submitted.",
        description: "We've received your feedback.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate(PUBLIC_ROUTES.HOME);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box mt="10px">
      <Textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter your feedback"
        size="sm"
        isDisabled={isLoading}
      />
      <Button onClick={handleSubmit} mt={4} isLoading={isLoading}>
        Submit
      </Button>
    </Box>
  );
};

export default FeedbackForm;

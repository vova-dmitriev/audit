import { FC } from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const BackButton: FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleBack} mt="4" mb="2">
      Back
    </Button>
  );
};

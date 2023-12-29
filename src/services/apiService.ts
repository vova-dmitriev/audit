import { IAuditFeedbackData } from "@/types";
import axios from "axios";

export const sendData = async (data: IAuditFeedbackData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_URL}/feedback`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};

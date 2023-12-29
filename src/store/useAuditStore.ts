import { create } from "zustand";
import { sendData } from "@/services/apiService";
import { IAuditData, IAuditFeedbackData } from "@/types";
import mockAuditData from "@/mock/mockAuditData.json";

interface AppState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  submitData: (data: IAuditFeedbackData) => Promise<void>;
  clients: IAuditData[];
}

const useAuditStore = create<AppState>()((set) => ({
  isLoading: false,
  clients: mockAuditData,
  getClientByName: (clientName: string) =>
    mockAuditData.find((client) => client.client === clientName),
  setIsLoading: (isLoading) => set({ isLoading }),
  submitData: async (data) => {
    set({ isLoading: true });
    try {
      await sendData(data);
    } catch (error) {
      console.error("Error in submitData:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAuditStore;

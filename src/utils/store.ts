import { create } from "zustand";

type State = {
  operation: string;
};

type Action = {
  updateOperation: (operation: State["operation"]) => void;
};

export const useOperationStore = create<State & Action>((set) => ({
  operation: "",
  updateOperation: (operation) => set(() => ({ operation: operation })),
}));

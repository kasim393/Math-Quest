import { create } from "zustand";
import { persist } from "zustand/middleware";

type OperationState = {
  operation: string;
};

type OperationAction = {
  updateOperation: (operation: OperationState["operation"]) => void;
};

export const useOperationStore = create<OperationState & OperationAction>()(
  persist(
    (set) => ({
      operation: "",
      updateOperation: (operation) => set({ operation }),
    }),
    {
      name: "operation-storage",
    }
  )
);

type DifficultyState = {
  difficulty: "easy" | "medium" | "hard";
};

type DifficultyAction = {
  updateDifficulty: (difficulty: DifficultyState["difficulty"]) => void;
};

export const useDifficultyStore = create<DifficultyState & DifficultyAction>()(
  persist(
    (set) => ({
      difficulty: "easy",
      updateDifficulty: (difficulty) => set({ difficulty }),
    }),
    {
      name: "difficulty-storage",
    }
  )
);

type TimerState = {
  isTimer: boolean;
};

type TimerAction = {
  updateIsTimer: (isTimer: TimerState["isTimer"]) => void;
};

export const useIsTimerStore = create<TimerState & TimerAction>()((set) => ({
  isTimer: false,
  updateIsTimer: (isTimer) => set({ isTimer }),
}));

import { create } from "zustand";

interface StepStore {
  step: number;
  increase: (val?: number) => void;
  reset: () => void;
}

export const useStepStore = create<StepStore>((set) => ({
  step: 0,
  increase: (val) => set((state) => ({ step: state.step + (val ?? 1) })),
  reset: () => set({ step: 0 }),
}));

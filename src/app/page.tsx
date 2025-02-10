"use client";

import ResetButton from "@/components/reset-button";
import StartButton from "@/components/start-button";
import StepOne from "@/components/step-one";
import StepThree from "@/components/step-three";
import StepTwo from "@/components/step-two";
import { useStepStore } from "@/store/useStepStore";
import { AnimatePresence } from "motion/react";

export default function Home() {
  const step = useStepStore((state) => state.step);

  const stepList = [
    <StartButton key="zero" />,
    <StepOne key="one" />,
    <StepTwo key="two" />,
    <StepThree key="three" />,
  ];

  return (
    <div className="flex items-center justify-center min-h-svh md:min-h-screen p-8 pb-20 gap-16 overflow-y-hidden">
      <main className="flex flex-col gap-8 items-center ">
        <AnimatePresence>
          <ResetButton />
          {stepList[step] ?? <></>}
        </AnimatePresence>
      </main>
    </div>
  );
}

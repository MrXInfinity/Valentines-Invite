import { useStepStore } from "@/store/useStepStore";
import { motion } from "motion/react";
import Image from "next/image";

export default function ResetButton() {
  const step = useStepStore((state) => state.step);
  const reset = useStepStore((state) => state.reset);
  const isFirstStep = step === 0;

  return (
    <>
      {!isFirstStep && (
        <motion.button
          onClick={() => reset()}
          className="absolute right-6 top-4 p-2 bg-white rounded-lg "
        >
          <Image
            className=""
            src="/restart.png"
            alt="Green seal stamp"
            width={20}
            height={20}
            priority
          />
        </motion.button>
      )}
    </>
  );
}

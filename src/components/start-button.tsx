import { useStepStore } from "@/store/useStepStore";
import { motion } from "motion/react";

export default function StartButton() {
  const increase = useStepStore((state) => state.increase);
  const step = useStepStore((state) => state.step);
  const isFirstStep = step === 0;

  return (
    <>
      {isFirstStep && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.8,
            rotate: -360,
            transition: {
              duration: 0.1,
            },
          }}
          exit={{
            rotate: -360,
            transition: {
              duration: 0.2,
            },
          }}
          onClick={() => increase()}
          className=" py-2 px-5 text-lg font-semibold bg-white rounded-lg text-[#36855e]"
        >
          Start?
        </motion.button>
      )}
    </>
  );
}

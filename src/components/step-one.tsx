import { useStepStore } from "@/store/useStepStore";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StepOne() {
  const [isSealRemoved, setIsSealRemoved] = useState(false);
  const [isEnvOpen, setIsEnvOpen] = useState(false);

  const increase = useStepStore((state) => state.increase);

  useEffect(() => {
    const openEnvelope = isSealRemoved
      ? setTimeout(() => setIsEnvOpen(true), 2000)
      : undefined;

    return () => {
      clearTimeout(openEnvelope);
    };
  }, [isSealRemoved]);

  useEffect(() => {
    const nextStep = isEnvOpen ? setTimeout(() => increase(), 2000) : undefined;

    return () => {
      clearTimeout(nextStep);
    };
  }, [increase, isEnvOpen]);

  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={"initial"}
        animate={!isSealRemoved ? "close" : "open"}
        exit={"exit"}
        variants={{
          initial: { scale: 0, position: "relative" },
          close: {
            scale: 1,
            rotateX: 0,
            rotateZ: 0,
            y: 0,
            transition: { duration: 0.8 },
          },
          open: {
            scale: 1,
            rotateX: 50,
            rotateZ: 30,
            transition: { duration: 0.8 },
          },
          exit: {
            opacity: 0,
            scale: 1,
            rotateX: 0,
            rotateZ: 0,
            y: "20%",
            transition: { duration: 0.5 },
          },
        }}
        transition={{
          bounce: 0.5,
          ease: "easeOut",
          type: "spring",
        }}
        className="relative flex justify-center shadow-md"
      >
        <Image
          className=""
          src={isEnvOpen ? "/opened_envelope.png" : "/closed_envelope.png"}
          alt="Closed Envelope with Seal"
          width={500}
          height={500}
          priority
        />

        <motion.button
          animate={!isSealRemoved ? "stay" : "exit"}
          variants={{
            stay: {
              opacity: 1,
              y: "-50%",
              x: "-50%",
              rotateX: 0,
              rotateY: 0,
            },
            exit: {
              opacity: 0,
              y: "-200%",
              x: "-150%",
              rotateX: 60,
              rotateY: -40,
              transition: { duration: 1 },
            },
          }}
          onClick={() => setIsSealRemoved(true)}
          className="absolute top-1/2 left-1/2"
        >
          <Image
            className=""
            src="/seal.png"
            alt="Green seal stamp"
            width={50}
            height={50}
            priority
          />
        </motion.button>
      </motion.div>
    </div>
  );
}

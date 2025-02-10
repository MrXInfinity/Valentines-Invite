import { useStepStore } from "@/store/useStepStore";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function StepTwo() {
  const [rejected, setRejected] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);

  const increase = useStepStore((state) => state.increase);

  const rejectedComments = [
    "Love di mo na me mahal :<",
    "Yan guys sign na yan...",
    "Love wag ka na magkunware dahil patay na patay ka talaga sakin",
    "Awts pain pighati sorrow",
    "LAB GEH GANYAN KA",
    "ah ok may ibang kavalentines",
    "Ayaw mo ba kumain sa fine dining restaurant :<",
    "NOBODY PRAY FOR ME ERHKHJSD EYYY YE YE *sayaw ni tanfelix",
    "LAB PRETTY PLS",
    "Love I love you so much po kaya yes ka na",
    "Bujeo gu saeyo",
    "DI KA NA NGA NAGPABABY BLOW SA TYAN EH ",
    "sabi mo sakin dati baliw na baliw ka nung unang gabi natin",
    "sumbong kita kayla tita tito sige",
  ];

  const getRandomComment = () => {
    const randomNum = Math.round(Math.random() * (rejectedComments.length - 1));

    return rejectedComments[randomNum];
  };

  const message =
    rejected === 0 && !isAccepted
      ? " Would you be my valentine?"
      : isAccepted
      ? "YEHEY I LOVE YOU SO MUUUUU..."
      : rejected === 1
      ? "Ay Grabe matapos naman si idol :<"
      : getRandomComment();

  useEffect(() => {
    const nextStep = isAccepted
      ? setTimeout(() => increase(), 1000)
      : undefined;

    return () => {
      clearTimeout(nextStep);
    };
  }, [increase, isAccepted]);

  return (
    <motion.div
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={{
        initial: { opacity: 0, y: "100%" },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.5 },
        },
        exit: {
          opacity: 0,
          y: "100%",
          transition: { duration: 0.5 },
        },
      }}
      className="relative "
    >
      <Image
        className="centered-absolute -z-10 max-w-md md:max-w-none"
        src={"/letter-bg.png"}
        alt="Letter coutouts with dried flowers"
        width={800}
        height={640}
      />
      <div className="flex flex-col gap-1 md:gap-2 pt-24 md:pt-32 pb-20 px-14 md:px-44 max-w-3xl text-xs md:text-sm">
        <h1>Hi Langga,</h1>
        <p className="">
          I Hope you enjoy this invitation I made you. At first I was hesistant
          because I am not used to asking this question. It can seem unecessary
          as we&apos;re already partners but I wan&apos;t you to feel special my
          love. So let me ask you properly:
        </p>
        <div className="flex flex-col  md:gap-2">
          <h2 className="font-semibold ">{message}</h2>
          <div className="flex items-center gap-2 md:gap-4">
            <motion.button
              whileTap={{
                scale: 2,
              }}
              whileHover={{
                scale: 2,
              }}
              onClick={() => setIsAccepted(true)}
              className="w-20 py-1.5 bg-white text-[#36855e] border-2 border-[#36855e] hover:bg-[#36855e] hover:text-white ease-in-out duration-500 transition"
            >
              Yes
            </motion.button>
            <motion.button
              whileHover={{
                scale: 0.1,
              }}
              whileTap={{
                scale: 0.1,
              }}
              onClick={() => setRejected((prev) => prev + 1)}
              className="w-20 py-1.5 bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white ease-in-out duration-500 transition"
            >
              No
            </motion.button>
          </div>
        </div>

        <div className="flex flex-col">
          <h3>Best Regards,</h3>
          <h4>Johann na patay na patay ka</h4>
        </div>
      </div>
    </motion.div>
  );
}

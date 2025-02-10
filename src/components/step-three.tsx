import { motion } from "motion/react";
import Image from "next/image";

export default function StepThree() {
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
      className="relative fflex justify-center max-w-2xl"
    >
      <Image
        className="centered-absolute -z-10 max-w-md md:max-w-none opacity-20"
        src={"/flower.png"}
        alt="Letter coutouts with dried flowers"
        width={450}
        height={600}
        priority
      />
      <div className="flex flex-col justify-center gap-4">
        <Image
          className=""
          src={"/cats.gif"}
          alt="Letter coutouts with dried flowers"
          width={200}
          height={200}
          priority
        />
        <div className="flex flex-col">
          <h1 className="font-mono font-bold text-3xl md:text-5xl">
            see you soon love...
          </h1>
          <h2 className="font-mono md:text-lg">
            I love you always and i miss you. maghanda ka na kumain sa isang
            fine dining restaurant bro, pre ay love pala
          </h2>
        </div>
        <Image
          className="self-end"
          src={"/frame.png"}
          alt="Letter coutouts with dried flowers"
          width={150}
          height={150}
          priority
        />
      </div>
    </motion.div>
  );
}

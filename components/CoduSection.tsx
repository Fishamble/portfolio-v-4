"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoduSection() {
  return (
    <section className="mx-auto grid h-[48rem] max-w-container-width overflow-hidden rounded-[1rem] p-[1rem] lg:h-[30rem]">
      <div className="bg-space relative flex h-full flex-col  overflow-hidden rounded-[1rem] lg:flex-row">
        <div className="h-[24rem] bg-red-500... text-white text-[1rem]...">
          <h3 className="bg-yellow-300... text-3xl m-[1rem] font-extrabold">Open Source</h3>
          <p className="m-[1rem]">
            Codú is Ireland's largest coding community. The perfect place to
            learn, contribute and network with like minded individuals.{" "}
          </p>
          <p className="m-[1rem]">
            The community afforded me the opportunity to actively participate in
            open source projects, delve into an unfamiliar codebase, and refine
            my skills in using Git.
          </p>
        </div>

        <div className="justify-center... w-1/2... bg-red-600... flex flex-col items-center">
          <div className="mt-[1rem]... bg-yellow-400... relative h-[7rem] w-[80%] lg:w-[20rem]">
            <Image
              src="/codu.svg"
              fill={true}
              alt="codu logo"
              style={{ objectFit: "contain" }}
              // priority={true}
            />
          </div>

          <p
            className="bg-blue-200... pt-[1rem] text-2xl font-extrabold  text-white"
          >
            A{" "}
            <span
              className=" bg-gradient-to-r from-orange-600   to-red-900 
        
        bg-clip-text text-transparent"
            >
              space
            </span>{" "}
            for coders
          </p>
          <div className="flex justify-center">
            <motion.div
              className="absolute bottom-[-7rem] aspect-square h-[18rem] lg:h-[20rem]"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity }}
            >
              <Image
                src="/moon.png"
                fill={true}
                alt="full moon"
                style={{ objectFit: "cover" }}
                // priority={true}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
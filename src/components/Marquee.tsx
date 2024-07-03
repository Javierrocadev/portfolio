import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const upperMarquee = [
    "angular.png",
    "aws.png",
    "azure.png",
    "figma.png",
    "sqlserver.png",
    "vue.png",
    "netcore.png",
    "swagger.png",
    "preline.png",
    "tailwind.png"
  ];
  return (
    <div className="container w-full mx-auto py-8">
      <div className="flex MyGradient">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{duration: 30, repeat: Infinity, ease: "linear"}}
          className="flex flex-shrink-0"
        >
          {upperMarquee.map((image, index) => {
            return (

                <div className="h-20 w-20 flex justify-center items-center bg-bg  p-2 mr-8 rounded">
              <img
                key={index}
                src={`/images/${image}`}
                alt={image}
                className="h-16 w-fit object-contain"
              />
              </div>
            )
          })}{" "}
          
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{duration: 30, repeat: Infinity, ease: "linear"}}
          className="flex flex-shrink-0 "
        >
          {upperMarquee.map((image, index) => {
            return (
                <div className="h-20 w-20 flex justify-center items-center bg-bg  p-2 mr-8 rounded">
                <img
                  key={index}
                  src={`/images/${image}`}
                  alt={image}
                  className="h-16 w-fit object-contain"
                />
                </div>
            )
          })}{" "}
          
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{duration: 30, repeat: Infinity, ease: "linear"}}
          className="flex flex-shrink-0 "
        >
          {upperMarquee.map((image, index) => {
            return (
                <div className="h-20 w-20 flex justify-center items-center bg-bg  p-2 mr-8 rounded">
                <img
                  key={index}
                  src={`/images/${image}`}
                  alt={image}
                  className="h-16 w-fit object-contain"
                />
                </div>
            )
          })}{" "}
          
        </motion.div>
   
      </div>
    </div>
  );
};

export default Marquee;

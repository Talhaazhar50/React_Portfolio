import React from "react";
import "./Lourdes.scss";
import { motion } from "framer-motion";
import { Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const LOURDES = () => {
  const Laptop = useMediaQuery("(max-width: 1000px)");

  return (
    <Flex
      align={"center"}
      direction={Laptop ? "column" : "row"}
      justify={Laptop ? "" : "center"}
      className="lourdes"
    >
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 20,
        }}
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          variants={textVariants}
          style={{
            fontSize: Laptop ? 20 : 30,
            color: "rebeccapurple",
            letterSpacing: 10,
          }}
        >
          LOURDES DORVILUS
        </motion.h2>
        <motion.h2
          style={{ fontSize: Laptop ? 45 : 88, marginLeft: 50 }}
          variants={textVariants}
        >
          Full Stack Web Developer
        </motion.h2>

        <motion.div
          style={{ marginTop: 20 }}
          variants={textVariants}
          className="buttons"
        >
          <motion.button
            style={{
              padding: 20,
              border: "1px solid white",
              borderRadius: 10, // Use camelCase for border-radius
              backgroundColor: "transparent", // Use camelCase for background-color
              color: "white", // Add quotes around white
              marginRight: 20, // Use camelCase for margin-right
              cursor: "pointer", // Add quotes around pointer
              fontWeight: 300,
            }}
            variants={textVariants}
          >
            See My Latest Works
          </motion.button>

          <motion.button
            style={{
              padding: 20,
              border: "1px solid white",
              borderRadius: 10, // Use camelCase for border-radius
              backgroundColor: "transparent", // Use camelCase for background-color
              color: "white", // Add quotes around white
              marginRight: 20, // Use camelCase for margin-right
              cursor: "pointer", // Add quotes around pointer
              fontWeight: 300,
            }}
            variants={textVariants}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.img
          variants={textVariants}
          animate="scrollButton"
          src="/scroll.png"
          alt="scroll button icon"
        />
      </motion.div>

      <Image
        mt={Laptop ? 0 : 30}
        width={Laptop ? 400 : "40%"}
        src="./lourdes2.png"
        alt="image of lourdes"
      />

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Tech Enthusiast
      </motion.div>
    </Flex>
  );
};

export default LOURDES;

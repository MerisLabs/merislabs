import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Offering } from "./Offering";
import { TypewriterEffect } from "../components/animations";
import { offerings } from "../constants/offerings.1";
import { PortDisplay } from "./PortDisplay";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-between"
      sx={{
        [(theme) => theme.breakpoints.down("md")]: { height: "auto" },
      }}
      pt={15}
    >
      <Stack direction="column" justifyContent="center" alignItems="center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Avatar
            mt={10}
            alt="Tomide Adeoye"
            src="https://pbs.twimg.com/profile_images/1582267478780137472/LMgqRxsu_400x400.jpg"
            sx={{ width: 150, height: 150, border: "4px solid #85f" }}
          />
        </motion.div>
        <Stack
          borderRadius={10}
          backgroundColor="#fff"
          p={5}
          color="#000"
          mt={-10}
          pt={15}
          textAlign="center"
        >
          {/* <LinkTree /> */}
          Hi,<br /> I am Tomide. <br /> Welcome to MerisLabs.
          <br /> <br />
          For the past 4 years, I have built software for businesses across 4
          industries. <br />I am excited to learn more about your business
          operations, your business model, your customers, and your goals and
          let you know how modern technology solutions can help you achieve your
          wildest dreams!!
          <br />
          <br />
          You will find below a few projects to show what we can achieve
          together!!
          <br />
          <br />
          Reach me here: +234 818 192 7251 | tomideadeoye@gmail.com
        </Stack>
      </Stack>

      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={6}
        sx={{
          height: "60vh",
        }}
      >
        <Typography
          variant="h1"
          component="p"
          textTransform={"uppercase"}
          textAlign="center"
        >
          We build Every kind of technology for businesses
        </Typography>
        <Typography variant="h4" component="p">
          We have built for:
        </Typography>
        <TypewriterEffect>
          {[
            "Fintechs: Dukka, QorePay",
            "Propertytech: Hiyalo, VerifyProp",
            "Legaltech: Jackson, Etti and Edu, Nigerian Institute of Chartered Arbitrators",
          ]}
        </TypewriterEffect>
        <Typography variant="h4" component="p">
          Our expersise is describing your business model in code.
        </Typography>
      </Stack>
      <Stack direction={{ xs: "column", md: "row" }}>
        {offerings?.map((offering, index) => (
          <Offering key={index} offering={offering} />
        ))}
      </Stack>
      <PortDisplay offerings={offerings} />
    </Stack>
  );
};

export default HeroSection;

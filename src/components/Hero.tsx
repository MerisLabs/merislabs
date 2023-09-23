import React, { useState } from "react";
import { Avatar, Link, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Offering } from "./Offering";
import { TypewriterEffect } from "./animations";
import { offerings } from "../constants/offerings.1";
import { PortDisplay } from "./PortDisplay";
import { motion } from "framer-motion";

const avatars = {
  normal:
    "https://pbs.twimg.com/profile_images/1582267478780137472/LMgqRxsu_400x400.jpg",
  hover:
    "https://ugc.production.linktr.ee/mXxHQz4nRSeSJiUrOrkQ_26xR5rRAs9Yz3qJS?io=true&size=avatar-v1",
};

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Stack alignItems="center" justifyContent="space-between" pt={2}>
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
          <Link
            href="https://www.linkedin.com/in/tomide-adeoye-828604129/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              alt="Tomide Adeoye"
              src={isHovered ? avatars.hover : avatars.normal}
              sx={{
                width: 150,
                height: 150,
                border: "4px solid #85f",
                marginTop: 10,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Link>
        </motion.div>
        <Stack
          borderRadius={10}
          p={5}
          color="#403f3f"
          mt={-10}
          pt={15}
          textAlign="justify"
          maxWidth={600}
          sx={{ backgroundColor: "#fff" }}
          spacing={2}
        >
          <Typography variant="h5" component="h1">
            Hello there,
          </Typography>
          <Typography variant="body1">
            I am Tomide, and I extend a warm welcome to MerisLabs.
          </Typography>
          <Typography variant="body1">
            Over the past 4 years, I have been crafting tailored software
            solutions for businesses across diverse industries. My mission is to
            understand your business inside out—your operations, model,
            customers, and goals. Together, we can harness the power of
            cutting-edge technologies to turn your boldest business ideas into
            reality.
          </Typography>
          <Typography variant="body1">
            Explore some of our impressive projects below that showcase the
            possibilities we can unlock together.
          </Typography>
          <Typography variant="body1">
            Ready to take the next step? Let us talk!
          </Typography>
          <Typography variant="body1">
            <span>📞 Call: +234 818 192 7251</span>
          </Typography>{" "}
          <Link href="mailto:tomideadeoye@gmail.com">
            <Typography variant="body1" color="#403f3f">
              📧 Email: tomideadeoye@gmail.com
            </Typography>{" "}
          </Link>
          <Typography variant="body1">
            I look forward to helping your business thrive.
          </Typography>
          <Typography variant="body1">
            Best regards,
            <br />
            Tomide
          </Typography>
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
        maxWidth="80%"
      >
        <Typography
          variant="h1"
          component="p"
          textTransform="uppercase"
          textAlign="center"
          sx={{
            fontSize: {
              xs: "24px",
              sm: "32px",
              md: "40px",
            },
          }}
        >
          We build Every kind of tech for businesses
        </Typography>
        <Typography variant="h4">We have built for:</Typography>
        <TypewriterEffect
          textItems={[
            "Fintechs: Dukka, QorePay",
            "Propertytech: Hiyalo, VerifyProp",
            "Legaltech: Jackson, Etti and Edu, Nigerian Institute of Chartered Arbitrators",
          ]}
        />
        <Typography
          variant="h4"
          component="p"
          sx={{
            fontSize: {
              md: "28px",
              sm: "24px",
              xs: "18px",
            },
          }}
        >
          Our expersise is describing your business model in code.
        </Typography>
      </Stack>
      <Stack direction={{ xs: "column", md: "row" }}>
        {offerings?.map((offering, index) => (
          <Offering key={index} offering={offering} />
        ))}
      </Stack>
      <PortDisplay />
    </Stack>
  );
};

export default HeroSection;

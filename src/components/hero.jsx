import React, { useEffect } from "react";
import { styled, css } from "@mui/material/styles";
import { Checkbox, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { AnimatedTextCharacter } from "../components/animations";
import { Offering } from "./Offering";
import { TypewriterEffect } from "../components/animations";
import { offerings } from "../constants/offerings.1";
import { PortDisplay } from "./PortDisplay";

const HeroSection = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-between"
      sx={{
        [(theme) => theme.breakpoints.down("md")]: { height: "auto" },
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={6}
        sx={{
          height: "60vh",
        }}
      >
        <Typography variant="h1" component="p" textTransform={"uppercase"}>
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

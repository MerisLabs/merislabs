import { Inter } from "next/font/google";
import Navigation from "../components/navigation";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import HeroSection from "@/components/Hero";
import RaisingCTA from "@/components/RaisingCTA";
import { useEffect, useState } from "react";

const Main = styled(Stack)`
  // background: linear-gradient(to right, #000000, #000080);
  padding: 2rem 2rem;
  color: #fff;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
`;
const Home = () => {
  const [currentColor, setCurrentColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prevColor) => (prevColor + 1) % 10); // Loop from 0 to 9
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Main
      style={{
        background: `linear-gradient(to right, #000000, #0000${currentColor}0`,
      }}
    >
      <Navigation />
      <HeroSection />
      <RaisingCTA />
    </Main>
  );
};

export default Home;

import React from "react";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { useRouter } from "next/router";

export function Offering({ offering }) {
  const images = offering?.samples;
  const [image, setImage] = React.useState(images[0]);
  const router = useRouter();

  // change the image every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);
  return (
    <Stack
      height="100%"
      px={10}
      justifyContent="center"
      spacing={2}
      cursor="pointer"
    >
      <Stack spacing={2}>
        <Box
          component="img"
          src={`/images/${image}`}
          alt="hero image zypto"
          width="250px"
          height="400px"
          sx={{
            objectFit: "contain",
            borderRadius: "10px",
            border: "0.1px solid #fff",
            backgroundColor: "#fff",
          }}
        />

        <Typography
          variant="h6"
          component="p"
          sx={{
            textTransform: "uppercase",
            fontSize: "1.1rem",
          }}
        >
          {offering.title}
        </Typography>
        <Typography variant="body" component="p">
          {offering.description}
        </Typography>
      </Stack>

      <Typography variant="body" component="p">
        Clients
      </Typography>

      <Stack direction="row" spacing={2}>
        {offering.clients.map((client, index) => (
          <Tooltip title={client.name} key={index}>
            <a href={client.website} target="_blank" rel="noopener noreferrer">
              <Box
                component="img"
                src={client.image}
                alt="hero image zypto"
                width="30px"
                height="30px"
                sx={{
                  objectFit: "contain",
                  borderRadius: "50%",
                  border: "0.5px solid #fff",
                  backgroundColor: "#fff",
                }}
              />
            </a>
          </Tooltip>
        ))}
      </Stack>
    </Stack>
  );
}

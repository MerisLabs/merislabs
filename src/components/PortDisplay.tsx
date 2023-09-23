import React, { useState } from "react";
import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import { DisplayProjectType } from "./DisplayProjectType";
import { offerings } from "@/constants/offerings.1";

export function PortDisplay() {
  const options = [
    "All",
    "Frontend",
    "Mobile",
    "Backend",
    "Webscraping",
    "Design",
  ];
  const projects = offerings
    ?.map((project) => {
      return project?.projects;
    })
    ?.flat();

  const [personOption, setPersonOption] = React.useState([options[0]]);
  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        backgroundColor: "black",
      },
    },
  };

  return (
    <Stack
      spacing={3}
      m={{
        xs: 0,
        sm: 0,
        md: 5,
        lg: 5,
      }}
      justifyContent="center"
      alignItems="center"
      height="100%"
      maxWidth={1200}
    >
      <Stack
        width="100%"
        spacing={5}
        p={5}
        sx={{
          overflow: "scroll",
          // backgroundColor: (theme) => theme.palette.background.backgroundAccent,
          borderRadius: "10px",
          position: "relative",
        }}
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        {projectsToDisplay?.map((project, index) => (
          <Stack
            direction={"column"}
            spacing={5}
            key={index}
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              alignItems="center"
              justifyContent="center"
              width="100%"
              display="flex"
            >
              {project?.video?.endsWith("mov") ||
              project?.video?.endsWith("mp4") ? (
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  src={project?.video}
                  width="auto"
                  height="300px"
                  style={{
                    borderRadius: "10px",
                  }}
                />
              ) : (
                <img
                  src={`/images/${project?.video}` || ""}
                  alt={project.name}
                  width="300px"
                  height="auto"
                  style={{
                    borderRadius: "10px",
                    padding: "0 40px",
                    alignSelf: "center",
                  }}
                />
              )}
              <Stack spacing={3} py={5} alignSelf="flex-start">
                <Typography
                  textTransform={"uppercase"}
                  variant="h3"
                  component="p"
                >
                  {project?.name}
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  lineHeight={2}
                  fontWeight={200}
                >
                  {project?.description}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {Array.isArray(project?.tooling) &&
                    project?.tooling.map((tool, index) => (
                      <Chip
                        key={index}
                        label={tool}
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

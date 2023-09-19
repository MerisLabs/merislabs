import React, { useState } from "react";
import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { DisplayProjectType } from "./DisplayProjectType";

export function PortDisplay({ offerings }) {
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

  const theme = useTheme();

  const handleChange = (event) => {
    const valuesArray = event.target.value;
    if (valuesArray.length === 0) {
      setPersonOption(["All"]);
      setProjectsToDisplay(projects);
      return;
    }

    const filteredProjects = projects.filter((project) => {
      return valuesArray.some((value) => {
        return JSON.stringify(project)
          .toLowerCase()
          .includes(value.toLowerCase());
      });
    });

    const {
      target: { value },
    } = event;

    if (value[value.length - 1] !== "All") {
      let newval = typeof value === "string" ? valuesArray.split(",") : value;
      newval = newval.filter((val) => val !== "All");
      setPersonOption(newval);
      setProjectsToDisplay(filteredProjects);
    } else {
      setPersonOption(["All"]);
      setProjectsToDisplay(projects);
    }
  };

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

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
      color: "white",
      fontSize: 11,
    };
  }

  return (
    <Stack
      spacing={3}
      m={{
        xs: 0,
        sm: 0,
        md: 5,
        lg: 5,
      }}
      jusitfyContent="center"
      alignItems="center"
      height="100%"
    >
      <Stack
        w="100%"
        spacing={5}
        p={5}
        sx={{
          overflow: "scroll",
          backgroundColor: (theme) => theme.palette.background.backgroundAccent,
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
            {project.video?.endsWith("mov") ||
            project.video?.endsWith("mp4") ? (
              <Box
                alignItems="center"
                justifyContent="center"
                width="100%"
                display="flex"
              >
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
              </Box>
            ) : (
              <DisplayProjectType project={project} />
            )}
            <Stack
              width="100%"
              spacing={2}
              divider={<Divider />}
              sx={{
                jusitfyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  textTransform: "uppercase",
                }}
              >
                {project?.name}
              </Typography>
              <Typography variant="body">{project?.description}</Typography>
              <Stack direction="row" spacing={2}>
                {(Array.isArray(project?.tooling) &&
                  project?.tooling.map((tool, index) => (
                    <Chip
                      key={index}
                      label={tool}
                      variant="outlined"
                      color="primary"
                    />
                  ))) ||
                  []}
              </Stack>

              <a href={project?.link} target="_blank" rel="noopener noreferrer">
                <Typography variant="body">Visit</Typography>
              </a>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

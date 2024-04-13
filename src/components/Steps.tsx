import { Box } from "@mui/material";
import React from "react";

interface IStepsProps {
  currentStep: number;
  stepCount: number;
}

export const Steps: React.FC<IStepsProps> = ({ currentStep, stepCount }) => {
  const width = `${100 / stepCount}%`;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        gap: "5px",
      }}
    >
      {Array.from({ length: stepCount }).map((_, index) => {
        if (index < currentStep)
          return (
            <Box
              key={index}
              sx={{
                width: { width },
                height: "10px",
                backgroundColor: "black",
              }}
            ></Box>
          );
        else if (index === currentStep)
          return (
            <Box
              key={index}
              sx={{ width: { width }, height: "10px", backgroundColor: "red" }}
            ></Box>
          );
        else
          return (
            <Box
              key={index}
              sx={{ width: { width }, height: "10px", backgroundColor: "grey" }}
            ></Box>
          );
      })}
    </Box>
  );
};

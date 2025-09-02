import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DividerWithText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Box sx={{ borderBottom: "2px solid lightgray", flex: 1 }} />
      <Typography
        sx={{
          px: 2,
          py: 0.5,
          fontWeight: 500,
          fontSize: 22,
          color: "lightgray",
          whiteSpace: "nowrap"
        }}
      >
        {children}
      </Typography>
      <Box sx={{ borderBottom: "2px solid lightgray", flex: 1 }} />
    </Box>
  );
};

export default DividerWithText;

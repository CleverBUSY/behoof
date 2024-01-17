import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ children, icon, bgColor, textColor }) => {
  return (
    <MuiButton
      variant="contained"
      endIcon={icon}
      sx={{
        textTransform: "none",
        backgroundColor: bgColor ?bgColor : "#FF4D4D",
        fontWeight: "500",
        fontFamily: "Inter",
        fontSize: 16,
        p: "8.5px 20px",
        color: textColor ? textColor : "#fff",
        "&:hover": {
          backgroundColor: "#FF4D4D",
        },
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;

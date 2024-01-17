import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as SearchIcon } from "../../../../assets/svg/search.svg";

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{
        boxShadow: "none",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: "#F2F5F9",
        p: "8px 20px",
        display: "flex",
        alignItems: "center",
        width: 640,
        height: 52,
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1,
        }}
        placeholder="Поиск"
        inputProps={{ "aria-label": "Поиск" }}
      />
    </Paper>
  );
}

import React from "react";
import Button from "@mui/material/Button";

export function ChangeButton(props) {
  const { handleClick, label } = props;

  return (
    <Button
      variant="contained"
      aria-label={label}
      onClick={handleClick}
      style={{
        margin: "12px",
      }}
    >
      Text
    </Button>
  );
}

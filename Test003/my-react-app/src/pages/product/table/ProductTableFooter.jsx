import React from "react";
import { FormControlLabel, Switch } from "@mui/material";

export const ProductTableFooter = ({ table, setTable }) => {
  const { dense } = table;

  const handleChangeDense = (event) => {
    setTable({
      ...table,
      dense: event.target.checked,
    });
  };

  return (
    <FormControlLabel
      control={<Switch checked={dense} onChange={handleChangeDense} />}
      label="Dense padding"
    />
  );
};

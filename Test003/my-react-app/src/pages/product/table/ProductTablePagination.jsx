import React from "react";
import { TablePagination } from "@mui/material";

export const ProductTablePagination = ({ table, setTable }) => {
  const { page, rowsPerPage, data, rowsPerPageOptions } = table;

  const handleChangePage = (_event, newPage) => {
    setTable({
      ...table,
      page: newPage,
    });
  };

  const handleChangeRowsPerPage = (event) => {
    setTable({
      ...table,
      page: 0,
      rowsPerPage: parseInt(event.target.value, 10),
    });
  };

  return (
    <TablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      component="div"
      count={data.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

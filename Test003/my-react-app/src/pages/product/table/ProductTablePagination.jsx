import React from "react";
import TablePagination from "@mui/material/TablePagination";

export const ProductTablePagination = ({ table, setTable }) => {
  const { page, rowsPerPage, data } = table;

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
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={data.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

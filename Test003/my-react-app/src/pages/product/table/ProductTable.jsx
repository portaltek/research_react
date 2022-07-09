import React, { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import {
  DefaultTableConfig,
  handleSelectAllClick,
  handleSortByClick,
} from "../../common/table/SortTable";
import { ProductTableBody } from "./ProductTableBody";
import { ProductTableHeader } from "./ProductTableHeader";
import { productTableSampleData } from "./ProductTableSampleData";
import { ProductTableToolbar } from "./ProductTableToolbar";
import { ProductTablePagination } from "./ProductTablePagination";

export const ProductTable = () => {
  const [table, setTable] = useState({
    ...DefaultTableConfig,
    orderBy: "calories",
    data: productTableSampleData,
  });
  const { order, orderBy, dense, selected, data } = table;

  const handleSortBy = handleSortByClick(table, setTable);

  const handleSelectAll = handleSelectAllClick(table, setTable);

  const handleChangeDense = (event) => {
    setTable({
      ...table,
      dense: event.target.checked,
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <ProductTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <ProductTableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAll}
              onRequestSort={handleSortBy}
              rowCount={data.length}
            />
            <ProductTableBody {...{ table, setTable }} />
          </Table>
        </TableContainer>
        <ProductTablePagination {...{ table, setTable }} />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
};

import React, { useState } from "react";
import { Box, Table, TableContainer, Paper } from "@mui/material";
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
import { ProductTableFooter } from "./ProductTableFooter";

export const ProductTable = () => {
  const [table, setTable] = useState({
    ...DefaultTableConfig,
    orderBy: "calories",
    data: productTableSampleData,
  });
  const { order, orderBy, dense, selected, data } = table;

  const handleSortBy = handleSortByClick(table, setTable);

  const handleSelectAll = handleSelectAllClick(table, setTable);

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
      <ProductTableFooter {...{ table, setTable }} />
    </Box>
  );
};

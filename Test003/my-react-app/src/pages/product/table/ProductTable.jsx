import React, { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { ProductTableHeader } from "./ProductTableHeader";
import { ProductTableToolbar } from "./ProductTableToolbar";
import {
  getComparator,
  stableSort,
  DefaultTableConfig,
  handleSelectAllClick,
  handleSortByClick,
  handleSelectRowClick,
  calculateEmptyRows,
  calculateEmptyRowsHeight,
} from "../../common/table/SortTable";
import { productTableSampleData } from "./ProductTableSampleData";

export const ProductTable = () => {
  const [table, setTable] = useState({
    ...DefaultTableConfig,
    orderBy: "calories",
    data: productTableSampleData,
  });
  const { page, order, orderBy, rowsPerPage, dense, selected, data } = table;

  const handleSortBy = handleSortByClick(table, setTable);

  const handleSelectAll = handleSelectAllClick(table, setTable);

  const handleSelectRow = handleSelectRowClick(table, setTable);

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

  const handleChangeDense = (event) => {
    setTable({
      ...table,
      dense: event.target.checked,
    });
  };

  const isSelectedRow = (name) => selected.indexOf(name) !== -1;
  const emptyRows = calculateEmptyRows(table);
  const emptyRowsHeight = calculateEmptyRowsHeight(table);

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
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelectedRow(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleSelectRow(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: emptyRowsHeight,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
};

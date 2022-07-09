import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";

import {
  getComparator,
  stableSort,
  handleSelectRowClick,
  calculateEmptyRows,
  calculateEmptyRowsHeight,
} from "../../common/table/SortTable";
import { StyledTableRow } from "../../common/table/StyledTable";

export const ProductTableBody = ({ table, setTable }) => {
  const { page, dense, order, orderBy, rowsPerPage, selected, data } = table;

  const handleSelectRow = handleSelectRowClick(table, setTable);

  const isSelectedRow = (name) => selected.indexOf(name) !== -1;
  const emptyRows = calculateEmptyRows(table);
  const emptyRowsHeight = calculateEmptyRowsHeight(dense, emptyRows);

  return (
    <TableBody>
      {stableSort(data, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelectedRow(row.name);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <StyledTableRow
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
              <TableCell component="th" id={labelId} scope="row" padding="none">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </StyledTableRow>
          );
        })}
      {emptyRows > 0 && (
        <StyledTableRow
          style={{
            height: emptyRowsHeight,
          }}
        >
          <TableCell colSpan={6} />
        </StyledTableRow>
      )}
    </TableBody>
  );
};

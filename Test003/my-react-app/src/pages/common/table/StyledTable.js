import { TableRow, TableCell, tableCellClasses } from "@mui/material";

import { styled } from "@mui/material/styles";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.table.header.backgroundColor,
    color: theme.palette.table.header.color,
    fontSize: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.table.oddRow.backgroundColor,
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.table.evenRow.backgroundColor,
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.table.selectedRow.backgroundColor,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

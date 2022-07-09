function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const DefaultTableConfig = {
  order: "asc",
  orderBy: "",
  dense: true,
  page: 0,
  rowsPerPage: 5,
  selected: [],
  data: [],
};

export function handleSortByClick(tableState, setTableState) {
  const { orderBy, order } = tableState;

  return (_event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setTableState({
      ...tableState,
      order: isAsc ? "desc" : "asc",
      orderBy: property,
    });
  };
}

export function handleSelectAllClick(table, setTable) {
  return (event) => {
    if (event.target.checked) {
      const newSelecteds = table.data.map((n) => n.name);

      setTable({
        ...table,
        selected: newSelecteds,
      });
      return;
    }

    setTable({
      ...table,
      selected: [],
    });
  };
}

export function handleSelectRowClick(table, setTable) {
  const { selected } = table;
  return (_event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setTable({
      ...table,
      selected: newSelected,
    });
  };
}

export function calculateEmptyRows(table) {
  const { page, rowsPerPage, data } = table;
  return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
}

export function calculateEmptyRowsHeight(table) {
  const { dense, emptyRows } = table;
  return (dense ? 33 : 53) * emptyRows;
}

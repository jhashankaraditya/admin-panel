import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { userData } from "../../Data/Data";
import "./DataGrid.css";

const DataGridComponent = () => {
  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "address", headerName: "Address", flex: 2 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "state", headerName: "State", flex: 1 },
  ];

  const rows = userData.map((user, index) => ({
    id: index,
    firstName: user.name?.firstName,
    lastName: user.name?.lastName,
    address: user.address,
    city: user.city,
    state: user.state,
  }));

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="table-container">
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15]}
          checkboxSelection
          disableSelectionOnClick
        />
      </ThemeProvider>
    </div>
  );
};

export default DataGridComponent;
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import { LockOpenOutlined } from "@mui/icons-material";
import { SecurityOutlined } from "@mui/icons-material";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { Header } from "../../components/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";

type renderType = {
  row: {
    access: string;
  };
};

export const Vacancies = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }: renderType) => {
        return (
          <Box
            width={"60%"}
            m={"0 auto"}
            p={"5px"}
            display={"flex"}
            justifyContent={"center"}
            borderRadius={"4px"}
            color={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}

            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m={"20px"}>
      <Header
        title={"Vacancies"}
        subtitle={"All the Vacancies for Mythod Pvt Ltd"}
      />
      <Box
        m={"40px 0 0 0"}
        height={"75vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid columns={columns} rows={mockDataTeam}></DataGrid>
      </Box>
    </Box>
  );
};

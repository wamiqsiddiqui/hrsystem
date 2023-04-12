import { Box } from "@mui/system";
import { Header } from "../../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns: GridColDef[] = [
    {
      field: "picture",
      headerName: "Profile Picture",
      flex: 1,
      renderCell: ({ row: { picture } }) => {
        return (
          <Box width={"60%"}>
            {" "}
            <img
              src={picture}
              alt="profile-user"
              width={"10"}
              height={"10px"}
            />
          </Box>
        );
      },
    },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
  ];
  /**
   * export type UserObject = {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  hd: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: string;
  picture: string;
  sub: string;
};
   */
  return (
    <Box m={"20px"}>
      <Header
        title={"Mythod HR System Users"}
        subtitle={"Manage Users, assign them roles and view their activities"}
      />
      <Box
        m={"40px 0 0px 0"}
        width={"100%"}
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
        <DataGrid columns={columns} rows={[]}></DataGrid>
      </Box>
    </Box>
  );
};

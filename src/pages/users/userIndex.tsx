import { Box } from "@mui/system";
import { Header } from "../../components/Header";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { UserObject, UserRoles } from "../../models/UserObject";

const getUserList = (): UserObject[] => {
  let keys = Object.keys(localStorage);
  console.log(keys);
  let userKeys = keys.filter((value) => {
    return value.includes("registered");
  });
  console.log(userKeys);
  let users: UserObject[] = [];
  userKeys.forEach((element) => {
    console.log(element);
    if (localStorage.getItem(element)) {
      users.push(JSON.parse(localStorage.getItem(element) ?? "") as UserObject);
    }
  });
  console.log(users);
  users.forEach((element) => {
    if (element.name.includes("Suheyl")) {
      element.role = UserRoles.Manager;
    } else if (element.name.includes("Sukaina")) {
      element.role = UserRoles.Admin;
    } else {
      element.role = UserRoles.Employee;
    }
  });
  return users;
};
type RenderRoleCellType = {
  row: { role: UserRoles };
};
export const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns: GridColDef[] = [
    {
      field: "picture",
      headerName: "Profile Picture",
      align: "center",
      renderCell: ({ row: { picture } }) => {
        return (
          <Box width={"60%"}>
            <img
              src={picture}
              alt="profile-user"
              width={"30px"}
              height={"30px"}
            />
          </Box>
        );
      },
    },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "role",
      headerName: "User Role",
      flex: 1,
      align: "left",
      renderCell: ({ row: { role } }: RenderRoleCellType) => {
        return (
          <Box
            width={"60%"}
            p={"5px"}
            display={"flex"}
            justifyContent={"center"}
            borderRadius={"4px"}
            sx={{
              backgroundColor:
                role === UserRoles.Admin
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700],
            }}
          >
            {role === UserRoles.Admin && <AdminPanelSettingsOutlined />}
            {role === UserRoles.Manager && <SecurityOutlined />}
            {role === UserRoles.Employee && <LockOpenOutlined />}

            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];
  const users = getUserList();
  return (
    <Box m={"20px"}>
      <Header
        title={"Mythod HR System Users"}
        subtitle={"Manage Users, assign them roles and view their activities"}
      />
      <Box
        m={"40px 0 0px 0"}
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
        <DataGrid
          getRowId={(row) => row.sub}
          columns={columns}
          rows={users}
        ></DataGrid>
      </Box>
    </Box>
  );
};

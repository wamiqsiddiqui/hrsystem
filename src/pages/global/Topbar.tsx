import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { InputBase } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent={"space-between"} p={2}>
      {/* Search Bar */}
      <Box display="flex" color={colors.primary[400]} borderRadius={"3px"}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display={"flex"}>
        <Tooltip
          children={
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          }
          title={"Switch Theme"}
        />
        <Tooltip
          children={
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
          }
          title={"Notifications"}
        />
        <Tooltip
          children={
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
          }
          title={"Settings"}
        />
        <Tooltip
          children={
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
          }
          title={"Profile"}
        />
        <Tooltip
          children={
            <IconButton>
              <LogoutIcon />
            </IconButton>
          }
          title={"Logout"}
        />
      </Box>
    </Box>
  );
};
export default Topbar;

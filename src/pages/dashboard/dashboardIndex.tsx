import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import "../../dashboard.css";
import { Header } from "../../components/Header";
import { UploadCV } from "../../components/UploadCV";

const Dashboard = () => {
  return (
    <Box m={"20px"}>
      <Box
        alignContent={"start"}
        display="flex"
        justifyContent={"space-between"}
        alignItems={"start"}
      >
        <Header title={"DASHBOARD"} subtitle={"Welcome to your Dashboard"} />
        <UploadCV />
      </Box>
    </Box>
  );
};
export default Dashboard;

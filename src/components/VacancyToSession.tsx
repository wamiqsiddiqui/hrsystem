import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { tokens } from "../theme";
import { ReactEventHandler, useState } from "react";

type vacancyProps = {
  vacancyTitle: string;
};
const VacancyBox = ({ vacancyTitle }: vacancyProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        p: "12px",
        m: "2px",
        backgroundColor: colors.blueAccent[500],
        borderColor: colors.greenAccent[500],
        gridColumn: "span 2",
      }}
    >
      <Typography flex={2}>{vacancyTitle}</Typography>
      <IconButton>
        <CancelIcon />
      </IconButton>
    </Box>
  );
};
export const VacancyToSession = () => {
  //   const vacanciesList: Array<string> = [];
  const [vacanciesList, setVacanciesList] = useState([] as string[]);
  const [selectedVacancy, setSelectedVacancy] = useState("vacancy 1");
  const handleSelect = (event: any) => {
    console.log(event);
    setSelectedVacancy(event.target.value);
    setVacanciesList((vacanciesList) => [...vacanciesList, event.target.value]);
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ gridColumn: "span 2" }}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        width={"100%"}
        justifyContent={"space-between"}
        sx={{ gridColumn: "span 2", m: "12px 0 12px 0" }}
      >
        <Select
          variant="filled"
          sx={{ gridColumn: "span 2", flex: 2, mr: "12px" }}
          defaultValue=""
          value={selectedVacancy}
          name="vacancy"
          onChange={handleSelect}
        >
          <MenuItem value={"vacancy 1"}>Vacancy 1</MenuItem>
          <MenuItem value={"vacancy 2"}>Vacancy 2</MenuItem>
          <MenuItem value={"vacancy 3"}>Vacancy 3</MenuItem>
          <MenuItem value={"vacancy 4"}>Vacancy 4</MenuItem>
          <MenuItem value={"vacancy 5"}>Vacancy 5</MenuItem>
        </Select>
        <Button
          component={Link}
          to="/form"
          variant="outlined"
          color="secondary"
          type="button"
          sx={{ mt: "0px" }}
        >
          Add New Vacancy
        </Button>
      </Box>
      {vacanciesList.map((element) => (
        <VacancyBox vacancyTitle={element} />
      ))}
    </Box>
  );
};

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { tokens } from "../theme";
import {
  ChangeEvent,
  ChangeEventHandler,
  ReactEventHandler,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

type vacancyProps = {
  vacancyTitle: string;
  onRemoveVacancy: (title: string) => void;
};
const VacancyBox = ({ vacancyTitle, onRemoveVacancy }: vacancyProps) => {
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
      <IconButton onClick={() => onRemoveVacancy(vacancyTitle)}>
        <CancelIcon />
      </IconButton>
    </Box>
  );
};
export const VacancyToSession = () => {
  const [selectedVacanciesList, setSelectedVacanciesList] = useState(
    [] as string[]
  );
  const [vacanciesList, setVacanciesList] = useState([
    "Attach Vacancy",
    "Vacancy 1",
    "Vacancy 2",
    "Vacancy 3",
    "Vacancy 4",
    "Vacancy 5",
    "Vacancy 6",
  ]);
  const onVacancyRemoveClick = (vacancyTitle: string) => {
    setSelectedVacanciesList((vacanciesList) =>
      vacanciesList.filter((element) => element != vacancyTitle)
    );
    setVacanciesList((vacanciesList) => [...vacanciesList, vacancyTitle]);
  };
  const handleSelect = (event: SelectChangeEvent<string>) => {
    console.log(event);
    setSelectedVacanciesList((vacanciesList) => [
      ...vacanciesList,
      event.target.value,
    ]);
    setVacanciesList((vacanciesList) =>
      vacanciesList.filter((element) => element != event.target.value)
    );
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
          fullWidth
          sx={{ gridColumn: "span 2", flex: 2, mr: "12px" }}
          defaultValue="Attach Vacancy"
          value="Attach Vacancy"
          onChange={handleSelect}
        >
          {vacanciesList.map((value) => (
            <MenuItem
              value={value}
              disabled={value == "Attach Vacancy" ? true : false}
            >
              {value}
            </MenuItem>
          ))}
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
      {selectedVacanciesList.map((element) => (
        <VacancyBox
          vacancyTitle={element}
          onRemoveVacancy={onVacancyRemoveClick}
        />
      ))}
    </Box>
  );
};

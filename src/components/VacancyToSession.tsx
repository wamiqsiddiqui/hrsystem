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
import { VacancyTypes } from "./AddVacancyTemp";

type vacancyProps = {
  vacancyTitle: VacancyTypes;
  onRemoveVacancy: (title: VacancyTypes) => void;
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
      <Typography flex={2}>{vacancyTitle.title}</Typography>
      <IconButton onClick={() => onRemoveVacancy(vacancyTitle)}>
        <CancelIcon />
      </IconButton>
    </Box>
  );
};
export const VacancyToSession = () => {
  const [selectedVacanciesList, setSelectedVacanciesList] = useState(
    [] as VacancyTypes[]
  );
  const vacancies: VacancyTypes[] = JSON.parse(
    localStorage.getItem("vacancies") ?? ""
  );
  const [vacanciesList, setVacanciesList] = useState([
    ...vacancies,
  ] as VacancyTypes[]);
  const onVacancyRemoveClick = (vacancyTitle: VacancyTypes) => {
    setSelectedVacanciesList((vacanciesList: VacancyTypes[]) =>
      vacanciesList.filter((element) => element.title != vacancyTitle.title)
    );
    setVacanciesList((vacanciesList) => [...vacanciesList, vacancyTitle]);
  };
  const handleSelect = (event: SelectChangeEvent<string>) => {
    console.log(event);
    setSelectedVacanciesList((vacanciesList: VacancyTypes[]) => [
      ...vacanciesList,
      JSON.parse(event.target.value),
    ]);
    setVacanciesList((vacanciesList: VacancyTypes[]) =>
      vacanciesList.filter((element: VacancyTypes) => {
        console.log(`handleSelect = ${element}`);
        console.log(`target = ${JSON.parse(event.target.value)}`);
        return element.title != JSON.parse(event.target.value).title;
      })
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
          <MenuItem value={"Attach Vacancy"} disabled>
            {"Attach Vacancy"}
          </MenuItem>
          {vacanciesList.map((value: VacancyTypes) => (
            <MenuItem
              value={JSON.stringify(value)}
              disabled={value.title == "Attach Vacancy" ? true : false}
            >
              {value.title}
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
      {selectedVacanciesList.map((element: VacancyTypes) => (
        <VacancyBox
          vacancyTitle={element}
          onRemoveVacancy={onVacancyRemoveClick}
        />
      ))}
    </Box>
  );
};

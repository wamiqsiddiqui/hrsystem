import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { Header } from "../../components/Header";
import { Formik, FormikValues } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

type sessionTypes = {
  sessionTitle: string;
  startsOn: Date;
  endsOn: Date;
  objective: string;
  sessionBudget: number | null;
};
const initialValues: sessionTypes = {
  sessionTitle: "",
  startsOn: new Date("12/12/2023"),
  endsOn: new Date(),
  objective: "",
  sessionBudget: null,
};
const validationSchema = yup.object().shape({
  sessionTitle: yup.string().required("Title is required"),
  startsOn: yup.string().required("Please select session starting date"),
  endsOn: yup.string().required("Please select session ending date"),
  objective: yup.string().required("Please enter your session objective"),
  sessionBudget: yup.string().required("Please enter session budget"),
});
export const AddHiringSession = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values: FormikValues) => {
    console.log(values);
  };
  return (
    <Box m={"20px"}>
      <Header
        title={"Hiring Session"}
        subtitle={"Add a new Hiring Session"}
      ></Header>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display={"grid"}
              gap={"30px"}
              gridTemplateColumns={"repeat(4, minmax(0, 1fr))"}
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
              }}
            >
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sessionTitle}
                variant="filled"
                type="type"
                name="sessionTitle"
                label="Session Title"
                error={!!touched.sessionTitle && !!errors.sessionTitle}
                helperText={touched.sessionTitle && errors.sessionTitle}
                sx={{ gridColumn: "span 2" }}
              ></TextField>
              <Box sx={{ gridColumn: "span 2" }}></Box>
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.startsOn}
                variant="filled"
                type="date"
                name="startsOn"
                label="Starts On"
                error={!!touched.startsOn && !!errors.startsOn}
                // helperText={touched.startsOn && errors.startsOn}
                sx={{ gridColumn: "span 1" }}
              ></TextField>
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.endsOn}
                variant="filled"
                type="date"
                name="endsOn"
                label="Ends On"
                error={!!touched.endsOn && !!errors.endsOn}
                // helperText={touched.endsOn && errors.endsOn}
                sx={{ gridColumn: "span 1" }}
              ></TextField>
              <Box sx={{ gridColumn: "span 2" }}></Box>
              <TextField
                onChange={handleChange}
                multiline
                rows={3}
                maxRows={3}
                onBlur={handleBlur}
                value={values.objective}
                variant="filled"
                type="input"
                name="objective"
                label="Objective"
                error={!!touched.objective && !!errors.objective}
                helperText={touched.objective && errors.objective}
                sx={{ gridColumn: "span 2" }}
              ></TextField>
              <Box sx={{ gridColumn: "span 2" }}></Box>
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sessionBudget}
                variant="filled"
                type="text"
                name="sessionBudget"
                label="Session Budget"
                error={!!touched.sessionBudget && !!errors.sessionBudget}
                helperText={touched.sessionBudget && errors.sessionBudget}
                sx={{ gridColumn: "span 2" }}
              ></TextField>
              <Box sx={{ gridColumn: "span 2" }}></Box>
              <Select
                variant="filled"
                sx={{ gridColumn: "span 1" }}
                value={"vacancy 1"}
              >
                <MenuItem value={"vacancy 1"}>Vacancy 1</MenuItem>
                <MenuItem value={"vacancy 2"}>Vacancy 2</MenuItem>
                <MenuItem value={"vacancy 3"}>Vacancy 3</MenuItem>
                <MenuItem value={"vacancy 4"}>Vacancy 4</MenuItem>
                <MenuItem value={"vacancy 5"}>Vacancy 5</MenuItem>
              </Select>

              <Box display={"block"} sx={{ gridColumn: "span 2" }}>
                <Button
                  component={Link}
                  to="/form"
                  variant="outlined"
                  color="secondary"
                  type="button"
                  sx={{ mt: "10px" }}
                >
                  Add New Vacancy
                </Button>
              </Box>
              <Box display={"block"} sx={{ gridColumn: "span 2" }} mt={"10px"}>
                <Button
                  fullWidth
                  color="secondary"
                  type="submit"
                  variant="contained"
                >
                  Add New Session
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

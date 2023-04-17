import {
  Box,
  Button,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, FormikValues } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Header } from "../../components/Header";
import { tokens } from "../../theme";
import { VacancyTypes } from "../../models/Vacancy";

const initialValues: VacancyTypes = {
  title: "",
  phoneNumber: null,
  type: "Permanant",
  noOfOpenings: null,
  aboutTheJob: "",
  responsibilities: "",
  requirements: "",
  experienceRequired: "",
  status: true,
  budgetPerOpening: "",
};
const phoneRegex =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegex, "Invalid Phone Number")
    .required("Phone Number is required"),
  type: yup.string().required("Type is Required"),
  budgetPerOpening: yup.string().required("Budget is Required"),
  noOfOpenings: yup.string().required("Number of Openings is Required"),
  aboutTheJob: yup.string().required("Job Description is Required"),
  responsibilities: yup.string().required("Responsibilities is Required"),
  requirements: yup.string().required("Requirements is Required"),
});

type AddVacancyProp = {
  isFromSession?: boolean;
};
export const AddVacancy = ({ isFromSession = false }: AddVacancyProp) => {
  const { isFromSessionn } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values: FormikValues) => {
    console.log(values);
    const value = localStorage.getItem("vacancies");
    console.log(value);
    if (value) {
      const vacancies = JSON.parse(localStorage.getItem("vacancies") ?? "");
      localStorage.setItem("vacancies", JSON.stringify([...vacancies, values]));
    } else {
      localStorage.setItem("vacancies", JSON.stringify([values]));
    }
    console.log("isFromSession = ", isFromSessionn);
    if (isFromSessionn) {
      navigate(-1);
    }
  };
  return (
    <Box m={"20px"}>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
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
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Header
                title={"Add Vacancy"}
                subtitle={"New Vacancy for Mythod Pvt Ltd"}
              ></Header>
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Switch
                    value={values.status}
                    name="status"
                    defaultChecked
                    onBlur={handleBlur}
                    onChange={handleChange}
                    color="secondary"
                  />
                }
                label={"Vacancy Active Status"}
                sx={{ justifyContent: "start", gridColumn: "span 2" }}
              ></FormControlLabel>
            </Box>
            <Box
              display={"grid"}
              gap={"30px"}
              gridTemplateColumns={"repeat(4, minmax(0, 1fr))"}
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                name="phoneNumber"
                error={!!touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ gridColumn: "span 2" }}
              />
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"start"}
                sx={{ gridColumn: "span 2" }}
              >
                <Typography
                  variant="h6"
                  color={colors.greenAccent[400]}
                  fontWeight={"bold"}
                  sx={{ flex: 1, pr: "6px" }}
                >
                  Employment Type:
                </Typography>
                <Select
                  variant="filled"
                  name="type"
                  label="Employment Type"
                  error={!!touched.type && !!errors.type}
                  sx={{ flex: 4 }}
                  value={values.type}
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <MenuItem value={"Permanant"}>Permanant</MenuItem>
                  <MenuItem value={"Part Time"}>Part Time</MenuItem>
                  <MenuItem value={"Contract"}>Contract</MenuItem>
                </Select>
              </Box>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Number Of Openings"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.noOfOpenings}
                name="noOfOpenings"
                error={!!touched.noOfOpenings && !!errors.noOfOpenings}
                helperText={touched.noOfOpenings && errors.noOfOpenings}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Budget Per Opening"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.budgetPerOpening}
                name="budgetPerOpening"
                error={!!touched.budgetPerOpening && !!errors.budgetPerOpening}
                helperText={touched.budgetPerOpening && errors.budgetPerOpening}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Experience Required"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.experienceRequired}
                name="experienceRequired"
                error={
                  !!touched.experienceRequired && !!errors.experienceRequired
                }
                helperText={
                  touched.experienceRequired && errors.experienceRequired
                }
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="About the Job"
                multiline
                rows={5}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.aboutTheJob}
                name="aboutTheJob"
                error={!!touched.aboutTheJob && !!errors.aboutTheJob}
                helperText={touched.aboutTheJob && errors.aboutTheJob}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Responsibilities"
                multiline
                rows={5}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.responsibilities}
                name="responsibilities"
                error={!!touched.responsibilities && !!errors.responsibilities}
                helperText={touched.responsibilities && errors.responsibilities}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Requirements"
                multiline
                rows={5}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.requirements}
                name="requirements"
                error={!!touched.requirements && !!errors.requirements}
                helperText={touched.requirements && errors.requirements}
                sx={{ gridColumn: "span 2" }}
              />
              <Box sx={{ gridColumn: "span 2" }}>
                <Button
                  color="secondary"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ p: "16px" }}
                >
                  Add New Vacancy
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

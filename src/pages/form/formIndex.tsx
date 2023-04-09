import { Box, Button, TextField } from "@mui/material";
import {Formik} from 'formik';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Header } from "../../components/Header";
type VacancyTypes = {
  title?: string,
  type?: string,
  noOfOpenings?: number
  aboutTheJob?: string,
  responsibilities?: string,
  requirements?: string
}
const initialValues = {
  title: '',
  phoneNumber:'',
  type: '',
  noOfOpenings:'',
  aboutTheJob:'',
  responsibilities:'',
  requirements:''
} 
const phoneRegex = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  phoneNumber: yup.string().matches(phoneRegex,"Invalid Phone Number").required("Phone Number is required"),
  type: yup.string().required("Type is Required"),
  noOfOpenings:yup.string().required("Number of Openings is Required"),
  aboutTheJob:yup.string().required("Job Description is Required"),
  responsibilities:yup.string().required("Responsibilities is Required"),
  requirements:yup.string().required("Requirements is Required")
})
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)")
  const handleFormSubmit = (values: any) => {
    console.log(values)
  }
  return <Box m={"20px"}> 
    <Header title={"Add Vacancy"} subtitle={"New Vacancy for Mythod Pvt Ltd"}></Header>
    <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
      {({ values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
        <form onSubmit={handleSubmit}>
          <Box display={"grid"} gap={"30px"} gridTemplateColumns={"repeat(4, minmax(0, 1fr))"} 
          sx={{"& > div":{gridColumn:isNonMobile?undefined: "span 4"}}}>
            <TextField fullWidth variant="filled" type="text" label="Title" onBlur={handleBlur}
            onChange={handleChange} value={values.title} name="title" error={!!touched.title && !!errors.title}
            helperText={touched.title && errors.title} sx={{gridColumn: "span 2"}}/>
            
            <TextField fullWidth variant="filled" type="text" label="Phone Number" onBlur={handleBlur}
            onChange={handleChange} value={values.phoneNumber} name="phoneNumber" error={!!touched.phoneNumber && !!errors.phoneNumber}
            helperText={touched.phoneNumber && errors.phoneNumber} sx={{gridColumn: "span 2"}}/>
          
          <TextField fullWidth variant="filled" type="text" label="Type" onBlur={handleBlur}
            onChange={handleChange} value={values.type} name="type" error={!!touched.type && !!errors.type}
            helperText={touched.type && errors.type} sx={{gridColumn: "span 2"}}/>

            <TextField fullWidth variant="filled" type="text" label="No Of Openings" onBlur={handleBlur}
              onChange={handleChange} value={values.noOfOpenings} name="noOfOpenings" error={!!touched.noOfOpenings && !!errors.noOfOpenings}
              helperText={touched.noOfOpenings && errors.noOfOpenings} sx={{gridColumn: "span 2"}}/>
              
            <TextField fullWidth variant="filled" type="text" label="About the Job" onBlur={handleBlur}
              onChange={handleChange} value={values.aboutTheJob} name="aboutTheJob" error={!!touched.aboutTheJob && !!errors.aboutTheJob}
              helperText={touched.aboutTheJob && errors.aboutTheJob} sx={{gridColumn: "span 2"}}/>
              
            <TextField fullWidth variant="filled" type="text" label="Responsibilities" onBlur={handleBlur}
              onChange={handleChange} value={values.responsibilities} name="responsibilities" error={!!touched.responsibilities && !!errors.responsibilities}
              helperText={touched.responsibilities && errors.responsibilities} sx={{gridColumn: "span 2"}}/>
              
            <TextField fullWidth variant="filled" type="text" label="Requirements" onBlur={handleBlur}
              onChange={handleChange} value={values.requirements} name="requirements" error={!!touched.requirements && !!errors.requirements}
              helperText={touched.requirements && errors.requirements} sx={{gridColumn: "span 2"}}/>
          </Box>
          <Box display={"flex"}justifyContent={"end"} mt={"20px"}>
            <Button color="secondary" type="submit" variant="contained">Add New Vacancy</Button>
          </Box>
        </form>
      )}
    </Formik>
  </Box>;
};
export default Form;

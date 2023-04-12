import { Formik, FormikHelpers, FormikProps, FormikValues, withFormik } from "formik"
import React from "react";
type VacancyTypes = {
    title?: string,
    type?: string,
    noOfOpenings?: number
    aboutTheJob?: string,
    responsibilities?: string,
    requirements?: string
}
type OtherProps = {
    name?: string,
    ref?: any
}
type VacancyProps = {
    initialTitle?: string,
    initialType?: string,
    initialNoOfOpenings?: number
    initialAboutTheJob?: string,
    initialResponsibilities?: string,
    initialRequirements?: string,
    login?: any
}

const InnerForm = (props: OtherProps & FormikProps<VacancyTypes>) => {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, ref } = props;
    return (
        <React.Fragment>
            <main className="form-signin">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating">
                        <label htmlFor="floatingInput">Job Title: </label>
                        <input type="text" className="form-control" placeholder="Enter Job Title" name="title" id="floatingInput" onChange={handleChange} onBlur={handleBlur} value={values.title} />
                        {touched.title && errors.title && (<div style={{
                            display: "block"
                        }} className="invalid-feedback">
                            {errors.title}
                        </div>)}
                    </div>

                    <div className="form-floating"><label htmlFor="floatingType">Job Type: </label>
                        <input type="text" name="type" className="form-control" id="floatingType" placeholder="Enter Job Type" onChange={handleChange} onBlur={handleBlur} value={values.type} />
                        {touched.type && errors.type && (<div style={{
                            display: "block"
                        }} className="invalid-feedback">{errors.type}</div>)}
                    </div>


                    <div className="form-floating"><label htmlFor="floatingType">Number of Openings: </label>
                        <input type="number" name="noOfOpenings" className="form-control" id="floatingType" placeholder="Number of Openings" onChange={handleChange} onBlur={handleBlur} value={values.noOfOpenings} />
                        {touched.type && errors.noOfOpenings && (<div style={{
                            display: "block"
                        }} className="invalid-feedback">{errors.noOfOpenings}</div>)}
                    </div>


                    <div className="form-floating">

                        <label htmlFor="floatingType">About The Job: </label>
                        <input type="number" name="aboutTheJob" className="form-control" id="floatingType" placeholder="About the job" onChange={handleChange} onBlur={handleBlur} value={values.aboutTheJob} />
                        {touched.type && errors.aboutTheJob && (<div style={{
                            display: "block"
                        }} className="invalid-feedback">{errors.aboutTheJob}</div>)}
                    </div>

                    <div className="form-floating">
                        <label htmlFor="floatingType">Responsibilities: </label>
                        <input type="text" name="responsibilities" className="form-control" id="floatingType" placeholder="Responsibilities" onChange={handleChange} onBlur={handleBlur} value={values.responsibilities} />
                        {touched.type && errors.responsibilities && (<div style={{
                            display: "block"
                        }} className="invalid-feedback">{errors.responsibilities}</div>)}
                    </div>

                    <div className="form-floating">
                        <label htmlFor="floatingType">Requirements: </label>
                        <input type="text" name="requirements" className="form-control" id="floatingType" placeholder="Requirements" onChange={handleChange} onBlur={handleBlur} value={values.requirements} />
                        {touched.type && errors.requirements && (<div style={{
                            display: "block"
                        }} className="invalid-feedback">{errors.requirements}</div>)}
                    </div>

                    <button className="w-100 btn btn-lg btn-warning" type="submit">Add Vacancy</button>
                </form>
            </main>
        </React.Fragment>
    )
}

const VacancyForm = withFormik<VacancyProps, VacancyTypes>({
    mapPropsToValues: (props:VacancyProps) => ({
        title: props.initialTitle,
        type: props.initialType,
        aboutTheJob: props.initialAboutTheJob,
        noOfOpenings: props.initialNoOfOpenings,
        requirements: props.initialRequirements,
        responsibilities: props.initialResponsibilities
    }),
    handleSubmit: ({ title, type, noOfOpenings, aboutTheJob, responsibilities, requirements }: VacancyTypes) => {
        console.log(`title = ${title}`)
        console.log(`type = ${type}`)
        console.log(`noOfOpeneings = ${noOfOpenings}`)
        console.log(`aboutTheJob = ${aboutTheJob}`)
        console.log(`responsibilities = ${responsibilities}`)
        console.log(`requirements = ${requirements}`)
    },
})(InnerForm)

const AddVacancy: React.FC<{}> = (props: any) => {
    return (
        <div>
            Add Vacancy Form
            <div><VacancyForm /></div>
        </div>
    )
}
export default AddVacancy;
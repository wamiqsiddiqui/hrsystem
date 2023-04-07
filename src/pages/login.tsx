
import { ChangeEvent, useEffect, useState } from 'react'
import hrapp from '/home/wamiq/projects/hiringapp/src/hr.png'

type formValueTypes = {
    email: string,
    password: string
}
type formErrorTypes = {
    email: string,
    password: string
}
export const Login = () => {
    const initialValues = { email: '', password: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialValues)
    const [isSubmitting, setIsSumbitting] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormValues({ ...formValues, [name]: value })
    }
    const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        console.log(`handle login submit`);
        setFormErrors(validate(formValues))
        setIsSumbitting(true)
    }
    const submitForm = () => {
        console.log(`Will be navigating from here the values =  ${formValues.email} , ${formValues.password}`);
    };
    useEffect(() => {
        console.log(`submittingsss ${Object.keys(formErrors).length}`);
        if (formErrors.email.length == 0 && formErrors.password.length == 0 && isSubmitting) {
            console.log(`submitting`);
            submitForm()
        }
    }, [formErrors])
    const validate = (values: formValueTypes) => {
        let errors: formErrorTypes = { email: '', password: '' }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        console.log(`printinggg${values.email} ${values.password}`);
        if (!values.email) {
            errors.email = "Cannot be blank"
            console.log(`Email Cannot be blank`);
        } else if (!regex.test(values.email)) {
            errors.email = 'Invalid Email format'
        }
        if (!values.password) {
            errors.password = 'Cannot be blank'
            console.log(`password cannot be blank`);
        } else if (values.password.length < 4) {
            errors.password = 'Password must be more than 4 characters'
        }
        console.log(`errors = ${errors.email}`)
        return errors

    }
    return (<body className="App-header">
        <img src={hrapp} className="App-logo" alt="logo" />
        <p className="TextStyle">
            Welcome to HR Hiring System
        </p>
        <div className='LoginContainer'>
            <p className='TextStyle'>Login</p>
            <form onSubmit={handleLoginSubmit}>
                <input className='TextBoxStyle' id='password' type="email" name='email' onChange={handleChange} placeholder='Enter your email' />
                <div><input className='TextBoxStyle' id='password' type="password" name='password' onChange={handleChange} placeholder='Password' /></div>
                {formErrors.password && (
                    <span className="error">{formErrors.password}</span>
                )}
                <div><button className='ButtonStyle' type='submit'>Login</button></div>
            </form>
        </div>
    </body>)
}
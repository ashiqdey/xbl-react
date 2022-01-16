
import React from "react";
import { Formik, Form, ErrorMessage } from "formik";


import { Input, Spinner } from "../../../components/Form"
import { FormikInput } from "../../../components/FormikForm"
import Select from "../../../components/Select";
import { FormikError } from "../../../components/FormikForm";


export default function Index() {

    const gender = [
        { key: "Male", value: "male" },
        { key: "Female", value: "female" },
    ];
    const choice = [
        { key: "Choice 1", value: "Choice 1" },
        { key: "Choice 2", value: "Choice 2" },
        { key: "Choice 1", value: "Choice 1" },
    ];


    const initialValues = {
        name: "Jhon",
        email: "jhon@doe.com",
        password: "",
        phone: "",
        message: "",
        gender: "",
        choice: [],
        industry: "",
        rememberMe: true
    }

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    const validate = (values) => {
        const errors = {};
        //name
        if (!values.name) {
            errors.name = 'Required';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        }

        if (!values.phone) {
            errors.phone = 'Required';
        }

        if (!values.industry) {
            errors.industry = 'Required';
        }

        if (!values.message) {
            errors.message = 'Required';
        }

        if (!values.gender) {
            errors.gender = 'Required';
        }

        if (values.choice.length === 0) {
            errors.choice = 'Required';
        }


        return errors;
    }

    return (
        <div className='p2'>
            <h4>Formik with validation</h4>

            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
            >

                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Form>

                        {/* define onChnge, onBlur, value manually */}
                        <Input
                            type="text"
                            label="Name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <ErrorMessage name="name" />



                        <FormikInput type="email" name="email" label="Email" />

                        <FormikInput type="password" name="password" label="Password" />

                        <FormikInput
                            className="phone"
                            type="tel"
                            prefix="+91"
                            name="phone"
                            label="Phone number"
                        />


                        <div className="mt2">
                            <Select
                                options={[
                                    { value: 'chocolate', label: 'Chocolate' },
                                    { value: 'strawberry', label: 'Strawberry' },
                                    { value: 'vanilla', label: 'Vanilla' }
                                ]}
                                value={values.industry}
                                onChange={(e) => {
                                    handleChange({ target: { name: "industry", value: e } });
                                }}
                                onBlur={() => {
                                    handleBlur({ target: { name: "industry" } });
                                }}
                            />

                            <ErrorMessage name="industry" component={FormikError} />
                        </div>


                        <FormikInput
                            type="textarea"
                            name="message"
                            label="Write your message"
                        />





                        <FormikInput
                            className="mt2"
                            type="radio"
                            name="gender"
                            options={gender}
                        />

                        <FormikInput
                            className="mt2"
                            type="checkbox"
                            name="choice"
                            options={choice}
                        />

                        <div className="mt1 flex aic">
                            <FormikInput type="switch" name="rememberMe" />
                            <div className="pl50">Remember me</div>
                        </div>


                        <div className="mt2">
                            {isSubmitting ? <Spinner /> : <button type="submit" className="but theme">
                                Submit
                            </button>}
                        </div>
                    </Form>
                )}

            </Formik>




        </div>
    )
}

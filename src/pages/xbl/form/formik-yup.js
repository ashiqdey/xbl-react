
import React from "react";
import * as Yup from "yup";
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
        confirmPassword: "",
        phone: "",
        message: "",
        gender: "",
        choice: [],
        industry: { label: "", value: "" }
    }

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }



    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("name is required"),

        email: Yup.string()
            .email("Invalid email address format")
            .required("Email is required"),

        password: Yup.string()
            .min(3, "Password must be 3 characters at minimum")
            .required("Password is required"),

        confirmPassword: Yup.string()
            .required("confirmation of password is important")
            .oneOf([Yup.ref("password"), null], "password doesn't match"),

        phone: Yup.string()
            .min(10, "phone must be 10 characters at minimum")
            .max(10, "phone must be 10 characters at minimum")
            .required("phone is required"),

        message: Yup.string()
            .required("message is required"),

        gender: Yup.string()
            .required("gender is required"),


        choice: Yup.array(Yup.string()),

        industry: Yup.object().shape({
            label: Yup.string(),
            value: Yup.string().required(),
        })


    });



    return (
        <div className='p2'>
            <h4>Formik with validation</h4>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
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
                        <FormikInput type="password" name="confirmPassword" label="Confirm Password" />

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
                                    { value: 'IT', label: 'IT' },
                                    { value: 'Finance', label: 'Finance' },
                                    { value: 'Edtech', label: 'Edtech' }
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

import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
export const Res = () => {

    return (
        <div className=' bg-red-500 p-20'>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    contact: {
                        phone: ''
                    },
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string().required('Required'),
                    lastName: Yup.string().required('Required'),
                    email: Yup.string().email('Invalid email').required('Required'),
                    contact: Yup.object().shape({
                        phone: Yup.string().required('your verify number ')
                    }),
                })}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className='flex flex-col gap-10'>
                        <Field name="firstName" />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                        <Field name="lastName" />
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <Field placeholder='Enter your mobile no' name='contact.phone' type='number' />
                        {errors.contact?.phone && touched.contact?.phone ? <div>{errors.contact?.phone}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

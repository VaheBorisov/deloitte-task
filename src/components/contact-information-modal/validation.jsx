import * as yup from 'yup';

export const ContactInformationSchema = yup.object().shape({
    firstName: yup.string()
        .required('First name is a required field')
        .nullable(),
    lastName: yup.string()
        .required('Last name is a required field')
        .nullable(),
    company: yup.string()
        .required('Company is a required field')
        .nullable(),
    jobTitle: yup.string()
        .required('Job title is a required field')
        .nullable(),
    email: yup.string()
        .required('Email is a required field')
        .email('Must be a valid email')
        .nullable(),
    agreement: yup.string()
        .required('This is required field'),
    termsConditions: yup.boolean()
        .required('The terms and conditions must be accepted')
        .oneOf([true], 'The terms and conditions must be accepted')
});

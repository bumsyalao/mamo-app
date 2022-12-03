import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from '../Button';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { regexData } from '../../util/constants';


type CreateInvoiceDataType = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumberCode: string;
    phoneNumber: string;
    amount: string;
    description: string;
};


export const CreateInvoiceForm = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .trim()
            .max(255,)
            .required('Please enter your customer’s first name'),
        lastName: Yup.string()
            .trim()
            .max(255,)
            .required('Please enter your customer’s last name'),
        email: Yup.string()
            .trim()
            .required('Please enter your customer’s email')
            .email()
            .matches(regexData['emailRegex']),
        phoneNumberCode: Yup.string(),
        phoneNumber: Yup.string(),
        amount: Yup.string().required('An amount is required '),
        description: Yup.string().required('Please add a description'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<CreateInvoiceDataType>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            phoneNumberCode: '971',
        },
        mode: 'onChange',
    });


    const onSubmit = (data: any) => console.log(data, '======data');

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='invoice-form'>
            <div className='form-header'>
                <h2>Create and send invoice</h2>
                <p>An email with the invoice will be sent to your customer with a payment link for them to settle the invoice</p>
            </div>
            <div>
                <h4>Customer</h4>
                <input {...register('firstName')} placeholder="First name" />
                {errors.firstName && <p>{errors.firstName.message}</p>}
                <input {...register("lastName")} placeholder="Last name" />
                {errors.lastName && <p>{errors.lastName.message}</p>}

                <input {...register("email")} placeholder="Email" />
                {errors.email && <p>{errors.email.message}</p>}

                <div>
                    <input {...register("phoneNumberCode")} placeholder="Phone(optional)" />
                    <input {...register("phoneNumber")} />
                </div>
            </div>
            <h4>Amount</h4>

            <input {...register("amount")} placeholder="AED 0.00" />
            {errors.amount && <p>{errors.amount.message}</p>}

            <h4>Description</h4>

            <input {...register("description")} placeholder="What's payment for" />
            {errors.description && <p>{errors.description.message}</p>}

            {/* <Button onClick={handleSubmit(onSubmit)}>Submit</Button> */}
            <input type="submit" />
        </form>
    );
};
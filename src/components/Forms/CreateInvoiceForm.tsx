import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Button } from '../Button';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { regexData } from '../../util/constants';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';

type CreateInvoiceDataType = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    amount: number;
    description: string;
};


export const CreateInvoiceForm = () => {
    const navigate = useNavigate();
    const [countryCode, setCountryCode] = React.useState("AE");


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
        phoneNumber: Yup.string(),
        amount: Yup.number().required('An amount is required '),
        description: Yup.string().required('Please add a description'),
    });

    const { register, handleSubmit, formState: { errors }, control } = useForm<CreateInvoiceDataType>({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
    });


    const onSubmit = (data: any) => {
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='invoice-form'>
            <div className='form-header'>
                <h2>Create and send invoice</h2>
                <p>An email with the invoice will be sent to your customer with a payment link for them to settle the invoice</p>
            </div>

            <h4>Customer</h4>
            <div className='flex'>
                <div className={`input-field ${errors.firstName ? 'input-field-with-error' : ''}`}>
                    <input {...register('firstName')} placeholder="First name" />
                    {errors.firstName && <span>{errors.firstName.message}</span>}

                </div>
                <div className={`input-field ${errors.lastName ? 'input-field-with-error' : ''}`}>
                    <input {...register("lastName")} placeholder="Last name" />
                    {errors.lastName && <span>{errors.lastName.message}</span>}

                </div>

            </div>

            <div className='flex'>
                <div className={`input-field input-field-email ${errors.email ? 'input-field-with-error' : ''}`}>
                    <input {...register("email")} placeholder="Email" />
                    {errors.email && <span>{errors.email.message}</span>}

                </div>

                <div className='input-field-phone'>
                    <label>Phone number (optional)</label>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => (
                            <PhoneInput
                                {...field}
                                onCountryChange={(v) => setCountryCode(v as string)}
                                limitMaxLength={true}
                                international={true}
                                defaultCountry="AE"
                            />
                        )}
                    />
                </div>
            </div>

            <h4>Amount</h4>
            <div className={`input-field ${errors.amount ? 'input-field-with-error' : ''}`}>
                <input {...register("amount")} placeholder="AED 0.00" />
                {errors.amount && <span>{errors.amount.message}</span>}
            </div>

            <h4>Description</h4>
            <div className={`input-field-full ${errors.description ? 'input-field-with-error' : ''}`}>
                <input {...register("description")} placeholder="What's payment for" />
                {errors.description && <span>{errors.description.message}</span>}

            </div>


            <Button onClick={() => {
                handleSubmit(onSubmit)
            }} className="form_btn" text="Send invoice" type="primary" />
        </form>
    );
};
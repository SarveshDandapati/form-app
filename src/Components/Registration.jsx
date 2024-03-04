import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const Registration = () => {
    const formSchema = yup.object({
        first_name: yup.string().required('First Name is required'),
        last_name: yup.string().required('Last Name is required'),
        contact_info: yup.number().required().typeError('Contact Info is required'),
        qualification: yup.string().required('Qualification is required')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    });


    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='container'>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <div className="form-group">
                        <label htmlFor="first_name">First Name:</label>
                        <input type='text' name='first_name' {...register('first_name')} />
                    </div>
                    <p>{errors.first_name?.message}</p>
                </div>
                <div className='form-group'>
                    <div className="form-group">
                        <label htmlFor="last_name">Last Name:</label>
                        <input type='text' name='last_name' {...register('last_name')} />
                    </div>
                    <p>{errors.last_name?.message}</p>
                </div>
                <div className='form-group'>
                    <div className="form-group">
                        <label htmlFor="contact_info">Contact Info:</label>
                        <input type='text' name='contact_info' {...register('contact_info')} />
                    </div>
                    <p>{errors.contact_info?.message}</p>
                </div>
                <div className='form-group'>
                    <div className="form-group">
                        <label htmlFor="qualification">Qualification:</label>
                        <select name="qualification" {...register('qualification')}>
                            <option value="">Select qualification</option>
                            <option value="btech">B.Tech</option>
                            <option value="bba">BBA</option>
                            <option value="bcom">B.Com</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <p>{errors.qualification?.message}</p>
                </div>
                <input type="submit" value="Sign up" />
            </form>
        </div>
    );
}

export default Registration;
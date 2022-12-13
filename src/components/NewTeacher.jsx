import React from 'react'
import { useForm } from 'react-hook-form'

export default function NewTeacher() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            // firstName: 'Maria',
            // lastName: 'Harris',
        },
    })

    console.log(errors)
    return (
        <div>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <div className='card-body'>
                    <h2 className='card-title'>Add New Teacher</h2>
                    <form
                        onSubmit={handleSubmit((data) => {
                            console.log(data)
                        })}
                    >
                        {/* <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text'>
                                    Enter first name
                                </span>
                            </label>
                        </div> */}
                        <input
                            type='text'
                            placeholder='First Name'
                            className='input input-bordered w-full max-w-xs'
                            {...register('firstName', {
                                required: 'This is required',
                            })}
                        />
                        <label className='label'>
                            <span className='label-text-alt'>
                                {errors.firstName?.message}
                            </span>
                        </label>

                        {/* <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text'>
                                    Enter last name
                                </span>
                            </label>
                        </div> */}
                        <input
                            type='text'
                            placeholder='Last Name'
                            className='input input-bordered w-full max-w-xs'
                            {...register('lastName', {
                                required: 'This is required',
                                minLength: {
                                    value: 4,
                                    message: 'Min length is 2',
                                },
                            })}
                        />
                        <label className='label'>
                            <span className='label-text-alt'>
                                {errors.lastName?.message}
                            </span>
                        </label>
                        <div className='card-actions justify-end'>
                            <button type='submit' className='btn'>
                                Submit
                            </button>
                        </div>
                        {/* <input type='submit' /> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

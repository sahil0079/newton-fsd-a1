import React from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // console.log(formState)

    console.log('errors', errors)
    function onSubmit(data) {
        console.log(data)
        reset();

    }


    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit(onSubmit)}>


                <div className='form-control'>
                    <label>Email</label>
                    <input type='text' name='email' {...register('email', {
                        required: true,
                        pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                    })} />

                    {errors.email?.type == 'required' && (
                        <p className='errorMsg'>Email is required</p>
                    )}

                    {errors.email?.type == 'pattern' && (
                        <p className='errorMsg'>Email is not valid</p>
                    )}
                </div>

                <div className='form-control'>
                    <label>Password</label>
                    <input type='password' name='password' {...register('password', {
                        required: true,
                        minLength: 6
                    })} />
                    {errors.password?.type == 'required' && (
                        <p className='errorMsg'>Password is required</p>
                    )}
                    {errors.password?.type == "minLength" && (
                        <p className='errorMsg'>Password should be at least of min 6 characters.</p>
                    )}
                </div>

                <div className='form-control'>
                    <button>Login</button>
                </div>
            </form>

        </div>
    )
}

export default App
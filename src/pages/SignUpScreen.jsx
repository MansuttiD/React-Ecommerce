import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './styles/signUpScreen.css'

const SignUpScreen = () => {

    const { handleSubmit, register, reset } = useForm()
    const submit = data => {
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
        axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        reset({
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            phone: '',
            role: 'admin'
        }
        )
    }

    return (
        <div className="signup">
            <form className='signup__form' onSubmit={handleSubmit(submit)}  >
                <h2 className="signup__text">Sign Up</h2>
                <div className='signup__email'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email")} />
                </div>
                <div className='signup__firstName'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" {...register("firstName")} />
                </div>
                <div className='signup__lastName'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" {...register("lastName")} />
                </div>
                <div className='signup__password'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password")} />
                </div>
                <div className='signup__phone'>
                    <label htmlFor="phone">Phone(10 characters)</label>
                    <input type="number" id="phone" {...register("phone")} />
                </div>
                <div className='signup__role'>
                    <label htmlFor="role">Role</label>
                    <input type="text" value='admin' id="role" {...register("role")} />
                </div>
                <button className='signup__btn'>Sign up</button>
            </form>
            <p className='login__p' >Already have an account? <Link to='/login' ><span className='login__span' >Log in</span></Link></p>
        </div>
    )
}

export default SignUpScreen
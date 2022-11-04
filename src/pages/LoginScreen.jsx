import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './styles/loginScreen.css'

const LoginScreen = () => {

  const {handleSubmit, register, reset} = useForm()
  const [isLogged, setIsLogged] = useState(false)

const submit = data => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(url, data)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.data.token)
        setIsLogged(true)
    })
    .catch(err => console.log(err))
}

useEffect(() => {
  if(localStorage.getItem('token')){
    setIsLogged(true)
  }else{
    setIsLogged(false)
  }
},[])

const handleLogout = () => {
  console.log("entre");
  localStorage.removeItem('token')
  setIsLogged(false)
}



if(isLogged){
  return (
    <div className='logout' >    
      <h2 className='logout__title' >User Logged</h2>
      <div className='logout__btn-container' >
      <button  className='logout__btn' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
  return (
    <div className="login">
      <form className='login__form' onSubmit={handleSubmit(submit)}>
        <h2 className="login__text">Welcome! Enter your email and password to continue</h2>
        <div className='login__email'>
            <label htmlFor="email">Email</label>
            <input type="email"  id="email" {...register("email")}/>
        </div>
        <div className='login__password'>
            <label htmlFor="password">Password</label>
            <input type="password"  id="password" {...register("password")}/>
        </div>
        <button className='login__btn'>Login</button>
      </form>
      <p className='signup__p' >Don't have an account? <Link to='./signup' > <span className='signup__span' >Sign up</span> </Link></p>
    </div>
  )
}

export default LoginScreen
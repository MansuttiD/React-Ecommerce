import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LoginScreen from './pages/LoginScreen'
import ProductId from './pages/ProductId'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Purchases from './pages/Purchases'
import SignUpScreen from './pages/SignUpScreen'

function App() {

    // useEffect(() => {
    //   const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
    //   const data = {
    //     firstName: "rodrigo",
    //     lastName: "uribe",
    //     email: "r@gmail.com",
    //     password: "pass1234",
    //     phone: "1234567891",
    //     role: "admin"
    // }
    //   axios.post(url, data)
    //   .then()
    //   .catch(err => console.log(err))
    // }, [])



  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductId/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/login/signup' element={<SignUpScreen/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

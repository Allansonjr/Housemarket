import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'
import NavBar from './components/NavBar/NavBar'
import Category from './pages/Category'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import CreateListing from './pages/CreateListing'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/category/:categoryName' element={<Category />} />
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/create-listing' element={<CreateListing />} />
      </Routes>
      <NavBar />
    </Router>
    <ToastContainer />
  </>
}

export default App

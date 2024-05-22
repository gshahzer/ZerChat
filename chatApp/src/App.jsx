import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Chat from './Components/Chat/Chat';
import Home from './Components/Home/Home.jsx'
import { useAuthContext } from './context/AuthContext.jsx';
import Footer from './Components/footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-6'>
        <Home/>

      <Footer/>
      </div>
    </div>
  );
};

const RoutesComponent = () => {
  const { authUser } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={authUser ? <Navigate to={'/chat'} /> : <App />} />
      <Route
        path="/Login"
        element={authUser ? <Navigate to={'/chat'} /> : <Login />}
      />
      <Route path="/GetStarted" element={authUser ? <Navigate to={'/chat'} /> : <Signup />} />
      <Route path="/Chat" element={authUser ? <Chat /> : <Navigate to={'/Login'} />} />
    </Routes>
  );
};

export default RoutesComponent;

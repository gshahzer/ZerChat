import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"; 
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import logo from '../../assets/logo.jpg'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullname , setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [errors, setErrors] = useState({});
  const [userExists, setUserExists] = useState(false); // State for user already exists
  const navigate = useNavigate();

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:3001/signup", {
          fullname,
          email,
          password,
          subscribed,
        });
  
        console.log(response.data);
  
        // Redirect to login page after successful signup
        navigate('/login');
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error === "UserExists") {
          setUserExists(true); // Set state to true
        } else {
          console.error("Error:", error);
          // Handle other errors
        }
      }
    }
  };

  return (
    <div className="relative">
      <Link to={'/'}>
      <img src={logo} alt="" className='w-[70px] absolute left-6  rounded-full'/>
       
      </Link>
          
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center h-[600px]">
          <h2 className="text-4xl font-semibold mb-5">Sign up to ZerChat</h2>

          <div className="bg-slate-300 w-[400px] py-3 px-9 rounded-xl mt-2 flex gap-3 items-center justify-center">
            <FcGoogle size={25} />
            <h2>Continue with Google</h2>
          </div>
          <h4 className="text-sm font-thin my-4">or</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="border border-black py-2 px-2 rounded-xl w-[400px]"
              required
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black py-2 px-2 mt-2 rounded-xl w-[400px]"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black py-2 px-2 mt-2 rounded-xl w-[400px]"
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            <br />
            <div className="flex gap-3">
              <input
                type="checkbox"
                name="subscribed"
                id="subscribed"
                checked={subscribed}
                onChange={(e) => setSubscribed(e.target.checked)}
              />
              <label htmlFor="subscribed">Subscribe to ZerChat tips and updates</label>
            </div>
            <button type="submit" className="bg-slate-300 py-3 px-9 rounded-xl mt-2 w-[400px]">
              Create account
            </button>
          </form>
          <br />
          {userExists && (
            <span className="text-red-500 text-sm">User with this email already exists. Please log in.</span>
          )}
          <h4 className="w-[350px] text-sm font-extralight text-center">
            By clicking "Create account" or "Continue with Google", you agree to
            the ZerChat TOS and Privacy Policy.
          </h4>
          <br />
          <h4 className="w-[350px] text-sm text-center font-extralight">
            *By opting in, you are consenting to receive product, service and
            events updates from Zer Ai. You can unsubscribe at any time.
          </h4>

          <br />
          <div className="flex gap-1">
            <h4 className="text-sm font-thin">Already have an account?</h4>{" "}
            <Link to={"/login"}>
              <h4 className="text-sm font-normal text-slate-500">Log in</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

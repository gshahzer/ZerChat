import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import { useAuthContext } from '../../../src/context/AuthContext'; // Import your AuthContext
import toast from "react-hot-toast";
import logo from '../../assets/logo.jpg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext(); // Access the setAuthUser function from AuthContext

  
// Set Axios defaults for credentials
axios.defaults.withCredentials = true;  

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:3001/login", {
     
      email,
      password,
    });

    const { data } = response;
    console.log("Response data:", data); // Log data to inspect its content

    // Assuming your API returns an 'error' field for authentication errors
    if (data.error) {
      console.error("Login error:", data.error);
      setError(data.error); // Set specific error message from the server
      return;
    }

    // Login successful
    toast.success("Login successful");

    localStorage.setItem("chat-user", JSON.stringify(data));

    setAuthUser(data);
    // Update authentication context

    // Redirect to chat page
    navigate("/chat");
  } catch (error) {
    console.error("Login error:", error);
    toast.error("I think this user does not exist")
  }
};


  return (
    <div className="relative">
      <Link to={"/"}>
         <img src={logo} alt="" className='w-[70px] absolute left-6  rounded-full'/>
       
      </Link>

      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center h-[600px]">
          <h2 className="text-4xl font-semibold mb-5">Sign in to ZerChat</h2>

          <div
            className="bg-slate-300 w-[400px] py-3 px-9 rounded-xl mt-2 flex gap-3 items-center justify-center"
            onClick={() => {
              // Handle Google sign-in
              console.log("Google sign-in clicked");
            }}
          >
            <FcGoogle size={25} />
            <h2>Continue with Google</h2>
          </div>
          <h4 className="text-sm font-thin my-4">or</h4>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="border border-black py-2 px-2 rounded-xl w-[400px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="border border-black py-2 px-2 mt-2 rounded-xl w-[400px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              type="submit"
              className="bg-slate-300 py-3 px-9 rounded-xl mt-2 w-[400px]"
            >
              Login
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <br />
          <div className="flex gap-1">
            <h4 className="text-sm font-thin">No account?</h4>{" "}
            <Link to={"/GetStarted"}>
              <h4 className="text-sm font-thin text-slate-500">Create one</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

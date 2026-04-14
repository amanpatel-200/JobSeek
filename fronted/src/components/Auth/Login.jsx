import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Toaster, toast } from 'sonner'
import { USER_API_END_POINT } from "@/utils/constant.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const {loading} = useSelector(store => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const changeEventHandler = (e)=>{
    setInput({...input,[e.target.name]:e.target.value});
  }
  const sumbitHandler = async(e)=>{
    e.preventDefault();
     try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
        headers:{"Content-Type":"application/json"},
        withCredentials:true,
      })
      if(res.data.success){
       dispatch(setUser(res.data.user));
        navigate("/");
         toast.success(res.data.message); 
      }
     } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
     }finally{
      dispatch(setLoading(false))
     }
  }
  return (
    <div>
      <Navbar />
      <Toaster/>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={sumbitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-blue-700">Login</h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="Enter Your Email" 
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="Enter Your Password" 
            name = "password"
            value={input.password}
            onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center justify-between ">
            <RadioGroup className="flex items-center justify-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked = {input.role === 'student'}
                  onChange = {changeEventHandler}
                  className="cursor-pointer"
                  
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked = {input.role === 'recruiter'}
                  onChange = {changeEventHandler}
                  className="cursor-pointer"
                  
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {
            loading ? <Button className="w-full scroll-my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>please wait</Button> :<Button
            type="submit"
            className="w-full my-4 bg bg-emerald-500 hover:bg-emerald-600 text-white"
          > Login </Button>
          }
         
           
          <span className="text-sm">
            Don't have an account?
            <Link to="/signup" className="text-blue-700">
              Sign Up
            </Link>
          </span>
        </form>
      </div>
      
    </div>
  );
};

export default Login;

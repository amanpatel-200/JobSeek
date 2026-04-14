import { Search } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobslice";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const [query,setquery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = ()=>{
     dispatch(setSearchedQuery(query));
     navigate("/browse");
  }
  return (
    <div className="text-center">
      <div className="flex flex-col my-10 gap-5">
        <h2 className="mx-auto px-4 py-2 rounded-full bg-[#E6F7FF] text-[#F83002] font-semibold shadow-sm">
        No.1 JobNest Website
      </h2>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        Find Work Build Careers Shape Futures & <br />
        Get Your
        <span className="text-[#6A38C2] underline decoration-wavy decoration-[#6A38C2]/50">
          Dream Jobs
        </span>
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quod quis? Pariatur, voluptatem ad?</p>
      <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
        <input type="text" 
        placeholder="Find Your Dream Jobs" 
        className="outline-none border-none w-full"
        onChange={(e)=>setquery(e.target.value)}
        />
        <Button onClick={searchJobHandler} className="rounded-r-full ">
          <Search className="h-5 w-5"/>
        </Button>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;

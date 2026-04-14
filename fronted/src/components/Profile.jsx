import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import AppliedTable from "./AppliedTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/Hooks/useGetAppliedJobs";
//const skills = ["html","css","JavaScript", "React js"];
const isResume = true;
const Profile = () => {
   useGetAppliedJobs();
    const [open,setOpen] = useState(false)
    const {user} = useSelector(store=>store.auth);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex  justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>
                {user?.profile?.bio}
              </p>
            </div>
          </div>
          <Button onClick={()=>setOpen(true)} variant="outline" className="text-right">
            <Pen />
          </Button>
        </div>
        <div className="my-6">
          <div className="flex item-center gap-3">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex item-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-6">
            <h1>Skills</h1>
            <div className="flex items-center gap-2 my-3">
             {
              user?.profile?.skills.length!= 0 ? user?.profile?.skills.map((item,index)=><Badge key={index} variant="outline"> {item} </Badge>): <span>NA</span>
             }
            </div>
        </div>
          <div className="grid w-full max-w-sm items-center gap-2">
                 <label htmlFor="" className="text-md font-bold">Resume</label>
                 {
                    isResume ? <a href={user?.profile?.resume} target="blank" className="text-blue-500 w-full hover:underline cursor-pointer"> {user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                 }
          </div>
         
      </div>
       <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                     <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
                     {/*Application table */}
                     <AppliedTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Profile;

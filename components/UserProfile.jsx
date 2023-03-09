import { userInfo } from "os";
import React from "react";

const UserProfile=()=> {
  var userInfo=["Former Summer Internship at Schlumberger",
  "Former Steering Committee Member (Tech Team) at Spring Fest, IIT Kharagpur",
  "Former Student Mentor at Student Welfare Group - SWG, IIT Kharagpur",
  "Former Web Coordinator at Career Development Centre, IIT Kharagpur",
  "Former Summer Internship at Cairn Oil and Gas, Vedanta Limited",
  "Former Summer Internship at ONGC Limited",
];
  return (
    <div className="flex-col flex m-2 p-1  t">
      <h2 className="text-xl font-bold">Intro</h2>
                <div className="m-1 p-2 bg-blue-500 text-white font-bold  rounded-lg text-center ">Add bio</div>
              {
                userInfo.map((info,i)=>
                <div className="flex flex-row items-center" key={i} >
                <i className="fa-solid fa-briefcase p-2"></i>
                <p className=" text-sm ">{info}</p>
                </div>)
              }
              <div className="flex flex-row items-center">
              <i className="fa-solid fa-graduation-cap p-2"></i>  
              <p className=" text-sm">Went to Delhi Public School,jaipur</p>
                </div>
                <div className="flex flex-row items-center">
                <i className="fa-solid fa-graduation-cap p-2"></i>
                 <p className=" text-sm">Went to Subodh Public School,airport</p>
                </div>
                <div className="flex flex-row items-center">
                <i className="fa-solid fa-house p-2"></i>
                <p className=" text-sm">Lives in Mumbai, Maharashtra</p>
                </div>
                <div className="flex flex-row items-center">
                <i className="fa-solid fa-location-dot p-2"></i>
                <p className=" text-sm">From Jaipur, Rajasthan</p>
                </div>
                <div className="flex flex-row items-center">
                <i className="fa-solid fa-rss p-2"></i>
                <p className=" text-sm">Followed by 241 people</p>
                </div>
                
                 
    </div>
  );
}
export default UserProfile;
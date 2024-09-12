import { TiThMenu } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
export default function Navbar() {
  const [input, setInput] = useState("");
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
  const [searchBar,setSearchBar]=useState(false);

useEffect(()=>{
console.log({isSidebar,mobileShow})
},[isSidebar])
  const navigate = useNavigate();
  const searchQueryHandler = () => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      input?.length > 0
    ) {
      navigate(`/search/${input}`);
      setInput("");
    }
  };
const handleSidebar =()=>{
  if(window.innerWidth<=700){
setIsSidebar(!isSidebar)
setMobileShow(!mobileShow)
  }
  setIsSidebar(!isSidebar)
}
if(searchBar){
  return   <div className="flex justify-between px-6 py-2 fixed w-[100%] top-0 bg-white items-center">
  <IoMdArrowRoundBack size={20} onClick={()=>setSearchBar(!searchBar)}/>
       <div className="flex  w-[45%]">
          <div className="w-[100%] px-3 py-2 border-2 flex border-gray-400 items-center justify-between rounded-l-full">
            <input
              type="text"
              value={input}
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={searchQueryHandler}
              className="outline-none "
            />
            {input ? <RxCross1 onClick={() => setInput("")} size={20} /> : ""}
          </div>
          <button
            className="px-4 py-2 border rounded-r-full bg-gray-100 border-gray-400"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <CiSearch size={"20px"} className="" />
          </button>
         
        </div>
        <IoMdMic
            className="ml-3 my-1 border rounded-full hover:bg-slate-200 duration-300 cursor-pointer p-2"
            size={"40px"}
          />
  </div>
}
  return (
    <>
      <div className="flex justify-between px-4 py-2 fixed w-[100%] top-0 bg-white">
        <div className=" flex items-center space-x-2">
          <TiThMenu
          onClick={handleSidebar}
            size={"40px"}
            className=" cursor-pointer rounded-full hover:bg-slate-200 duration-300 p-3"
          />
          <img src="YouTube-Logo.png" className="w-[70px] cursor-pointer" />{" "}
          <sup>IN</sup>
        </div>
        <div className="hidden md:flex flex-grow m-2">
          <div className="w-[100%] px-3 py-2 border-2 flex border-gray-400 items-center justify-between rounded-l-full">
            <input
              type="text"
              value={input}
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={searchQueryHandler}
              className="outline-none "
            />
            {input ? <RxCross1 onClick={() => setInput("")} size={20} /> : ""}
          </div>
          <button
            className="px-4 py-2 border rounded-r-full bg-gray-100 border-gray-400"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <CiSearch size={"20px"} className="" />
          </button>
          <IoMdMic
            className="ml-3 my-1 border rounded-full hover:bg-slate-200 duration-300 cursor-pointer p-2"
            size={"40px"}
          />
        </div>
        <div className="flex space-x-5 items-center ">
        <FaSearch className="text-xl md:hidden" onClick={()=>setSearchBar(!searchBar)}/>
          <MdOutlineVideoCall
            size={"40"}
            className="text-2xl rounded-full hover:bg-slate-200 duration-300 p-2"
          />
          <FaRegBell
            size={"40"}
            className=" text-2xl rounded-full hover:bg-slate-200 duration-300 p-2"
          />

          <Avatar size="40" className="border" round={true} src="rc.jpg" />
        </div>
      </div>
    </>
  );
}

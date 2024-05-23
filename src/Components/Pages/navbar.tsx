import React, { useContext, useState } from "react";
import search from "../../Icons/magnifying-glass.png";
import book from "../../Icons/read.png";
import { SearchContext } from "../../Content/searchContext";
import { Link } from "react-router-dom";
import { LoginModal } from "../../Templates/loginModal";


export const Navbar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  console.log("searchValue", searchValue);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <LoginModal
    Open={isModalOpen}
    handleCancel={()=>{setIsModalOpen(false)}}
    okText="Login"
    />
    <div className="flex w-full h-[8%] p-4 bg-white  shadow-2xl fixed top-0">
      <div className="w-[5%] cursor-pointer ">
        <img src={book} className="" alt="book"></img>
      </div>
      {/* <div className='flex justify-end w-full  ml-[100px] relative '>
  <input  type='text' placeholder='Search Book' className='border-2 border-black w-[50%] shadow-lg rounded-md p-2' onChange={(e:any)=>{setSearchValue(e.target.value)}}/> 
  <div  className='p-2 rounded-2xl absolute w-[5%] cursor-pointer '>
    <img src={search} alt='search' className='w-[80%] h-[100%]'/>
  </div>
  </div> */}

      <ul className="flex justify-end w-[100%] gap-10 mx-5 text-[18px]">
        <li className=" cursor-pointer">Home</li>
        <li className=" cursor-pointer">About</li>
        <li className=" cursor-pointer">Aurthors</li>
        <li className=" cursor-pointer">Contact</li>
        <li className=" cursor-pointer" onClick={()=>{setIsModalOpen(true)}}>Login</li>
      </ul>
    </div>
    </>
  );
};

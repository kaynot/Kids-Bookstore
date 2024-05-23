import React, { useState } from "react";
import { bookCat, popularBook } from "../../Content/bookDetails";
import Cat from "../../Icons/category.png";
import search from "../../Icons/magnifying-glass.png";

export const BookPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const filteredBooks = popularBook.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center w-full relative h-[8%]">
        <input
          type="text"
          placeholder="Search Book"
          className="border-2 border-black w-[50%] shadow-lg rounded-3xl p-2 pl-5"
          onChange={(e: any) => {
            setSearchValue(e.target.value);
          }}
        />
        <div className="p-2 rounded-2xl absolute right-[450px] top-1/2 transform -translate-y-1/2 w-[5%] cursor-pointer items-end flex ">
          <img src={search} alt="search" className="w-[50%] h-[100%]" />
        </div>
      </div>
      <div className="mx-[5px] my-[20px] w-full h-[80%] flex ">
        {searchValue &&
          filteredBooks.map(({ id, title, details, img }) => (
            <div
              className="px-[10px] gap-2 w-full h-[80%]  mt-[40px]  "
              key={id}
            >
              <div
                style={{
                  width: filteredBooks.length <= 2 ? "30%" : "80%",
                  height: filteredBooks.length <= 2 ? "90%" : "100%",
                  margin: "auto",
                  
                }}
                className="rounded-md  border-2 shadow-xl  hover:shadow-2xl cursor-pointer"
              >
                <div className="text-black text-2xl p-2 flex gap-1">
                  {title}
                </div>
                <div className="flex justify-center p-10">
                  <img src={img} alt="book" className="w-[70%] h-[50%]" />
                </div>
                <div className="text-black text-lg p-2">{details}</div>
              </div>
            </div>
          ))}
        {!searchValue && (
          <>
            <div className=" font-bold text-[22px] h-6 ml-10 flex justify-center gap-2">
              Categories <img src={Cat} className="w-[100%] h-[100%]" />
            </div>
            {bookCat.map(({ id, title, details, img, icon }) => (
              <div className="gap-2 w-full h-[80%]  mt-[40px] " key={id}>
                <div className="w-[80%] h-[100%] rounded-md  border-2 shadow-xl  hover:shadow-2xl cursor-pointer">
                  <div className="text-black text-2xl p-2 flex gap-1">
                    {title}
                    <img src={icon} className="w-[10%] h-[10%]" />
                  </div>
                  <div className="flex justify-center p-10">
                    <img src={img} alt="book" className="w-[70%] h-[50%]" />
                  </div>
                  <div className="text-black text-lg p-2">{details}</div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

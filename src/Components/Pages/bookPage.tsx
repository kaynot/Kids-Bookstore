import React from 'react'
import { bookCat } from '../../Content/bookDetails'
import Cat from '../../Icons/category.png'


export const BookPage=()=> {
   
  return (
    <div className='mx-[5px] my-[20px] w-full h-[80%] flex '>
        <div className=' font-bold text-[22px] h-6 ml-10 flex justify-center gap-2'>
          Categories <img src={Cat} className='w-[100%] h-[100%]'></img> 
        </div>
        {bookCat.map(({
            id,
            title,
            details,
            img,
            icon
      
        }) => (
            <div className='gap-2 w-full h-[80%]  mt-[40px] ' key={id}>
                
                <div className='w-[80%] h-[100%] rounded-md  border-2 shadow-xl  hover:shadow-2xl cursor-pointer'>
                    <div className='text-black text-2xl p-2 flex gap-1'>
                        {title}<img src={icon} className='w-[10%] h-[10%]'></img>
                    </div>
                    <div className='flex justify-center p-10'>
                        <img src={img} alt='book' className='w-[70%] h-[50%]'/>
                    </div>
                    <div className='text-black text-lg p-2'>
                        {details}
                        </div>
                        
                </div>
            </div>
        ))}
    </div>
  );
}

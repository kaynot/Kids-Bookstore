import React from 'react'
import { popularBook } from '../../Content/bookDetails'

export default function BookPage2() {
  return (
    <>
    <div className='w-full'>
        <div className='flex justify-center font-bold text-[40px]'>
            Popular Books
        </div>
    </div>
    <div className=' h-full mx-[100px] my-[20px] grid grid-cols-4 mb-[25%]  '>
       
        {popularBook.map(({
            id,
            title,
            details,
            img,
      
        }) => (
            <div className='gap-2 w-full h-[95%] mt-[40px] ' key={id}>
                
                <div className='w-[80%] h-[100%] rounded-md  border-2 shadow-xl  hover:shadow-2xl cursor-pointer'>
                    <div className='text-black text-2xl p-2 flex gap-1'>
                        {title}
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
    </>
  )
}

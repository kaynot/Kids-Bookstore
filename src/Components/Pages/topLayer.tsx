import React from 'react'
import children from'../../Icons/Premium_Photo___Book_day_event_with_little_childrens-removebg-preview.png'
import kids2 from'../../Icons/kids2.png'
import kids3 from'../../Icons/kid3.png'
import kids4 from'../../Icons/kid4.png'

export const TopLayer = () => {
  return (
    <div className='my-[80px]  mx-[10px]'>
        <div className='bg-gradient-to-b from-red-200 to-blue-200 flex justify-center '>
            <div className='text-black  text-8xl  w-[300px] h-[50px]'>
                Books for Kids
                </div>
                <div>
                   <img className='w-[60%] ' src={kids2}></img> 
                </div>
            <div>
                <img  className ="w-[70%] " src={children}></img>
            </div>
            <div>
                <img  className ="w-[70%] " src={kids4}></img>
            </div>
            
        </div>
        </div>
  )
}

import React from 'react'
import warningIcon from '../Icons/exclamation.png'

interface ModalProps {
        title?: string;
        message?: string;
        handleOk?: () => void;
}
export const Modal = ({title,message,handleOk}:ModalProps) => {
    return (
        <div className='bg-white rounded-md border-2 w-[25%] h-[15%] shadow-lg ' >
            <div className='font-bold text-lg p-2 ml-5'>
                {title}
            </div>
            <div className='ml-10 flex gap-10 font-medium'>
                <img src={warningIcon} alt='warning' className='w-[10%] h-[10%]'/>
                {message}
            </div>
            <div className='flex justify-end p-1'>
                <button className='px-4 py-2 mr-2 bg-blue-500 text-white rounded-md' onClick={handleOk}>
                    OK
                </button>
               
            </div>
        </div>
    )
}

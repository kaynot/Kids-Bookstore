import React from 'react'

export const LoginPage = () => {
  return (
    <div className='h-full '>
        <div className='flex justify-center items-center h-full'>
            <div className='bg-white p-4 rounded-md  border shadow-2xl w-[18%]'>
            <h1 className='text-2xl font-bold'>Login</h1>
            <form className='mt-4'>
                <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Email</label>
                <input type='email' className='mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                </div>
                <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Password</label>
                <input type='password' className='mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                </div>
                <button type='submit' className='w-full bg-indigo-600 text-white p-2 rounded-md'>Login</button>
            </form>
            </div>
        </div>
    </div>
  )
}

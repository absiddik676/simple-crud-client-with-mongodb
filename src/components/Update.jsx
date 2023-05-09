/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const data = useLoaderData()
    console.log(data);

    const handelUpdateProfile = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        console.log(name,email);

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className='mb-5 text-3xl font-semibold'>Update Information of {data.name}</h1>
            <div className="bg-white rounded shadow-md p-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                <h2 className="text-lg font-medium mb-4">Update Your Information</h2>
                <form onSubmit={handelUpdateProfile} >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-input w-full  border rounded-md py-1 border-orange-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            defaultValue={data?.name}
                            name='name'
                            
                           
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input w-full   border rounded-md py-1 border-orange-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            defaultValue={data?.email}
                            name='email'
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;
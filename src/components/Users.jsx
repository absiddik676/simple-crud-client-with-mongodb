/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const user = useLoaderData()
    return (
       <>
       {
        user.map(user =><div key={user.id} className=" bg-gray-100 flex flex-col justify-center  sm:px-6 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          
          <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {user.name}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                {user.email}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>)
       }
       </>


        
    );
};

export default Users;
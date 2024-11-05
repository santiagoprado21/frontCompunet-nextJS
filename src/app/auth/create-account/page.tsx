'use client'
import React, { useState } from 'react';
import { redirect } from 'next/navigation';
import { IconBase } from 'react-icons';

function CreateUserPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username && password && email) {
      try {
        const response = await fetch('/api/create-user', {
          method: 'POST',
          body: JSON.stringify({
            username,
            password,
            email,
            firstName,
            lastName,
          }),
        });

        if (response.ok) {
          alert('User created successfully');
          redirect('/');
        } else {
          const errorData = await response.json();
          alert(errorData.message || 'An error occurred');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      alert('Please fill all required fields');
    }
  };

  return (
    <div className="space-y-12">
    <form onSubmit={handleCreateUser} className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <label htmlFor="username" className="text-sm font-medium text-gray-700 mr-2">
            Username
          </label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
            <span className="flex select-none items-center pl-3 text-gray-500">
            </span>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="janesmith"
              autoComplete="username"
              className="block flex-1 border-0 bg-transparent py-2.5 pl-3 text-gray-900 placeholder-text-gray-400 focus:ring-0"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <label htmlFor="password" className="text-sm font-medium text-gray-700 mr-2">
            Password
          </label>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
            <span className="flex select-none items-center pl-3 text-gray-500">
            </span>
            <input
              id="password"
              name="password"
              type="text"
              placeholder="***"
              className="block flex-1 border-0 bg-transparent py-2.5 pl-3 text-gray-900 placeholder-text-gray-400 focus:ring-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <label htmlFor="photo" className="text-sm font-medium text-gray-700 mr-2">
            Photo (Optional)
          </label>
          <div className="flex items-center space-x-2">
            <IconBase aria-hidden="true" className="h-12 w-12 text-gray-300" />
            <button
              type="button"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Change
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 pb-6">
        <h2 className="text-base font-semibold text-gray-700">Personal Information</h2>
        <p className="text-sm text-gray-500">
          Use a permanent address where you can receive mail.
        </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
        
      </div>

    </form>
    </div>
  )


}

export default CreateUserPage;

import React from "react";

const SignupForm = ({authenticity_token, isNew}) => {

    const erros = <p className="text-red-500 text-xs italic">Please choose a password.</p>
  return (
    <div className="w-full max-w-xs">
      <form action="/session" accept-charset="UTF-8" method="post" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <input type='hidden' name='authenticity_token' value={authenticity_token} />
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
            autofocus="autofocus" 
            required="required" type="text" 
            name="email" 
            id="email"
          />
                    <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
            autofocus="autofocus" 
            required="required" type="text" 
            name="username" 
            id="username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            required="required" 
            name="password" 
          />

        </div>
        <div className="flex items-center justify-between">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" name="commit" value="Login" data-disable-with="Login"
          />
          
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};


export default SignupForm

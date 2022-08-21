import React from "react";

const SigninForm = ({ authenticity_token, isNew }) => {
  const Sun = () => {
    return (
      <div>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="sunsetIconTitle"
          stroke="#ffee58"
          stroke-width="1"
          stroke-linecap="square"
          stroke-linejoin="miter"
          fill="none"
          color="#000000"
        >
          {" "}
          <title id="sunsetIconTitle">Sunset</title>{" "}
          <path d="M9.3541756,17 C8.52375489,16.2670555 8,15.1946925 8,14 C8,11.790861 9.790861,10 12,10 C14.209139,10 16,11.790861 16,14 C16,15.1946925 15.4762451,16.2670555 14.6458244,17 L9.3541756,17 Z" />{" "}
          <path d="M12 7L12 5M22 17L2 17 22 17zM5 14L2 14 5 14zM22 14L19 14 22 14zM16.7071068 9.82842712L18.8284271 7.70710678 16.7071068 9.82842712zM4.70710678 7.70710678L6.82842712 9.82842712 4.70710678 7.70710678z" />{" "}
        </svg>
      </div>
    );
  };
  return (
    <div
      className=" flex
    flex-col
    justify-center
    items-center
    inset-0
    fixed
    bg-black
    bg-opacity-50
    h-screen"
    >
      <form
        action="/session"
        accept-charset="UTF-8"
        method="post"
        className="bg-white shadow-md rounded w-5/6 md:w-96 px-10 pt-6 pb-8 mb-4"
      >
      <div className="flex flex-row gap-2 pb-4 items-center">
      <h2 class="text-2xl">Welcome Back</h2>
      <Sun />
      </div>
        <input
          type="hidden"
          name="authenticity_token"
          value={authenticity_token}
        />
        <div className="mb-4">
          <label
            className="block text-grape text-sm font-bold mb-2"
            for="email_or_username"
          >
            Username or Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username or Email"
            autofocus="autofocus"
            required="required"
            type="text"
            name="email_or_username"
            id="email_or_username"
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
            className="bg-blueblue border-2 border-blueblue hover:bg-white hover:text-blueblue text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
            name="commit"
            value="Login"
            data-disable-with="Login"
          />
          <a href="/products" className="bg-salmon border-2 border-salmon hover:bg-white hover:text-salmon text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;

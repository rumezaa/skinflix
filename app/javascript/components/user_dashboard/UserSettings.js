import React from "react";

const UserSettings = ({ authenticity_token, uid }) => {
  return (
    <div className="py-10">
      <form action={`/users/${uid}`}>
        <input
          type="hidden"
          name="authenticity_token"
          value={authenticity_token}
        />
        <div
          class="
        flex
        flex-col
        w-96
        gap-3
        bg-white
        px-8
        pt-6
        pb-8
        mb-4
        block
        text-gray-700
        text-gray-700
        leading-tight
      "
        >
          <div className="flex flex-row gap-5">
            <div class="px-2 flex flex-col border border-gray-200 border-opacity-50 rounded-md ">
              <label for="user_username" className="text-xs tracking-wider">
                Username
              </label>
              <input
                autofocus="autofocus"
                type="text"
                defaultValue="rrumeza"
                name="user[username]"
                className="bg-white outline-none text-black px-2 pb-2"
                id="user_username"
              />
            </div>
            <div class="px-2 flex flex-col border border-gray-200 border-opacity-50 rounded-md ">
              <div class="flex flex-col gap-1">
                <label for="user_name" className="text-xs tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  defaultValue="NotRumeza"
                  name="user[name]"
                  id="user_name"
                  className="bg-white outline-none text-black px-2 pb-2"
                />
              </div>
            </div>
          </div>


          <div class="flex flex-col gap-1">
            <label for="user_email">Email</label>
            <input
              type="email"
              name="user[email]"
              id="user_email"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label for="user_password">Update Password</label>
            <input type="password" name="user[password]" id="user_password" />
          </div>

          <div class="flex flex-col gap-1">
            <label for="user_password_confirmation">Confirm Password</label>
            <input
              type="password"
              name="user[password_confirmation]"
              id="user_password_confirmation"
            />
          </div>

          <div class="flex flex-col gap-1 rounded">
            <input
              type="submit"
              name="commit"
              value="Update Account"
              data-disable-with="Update Account"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserSettings;

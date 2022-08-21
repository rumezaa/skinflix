import React from "react";
import UserActivity from "../user_dashboard/UserActivity";
import SavedProducts from "../user_dashboard/SavedProducts"
import UserSettings from "../user_dashboard/UserSettings"
import {Routes, Route} from "react-router-dom"

const UserPage = () => {
  return (
    <Routes>
      <Route path="/users/:id/edit" element={UserSettings}/>
      <Route path="/users/:id/favourites" element={SavedProducts} />
    </Routes>
  );

  
};

export default UserPage;

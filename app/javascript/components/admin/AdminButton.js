import React from "react";

import DeleteIcon from "../../../assets/images/delete_icon"
import EditIcon from "../../../assets/images/edit_icon"

const AdminButton = ({url, type}) => {
  return <a className="bg-no-repeat flex text-white items-center bg-cover w-16 h-16 fixed bottom-5 right-4 rounded-lg shadow-xl text-5xl bg-blueblue px-4 py-3" href={url} style={{backgroundImage: `url(${type == "edit" && EditIcon || type == "delete" && DeleteIcon})`}}>{type == "add" && "+" || type == "edit" && ""}</a>;
};

export default AdminButton

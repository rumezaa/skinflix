import React from 'react'
import AccountCircle from "./icons/account_circle"
import MailIcon from "./icons/mail_icon"

const Icon = ({icon, width, height, link}) => {

    return(
        link && (<a href={link}> <div style={{backgroundImage: `url(${icon == "account" && AccountCircle || MailIcon})`}} class={`w-${width} h-${height} bg-cover`} /></a>) ||
        <div style={{backgroundImage: `url(${icon == "account" && AccountCircle || MailIcon})`}} class={`w-${width} h-${height} bg-cover`} />
    );


}

export default Icon
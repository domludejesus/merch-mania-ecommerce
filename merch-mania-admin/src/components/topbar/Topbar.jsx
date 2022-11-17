import React from 'react'
import { NotificationsNone, Settings } from '@material-ui/icons'
import "./topbar.css"; 


const Topbar = () => {
  return (

    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo"> Merch Mania Admin </span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge"> 2 </span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="avatar" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar
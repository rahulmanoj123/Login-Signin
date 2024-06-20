import React from "react";
import {Link} from 'react-router-dom'
import logo from '../logo-1.png'

function Topnav() {
  return (
    <div className="h-[72px] bg-[slateblue] text-white">
      <div className="h-full px-[50px] flex items-center justify-between">
        <div className="flex items-center justify-between gap-x-[30px]">
          <Link to="/"><img src={logo} alt="Logo" className="w-[125px] h-full"/></Link>
          <ul className="flex gap-x-[20px]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/tasks">Tasks</Link></li>
            <li><Link to="/reports">Reporting</Link></li>
          </ul>
        </div>
        <div className="flex items-center gap-x-[20px]">
          <span className="material-symbols-rounded">search</span>
          <span className="material-symbols-rounded">settings</span>
          <span className="material-symbols-rounded">notifications</span>
        </div>
      </div>
    </div>
  );
}

export default Topnav;

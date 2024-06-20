import React from 'react'
import { useLogout } from "../customHooks/useLogout";

function Dashboard() {
  const { logout } = useLogout();
  return (
    <div className="p-4 text-center">
      <h1>Welcome to Dashboard</h1>
      <button className='px-4 py-3 rounded-[5px] hover:bg-indigo-400 bg-indigo-300 mt-4' onClick={() => logout()}>Log Out</button>
    </div>
  )
}

export default Dashboard
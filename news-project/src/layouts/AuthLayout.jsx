import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AuthLayout = () => {
  return (
    <div className="font-poppins bg-slate-300">
      <header className="py-3 w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout

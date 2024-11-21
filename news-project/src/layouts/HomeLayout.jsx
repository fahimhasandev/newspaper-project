import React from "react"
import Header from "../components/Header"
import LatestNews from "../components/LatestNews"
import Navbar from "../components/Navbar"
import LeftNavBar from "../components/layour-component/LeftNavBar"
import RightNav from "../components/layour-component/RightNav"
import CategoryNews from "../pages/CategoryNews"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-2 grid grid-cols-12">
        <aside className="left col-span-3">
          Left Navbar
          <LeftNavBar></LeftNavBar>
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  )
}

export default HomeLayout

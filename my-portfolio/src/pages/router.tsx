import React from "react"
import { Routes, Route } from "react-router-dom"
import { ROUTES } from "../shared/utils/constants"

import Landing from "../pages/LandingPage/LandingPage"
import Info from "../components/Header/Info/Info"
import Contact from "../components/Header/Contact/Contact"
import Portfolio from "../components/Portfolio/Portfolio"

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.landing.path} element={<Landing />} />
      <Route path={ROUTES.info.path} element={<Info />} />
      <Route path={ROUTES.contact.path} element={<Contact />} />
      <Route path={ROUTES.portfolio.path} element={<Portfolio />} />
    </Routes>
  )
}
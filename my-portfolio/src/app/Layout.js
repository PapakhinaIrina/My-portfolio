import React from "react"
import { Header } from "../widgets/Header/Header"
export const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
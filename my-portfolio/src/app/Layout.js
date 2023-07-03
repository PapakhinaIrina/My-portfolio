// import { Children } from "react"
import { Header } from "../widgets/Header/Header"
import React from "react";

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
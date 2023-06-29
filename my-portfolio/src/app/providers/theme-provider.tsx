import React from "react"
import { PropsWithChildren } from "react"
import { ThemeProvider, createTheme } from "@mui/material"

type Props = PropsWithChildren<unknown>

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#673ab7",
    },
    info: {
      main: "#00e676",
    },
  },
})

export const CustomThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
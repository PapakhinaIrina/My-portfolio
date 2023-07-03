import React from "react"
import AppRouter from "./AppRouter"
import { Layout } from "../src/app/Layout"

function App() {
  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
}

export default App;

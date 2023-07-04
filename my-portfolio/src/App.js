import React from "react"
import { Layout } from "../src/app/Layout"
import { RouterProvider } from "./app/providers"
import { Router } from "./pages/index" 

function App() {
  return (
    <>
      <RouterProvider>
        <Layout>
          <Router />
        </Layout>
      </RouterProvider>
    </>
  );
}
export default App;

import React from "react"
import AppRouter from "./AppRouter"
import { Layout } from "../src/app/Layout"

import './App.css';

function App() {
  return (
    <>
    <AppRouter>
      <Layout />
    </AppRouter>
    
    </>

  // <Layout>
  //   <AppRouter />
  // </Layout>
  );
}

export default App;

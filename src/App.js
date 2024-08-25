import React, { Fragment, useEffect } from "react";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routers";
import axios from "axios";
// const dotenv = require("dotenv");
// dotenv.config();

function App() {
  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/product/get-all`
    );
    // console.log("res", res);
  };
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;

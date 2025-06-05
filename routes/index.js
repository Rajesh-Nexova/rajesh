/* eslint-disable no-unused-vars */
import React, { Suspense, useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import configDB from "../data/customizer/config";
import PrivateRoute from "./private-route";
import Signin from "../auth/signin";
import AppLayout from "../components/app";
import Login from "../pages/login";
import LoginWithBgImg from "../pages/loginWithBgImg";
import LoginWithVideo from "../pages/loginWithVideo";
import Signup from "../pages/signup";
import SignupWithImg from "../pages/signupWithImg";
import SignupWithVideo from "../pages/signupWithVideo";
import UnlockUser from "../pages/unlockUser";
import ForgetPwd from "../pages/forgetPwd";
import ResetPwd from "../pages/resetPwd";
import ComingSoon from "../pages/comingsoon";
import ComingSoonImg from "../pages/comingsoonImg";
import ComingSoonVideo from "../pages/comingsoonVideo";
import Maintenance from "../pages/maintenance";
import Error400 from "../pages/errors/error400";
import Error401 from "../pages/errors/error401";
import Error403 from "../pages/errors/error403";
import Error404 from "../pages/errors/error404";
import Error500 from "../pages/errors/error500";
import Error503 from "../pages/errors/error503";
import { routes } from "./layouts-routes";
import { Loader } from "react-feather";

const MainRoutes = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    setAuthenticated(JSON.parse(localStorage.getItem("authenticated")));
    const color = localStorage.getItem("color");
    const layout = localStorage.getItem("layout_version") || configDB.data.color.layout_version;
    document.body.classList.add(layout);
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;
    document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/${color}.css`);

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <BrowserRouter basename="/">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              {currentUser !== null || authenticated || true ? (
                <>
                  <Route exact path={`${process.env.PUBLIC_URL}`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />} />
                  <Route exact path={`/`} element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />} />
                </>
              ) : (
                ""
              )}
              {routes.map(({ path, Component }, i) => (
                <Route element={<AppLayout />} key={i}>
                  <Route exact path={path} element={Component} />
                </Route>
              ))}
            </Route>

            <Route exact path={`${process.env.PUBLIC_URL}/login`} element={<Signin />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/login`} element={<Login />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/loginWithBgImg`} element={<LoginWithBgImg />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/loginWithVideo`} element={<LoginWithVideo />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/signup`} element={<Signup />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/signupWithImg`} element={<SignupWithImg />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/signupWithVideo`} element={<SignupWithVideo />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/unlockUser`} element={<UnlockUser />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/forgetPwd`} element={<ForgetPwd />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/resetPwd`} element={<ResetPwd />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoon`} element={<ComingSoon />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonImg`} element={<ComingSoonImg />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonVideo`} element={<ComingSoonVideo />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/maintenance`} element={<Maintenance />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error400`} element={<Error400 />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error401`} element={<Error401 />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error403`} element={<Error403 />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error404`} element={<Error404 />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error500`} element={<Error500 />} />
            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error503`} element={<Error503 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;

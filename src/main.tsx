import { createRoot } from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Fine from "./Fine";
import React from "react";

const myRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/fine" element={<Fine />} />
      <Route path="/" element={<App />} />
    </>
  )
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={myRoutes} />
);
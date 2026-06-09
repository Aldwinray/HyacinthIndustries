import React, { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";

import Home from "./screens/Home.jsx";

/* eslint-disable react-refresh/only-export-components */

const About = lazy(() => import("./screens/About.jsx"));
const Industries = lazy(() => import("./screens/Industries.jsx"));
const Contact = lazy(() => import("./screens/Contact.jsx"));
const Services = lazy(() => import("./screens/Services.jsx"));
const FAQ = lazy(() => import("./screens/FAQ.jsx"));
const Reforestation = lazy(() => import("./screens/Reforestation.jsx"));
const PrivacyPolicy = lazy(() => import("./screens/PrivacyPolicy.jsx"));

const GeneralServices = lazy(() => import("./screens/industries/GeneralServices.jsx"));
const AdministrativeSupport = lazy(() => import("./screens/industries/AdministrativeSupport.jsx"));
const Healthcare = lazy(() => import("./screens/industries/Healthcare.jsx"));
const Marketing = lazy(() => import("./screens/industries/Marketing.jsx"));
const WebDesign = lazy(() => import("./screens/industries/WebDesign.jsx"));
const ThreeDAnimation = lazy(() => import("./screens/industries/3DAnimation.jsx"));
const Logistics = lazy(() => import("./screens/industries/Logistics.jsx"));

import "animate.css";
import "./index.css";
import "./scss/index.scss";

const PageFallback = (
  <div style={{ minHeight: "40vh", display: "grid", placeItems: "center" }}>
    Loading...
  </div>
);

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about/", element: <About /> },
  { path: "/industries/", element: <Industries /> },
  { path: "/contact/", element: <Contact /> },
  { path: "/services/", element: <Services /> },
  { path: "/faq/", element: <FAQ /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/reforestation/", element: <Reforestation /> },
  { path: "/general-services/", element: <GeneralServices /> },
  { path: "/administrative-support/", element: <AdministrativeSupport /> },
  { path: "/healthcare/", element: <Healthcare /> },
  { path: "/marketing/", element: <Marketing /> },
  { path: "/web-design/", element: <WebDesign /> },
  { path: "/3d-animation/", element: <ThreeDAnimation /> },
  { path: "/logistics/", element: <Logistics /> },
  { path: "/privacy-policy/", element: <PrivacyPolicy /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <ThemeProvider>
        <Layout>
          <Suspense fallback={PageFallback}>
            <RouterProvider router={router} />
          </Suspense>
        </Layout>
      </ThemeProvider>
    </React.StrictMode>
  </HelmetProvider>
);

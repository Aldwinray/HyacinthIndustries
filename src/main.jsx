import React from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
//import App from "./App.jsx";
//screens
import Home from "./screens/Home.jsx";
import About from "./screens/About.jsx";
import Industries from "./screens/Industries.jsx";
import Contact from "./screens/Contact.jsx";
import Services from "./screens/Services.jsx";
import FAQ from "./screens/FAQ.jsx";
import Reforestation from "./screens/Reforestation.jsx";
import PrivacyPolicy from "./screens/PrivacyPolicy.jsx";

//subscreens
import GeneralServices from "./screens/industries/GeneralServices";
import AdministrativeSupport from "./screens/industries/AdministrativeSupport";
import Healthcare from "./screens/industries/Healthcare";
import Marketing from "./screens/industries/Marketing";
import WebDesign from "./screens/industries/WebDesign";
import ThreeDAnimation from "./screens/industries/3DAnimation";
import Logistics from "./screens/industries/Logistics";

import "animate.css";
import "./index.css";
import "./scss/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/industries",
    element: <Industries />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/reforestation",
    element: <Reforestation />,
  },
  {
    path: "/general-services",
    element: <GeneralServices />,
  },
  {
    path: "/administrative-support",
    element: <AdministrativeSupport />,
  },
  {
    path: "/healthcare",
    element: <Healthcare />,
  },
  {
    path: "/marketing",
    element: <Marketing />,
  },
  {
    path: "/web-design",
    element: <WebDesign />,
  },
  {
    path: "/3d-animation",
    element: <ThreeDAnimation />,
  },
  {
    path: "/logistics",
    element: <Logistics />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(  
    <HelmetProvider>
      <React.StrictMode>
        <ThemeProvider>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </ThemeProvider>
      </React.StrictMode>
   </HelmetProvider>  
);

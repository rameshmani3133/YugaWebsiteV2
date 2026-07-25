import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import FloatingActions from "../components/common/FloatingActions";
import Snackbar from "../components/common/Snackbar";

export default function MainLayout() {

  return (

    <>

      <Navbar />

      <main>

        <Outlet />

      </main>

      <Footer />

      <FloatingActions />

      <Snackbar />

    </>

  );

}
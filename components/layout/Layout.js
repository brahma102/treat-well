import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";



const Layout = ({ children }) => {
  return (
      <div className="">
        <Head>
          <title>Treat-Well Well</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
  );
};

export default Layout;
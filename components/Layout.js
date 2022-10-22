import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="my-3">{children}</div>
      </div>
      <Footer />
    </>
  );
}

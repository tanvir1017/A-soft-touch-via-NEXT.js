import React from "react";
import Footer from "./footer";
import Header from "./header";

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

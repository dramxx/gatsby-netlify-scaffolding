import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

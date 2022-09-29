import React from "react"
import Helmet from "react-helmet"

const Layout = ({ children, title = "Bienes raices" }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  )
}

export default Layout

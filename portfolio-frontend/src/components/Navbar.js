import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { NavWrapper, NavButton, NavCenter, NavHeader } from "../elements"

const Navbar = ({ toggleSidebar }) => {
  return (
    <NavWrapper id="top">
      <NavCenter>
        <NavHeader>
          <img src={logo} alt="logo" />
          <NavButton type="button" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </NavButton>
        </NavHeader>
        <PageLinks styleClass="nav-links"></PageLinks>
      </NavCenter>
    </NavWrapper>
  )
}

export default Navbar

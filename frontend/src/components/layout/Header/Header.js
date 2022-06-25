import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/books.png";
import "./Header.css";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  burgerColor: "#00ff00",
  logoWidth: "10vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#000",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1rem",
  link1Padding: "1.5rem",
  link1Border: "2px solid black",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35, 1)",
  searchIconColor: "rgba(35, 35, 35, 1)",
  cartIconColor: "rgba(35, 35, 35, 1)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  nav1Transition: 0.1,
  nav2Transition: 0.2,
  nav3Transition: 0.3,
  nav4Transition: 0.4,
  link1Transition: 0.1,
  link2Transition: 0.1,
  link3Transition: 0.1,
  link4Transition: 0.1,
  searchIconMargin: "1rem",
  cartIconMargin: "1rem",
  profileIconMargin: "1rem",
  searchIconSize: "4em",
  cartIconSize: "4em",
  profileIconSize: "4em",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;

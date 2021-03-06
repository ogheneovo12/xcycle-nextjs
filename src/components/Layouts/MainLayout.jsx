import React from "react";
import PropTypes from "prop-types";
import { Header } from "../Header";

function MainLayout({ children }) {
  return (
    <div id='main_layout'>
      <Header />
      <main>{children}</main>
    </div>
  );
}

MainLayout.propTypes = {};

export default MainLayout;

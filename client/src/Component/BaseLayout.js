import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';

const BaseLayout = (props) => {
  return <>
    <Navbar />
    {props.children}
    <Footer />
  </>
};
export default BaseLayout;
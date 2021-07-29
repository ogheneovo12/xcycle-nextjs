import React from "react";
import {
  MainLayout,
  Hero,
  HomeCarousel,
  TestimonialCarousel,
} from "../src/components";
import logo from "../assets/img/logo.jpg";
import Image from "next/image";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from "prop-types";

function App(props) {
  return (
    <MainLayout>
      <Hero />
      <HomeCarousel />
      <section className='gallery bt-bd'></section>
      <TestimonialCarousel />
      <section style={{paddingTop:50, minHeight:200}} className='pageWrap bt-bd'>
        <div className='title'>
          <h2>DO YOU HAVE ANY QUESTIONS?</h2>
        </div>
      </section>
      <section style={{paddingTop:50, minHeight:200}} className='pageWrap bt-bd' id="bff">
        <div className='title center dark'>
        <h2>JOIN THE <Image src={logo} /> FAMILY</h2>
        <p>In Xycle we believe clean and simple lifestyle leads to a healthy living. </p>
        </div>
      </section>
      <footer className="footer">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
      </footer>
    </MainLayout>
  );
}

App.propTypes = {};

export default App;

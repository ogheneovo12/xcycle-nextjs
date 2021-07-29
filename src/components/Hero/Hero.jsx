import React from "react";
import styles from "./Hero.module.scss";
import PropTypes from "prop-types";
import Link from "next/link";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero(props) {
  return (
    <section className={styles.hero}>
      <div className={`pageWrap ${styles.inner}`}>
        <div className={styles.hero_box}>
          <div
            className={`${styles.auth_btn}`}>
            <Link href="/login" ><a className='btn_ghost'>login</a></Link>
            <Link href="/sign up" ><a className='btn_primary'>sign up</a></Link>
          </div>
          <h1>
            THE <span className='logo-text'>XYCLE</span> NEVER ENDS
          </h1>
          <p>
            Be part of the solution and not pollution. Earn, sell and contribute
            to building a cleaner and safer world for our generation and the
            next.{" "}
          </p>
          <Link href='/register'>
            <a className={`btn_primary ${styles.cta}`}>
              I’m Interested! <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {};

export default Hero;

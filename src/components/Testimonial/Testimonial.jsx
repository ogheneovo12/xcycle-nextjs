import React from "react";
import PropTypes from "prop-types";
import styles from "./Testimonial.module.scss";
import Image from "next/image";

function Testimonial({ gravatar, name, quote, isActive }) {
  const isActiveClass = isActive ? styles.isActive : "";
  return (
    <div className={`${styles.testimonial} ${isActiveClass}`}>
      <Image src={gravatar} alt={`${name} picture`} width={250} height={300} />
      {isActive && (
        <div className={styles.details}>
          <h4>{name}</h4>
          <p>{quote}</p>
        </div>
      )}
    </div>
  );
}

Testimonial.propTypes = {};

export default Testimonial;

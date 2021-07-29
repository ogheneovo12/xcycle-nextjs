import React from "react";
import PropTypes from "prop-types";
import styles from "./wastebox.module.scss";
import Image from "next/image";
import Link from "next/link";

function WasteBox({ isActive, img, price, title }) {
  const isActiveClass = isActive ? styles.isActive : "";
  return (
    <div className={`${styles.wastebox} ${isActiveClass}`}>
      <Image src={img} alt='a waste item' />
      {isActive && (
        <div className={styles.details}>
          <h3>{title}</h3>
          <div className={styles.price}>
            <p>₦{price}</p>
            <Link href='/waste'>
              <a>see full details</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

WasteBox.propTypes = {};

export default WasteBox;

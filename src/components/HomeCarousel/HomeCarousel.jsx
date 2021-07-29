import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import WasteBox from "../WasteBox/WasteBox";
import Carousel from "../Carousel/Carousel";
import plastic from "../../../assets/img/plastic.png";
import paperglass from "../../../assets/img/paperglass.png";
import brushstick from "../../../assets/img/brushstick.png";

function HomeCarousel(props) {
  const data = [
    {
      title: "plastic",
      img: plastic,
      price: 3,
    },
    {
      title: "plastic",
      img: paperglass,
      price: 3,
    },
    {
      title: "plastic",
      img: brushstick,
      price: 3,
    },
  ];

  return (
    <section className={`pageWrap bt-bd ${styles.homeCarousel}`}>
      <div className='title center'>
        <h2>Nothing is a waste</h2>
        <p>
          Buy reusable items, cheaper and delivered at your doorstep. Just like
          that.
        </p>
      </div>
      <div className={styles.carouselRegion}>
        <Carousel
          data={data}
          compoment={WasteBox}
          slideClassName={styles.swiperSlide}
          className={styles.swiperContainer}
          wrapperStartClassName={styles.beforeWrapper}
          uniqueKeyProp="img"
        />
      </div>
    </section>
  );
}

HomeCarousel.propTypes = {};

export default HomeCarousel;

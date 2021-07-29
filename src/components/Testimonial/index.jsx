import React from 'react'
import Carousel from "../Carousel/Carousel";
import Testimonial from './Testimonial';
import styles from "./Testimonial.module.scss";


export function TestimonialCarousel(props) {


    const data = [{
        gravatar:"https://source.unsplash.com/AzVexpHvuKY/300x300",
        name:"SARAH NDLOVU",
        quote:"“Even your recycled wastes deserves a second chance.”",
    },{
        gravatar:"https://source.unsplash.com/h1lA3N5wb8M/300x300",
        name:"KILAYA SOLOMON",
        quote:"“Even your recycled wastes deserves a second chance.”",
    },{
        gravatar:"https://source.unsplash.com/IJrIeCs3D4g/300x300",
        name:"Samuel Bado",
        quote:"“Even your recycled wastes deserves a second chance.”",
    }]
   
    return (
        <section className={`pageWrap bt-bd ${styles.testimonialCarousel}`}>
        <div className='title center'>
          <h2>Sell your reusable wastes.</h2>
          <p>
          Don’t just throw away your trash. Earn from your recycled products.
          </p>
        </div>
        <div className={styles.carouselRegion}>
          <Carousel
            data={data}
            compoment={Testimonial}
            slideClassName={styles.swiperSlide}
            className={styles.swiperContainer}
            wrapperStartClassName={styles.beforeWrapper}
          />
        </div>
      </section>
    )
}

TestimonialCarousel.propTypes = {

}




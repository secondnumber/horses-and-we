import React from 'react';
import classes from './Testimonials.module.scss';
import Testimonial from './Testimonial/Testimonial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = (props) => {
  let testimonialsList = props.testimonials.testimonialsList.map((testimonial) => {
    if (testimonial.id <= 2) {
      return (
        <Testimonial
          name={testimonial.name}
          status={testimonial.status}
          description={testimonial.description}
          imageSmall={testimonial.src}
        />
      );
    }
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.headers}>
        <h2 className={classes.title}>Testimonials:</h2>
        <h2 className={classes.subtitle}>all Reviews</h2>
      </div>
      <div className={classes.block}>
        <button className={classes.toggle}>
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </span>
        </button>
        {testimonialsList}
        <button className={classes.toggle}>
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

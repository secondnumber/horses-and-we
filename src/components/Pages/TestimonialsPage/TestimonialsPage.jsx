import React from 'react';
import classes from './TestimonialsPage.module.scss';
import HeaderContainer from '../../common/Header';
import BreadcrumbsContainer from '../../common/Breadcrumbs';
import FooterContainer from '../../common/Footer';
import Testimonial from './Testimonial/Testimonial';
import Button from '../../common/Button/Button';

const TestimonialsPage = (props) => {
  let testimonialsList = props.testimonials.testimonialsList.map((testimonial) => {
    if (testimonial.id <= 4) {
      return (
        <Testimonial
          key={testimonial.id}
          name={testimonial.name}
          status={testimonial.status}
          description={testimonial.description}
          src={testimonial.src}
        />
      );
    }
  });

  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <ul className={classes.list}>{testimonialsList}</ul>
        <div className={classes.btnBlock}>
          <Button name={'Show more'} style={'buttonContour'} />
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default TestimonialsPage;

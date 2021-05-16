import React from 'react';
import HeaderContainer from '../../common/Header';
import BreadcrumbsContainer from '../../common/Breadcrumbs';
import TestimonialsContainer from '../MainPage/Testimonials/TestimonialsContainer';
import FormSubscribe from '../../common/Subscribe/Subscribe';
import FooterContainer from '../../common/Footer';
import About from './About/About';
import Achievements from './Achievements/Achievements';
import classes from './AboutPage.module.scss';

const AboutPage = (props) => {
  let aboutItems = props.aboutPage.aboutItems.map((element) => (
    <About
      key={element.id}
      number={element.number}
      title={element.title}
      subtitle={element.subtitle}
      text={element.text}
      video={element.video}
      labelOne={element.labelOne}
      labelTwo={element.labelTwo}
    />
  ));

  let achievementsItems = props.aboutPage.achievementsItems.map((element) => (
    <Achievements key={element.id} counter={element.counter} label={element.label} image={element.image} />
  ));
  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      {aboutItems}
      <div className={classes.wrapper}>
        <ul className={classes.list}>{achievementsItems}</ul>
      </div>
      <TestimonialsContainer />
      <FormSubscribe />
      <FooterContainer />
    </div>
  );
};

export default AboutPage;

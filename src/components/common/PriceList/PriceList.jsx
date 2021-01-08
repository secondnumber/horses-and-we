import React from 'react';
import classes from './PriceList.module.scss';
import Price from './Price/Price';

const PriceList = (props) => {
  let priceList = props.priceList.pricesList.map((price) => (
    <Price
      name={price.name}
      currency={price.currency}
      integer={price.integer}
      fraction={price.fraction}
      period={price.period}
      color={price.color}
      featureOne={price.featureOne}
      featureTwo={price.featureTwo}
      featureThree={price.featureThree}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h2 className={classes.title}>Our Pricing Plans</h2>
        <h2 className={classes.subtitle}>Spesial Plans</h2>
      </div>
      <div className={classes.block}>{priceList}</div>
    </div>
  );
};

export default PriceList;

import React from 'react';
import classes from './PageNumbers.module.scss';

const PageNumbers = (props) => {
  let pagesCount = Math.ceil(props.totalImagesCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let pagesItems = pages.map((page) => (
    <li className={classes.item} key={page}>
      <button
        className={props.currentPage === page ? classes.current : classes.button}
        onClick={() => {
          props.setCurrentPage(page);
        }}
      >
        {page}
      </button>
    </li>
  ));
  return <>{pagesItems}</>;
};

export default PageNumbers;

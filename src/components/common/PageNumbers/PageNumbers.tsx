import React from 'react';
import classes from './PageNumbers.module.scss';

type Props = {
  currentPage: number;
  totalImagesCount: number;
  pageSize: number;
  setCurrentPage: (page: number) => void;
};

const PageNumbers: React.FC<Props> = ({ currentPage, totalImagesCount, pageSize, setCurrentPage }) => {
  const pagesCount = Math.ceil(totalImagesCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const pagesItems = pages.map((page) => (
    <li className={classes.item} key={page}>
      <button
        className={currentPage === page ? classes.current : classes.button}
        onClick={() => {
          setCurrentPage(page);
        }}
      >
        {page}
      </button>
    </li>
  ));
  return <>{pagesItems}</>;
};

export default PageNumbers;

import React from 'react';
import classes from './StatisticPage.module.scss';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../common/Footer/FooterContainer';
import StatisticList from './StatisticList/StatisticList';
import StatisticFilter from './StatisticFilter/StatisticFilter';
import StatisticSearch from './StatisticSearch/StatisticSearch';
import StatisticData from './StatisticData/StatisticData';
import PageNumbersContainer from './PageNumbers/PageNumbersGontainer';
import StatisticFilterContainer from "./StatisticFilter/StatisticFilterContainer";

const StatisticPage = (props) => {
  const statisticList = props.statistic.statisticList.map((el) => (
    <StatisticList key={el.id} name={el.item} />
  ));

  const dataTable = props.statistic.statisticData.map((el, index) => {
    let pageSize = props.statistic.pageSize;
    let currentPage = props.statistic.currentPage;
    if ((index >= currentPage * pageSize - pageSize) && (index <= pageSize * currentPage - 1)) {
      return (
        <StatisticData
          key={el.id}
          name={el.name}
          position={el.position}
          age={el.age}
          date={el.startDate}
        />
      );
    }
  });
  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <div className={classes.headers}>
          <h2 className={classes.title}>Statistic</h2>
          <h2 className={classes.subtitle}>DATATABLE LIBRARY IS USED</h2>
        </div>
        <div className={classes.content}>
          <ul className={classes.list}>
            <li className={classes.label}>STATISTIC CATEGORIES</li>
            {statisticList}
          </ul>
          <div className={classes.data}>
            <div className={classes.utils}>
              <StatisticFilterContainer />
              <StatisticSearch />
            </div>
            <table className={classes.table}>
              <tr>
                <th className={classes.tableHeader}>Name</th>
                <th className={classes.tableHeader}>Position</th>
                <th className={classes.tableHeader}>Age</th>
                <th className={classes.tableHeader}>Start Date</th>
              </tr>
              {dataTable}
            </table>
            <ul className={classes.numbersList}>
              <PageNumbersContainer />
            </ul>
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default StatisticPage;

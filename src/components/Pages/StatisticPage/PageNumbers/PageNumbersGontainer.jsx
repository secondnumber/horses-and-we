import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setPageSize } from '../../../../redux/reducers/statisticReducer';
import PageNumbers from '../../../common/PageNumbers/PageNumbers';

class PageNumbersContainer extends React.Component {
  componentDidMount() {
    this.props.setCurrentPage(1);
  }
  setCurrentPage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
  };
  render() {
    return (
      <PageNumbers
        currentPage={this.props.statistic.currentPage}
        totalImagesCount={this.props.statistic.totalItemsCount}
        pageSize={this.props.statistic.pageSize}
        setCurrentPage={this.props.setCurrentPage}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    statistic: state.statistic,
  };
};
export default connect(mapStateToProps, { setCurrentPage, setPageSize })(PageNumbersContainer);

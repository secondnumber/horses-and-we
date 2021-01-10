import React from 'react';
import classes from './StatisticFilter.module.scss';

class StatisticFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageSize: 10 };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      pageSize: event.target.value,
    });
    this.props.setPageSize(this.state.pageSize);
  }

  render() {
    return (
      <label className={classes.filter}>
        Show
        <select value={this.state.pageSize} className={classes.select} onChange={this.handleChange}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        entries
      </label>
    );
  }
}

export default StatisticFilter;

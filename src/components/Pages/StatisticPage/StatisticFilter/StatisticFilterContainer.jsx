import React from 'react';
import { connect } from 'react-redux';
import { setPageSize } from '../../../../redux/reducers/statisticReducer';
import StatisticFilter from "./StatisticFilter";

class StatisticFilterContainer extends React.Component {
    componentDidMount() {
        this.props.setPageSize(10);
    }
    setPageSize = (pageSize) => {
        this.props.setPageSize(pageSize);
    }
    render() {
        return <StatisticFilter pageSize={this.props.statistic.pageSize} setPageSize={setPageSize}/>
    }
}

let mapStateToProps = (state) => {
    return {
        statistic: state.statistic,

    };
};
export default connect(mapStateToProps, { setPageSize })(
    StatisticFilterContainer
);
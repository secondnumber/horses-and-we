import React from 'react';
import { connect } from 'react-redux';
import Intro from "./Intro";

class IntroContainer extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Intro {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  slider: state.slider,
});

export default connect(mapStateToProps)(IntroContainer);

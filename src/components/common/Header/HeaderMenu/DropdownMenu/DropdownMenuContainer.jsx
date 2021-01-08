import React from 'react';
import { connect } from 'react-redux';
import DropdownMenu from './DropdownMenu';

export default class DropdownMenuContainer extends React.Component {
  render() {
    return (
      <div>
        <DropdownMenu {...this.props} />
      </div>
    );
  }
}

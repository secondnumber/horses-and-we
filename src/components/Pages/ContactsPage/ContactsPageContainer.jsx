import React from 'react';
import { connect } from 'react-redux';
import ContactsPage from './ContactsPage';

let mapStateToProps = (state) => {
  return {
    social: state.social,
    contacts: state.contacts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const ContactsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsPage);

export default ContactsPageContainer;

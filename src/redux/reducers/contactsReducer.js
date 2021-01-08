import React from 'react';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

let initialState = {
  header: 'Contact Information',
  description:
    'Pastrami tail landjaeger porchetta short ribs ham hock, bresaola kevin leberkas. Tenderloin ground round rump swine hamburger. Cupim jerky beef ribs tongue t-bone.',
  contactsItems: [
    {
      id: 1,
      name: 'Phone Number',
      value: '0-800-123-4567 (OPERATOR)',
      icon: faPhoneAlt,
      color: 'cyan',
    },
    {
      id: 2,
      name: 'Location Address',
      value: '1749 NE Miami Ct, Miami, FL 33132, USA',
      icon: faMapMarkerAlt,
      color: 'blue',
    },
    {
      id: 3,
      name: 'E-mail Address',
      value: 'GAMESPLAY@EXAMPLE.COM',
      icon: faEnvelope,
      color: 'lilac',
    },
  ],
};

const contactsPageReducer = (state = initialState, action) => {
  return state;
};

export default contactsPageReducer;

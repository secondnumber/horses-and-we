import { faPhoneAlt, faMapMarkerAlt, faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type InitialStateType = {
  header: string;
  description: string;
  contactsItems: Array<ContactsType>;
};

export type ContactsType = {
  id: number;
  name: string;
  value: string;
  icon: IconDefinition;
  color: string;
};

const initialState = {
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

const contactsPageReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default contactsPageReducer;

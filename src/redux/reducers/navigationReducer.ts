import LogoImage from '../../assets/Common/Logo.png';

export type InitialStateType = {
  logo: string;
  navMenuItems: Array<NavMenuType>;
  description: string;
};

export type NavMenuType = {
  id: number;
  menuItem: string;
  menuLink: string;
  nestedMenu?: Array<NestedMenuType>;
};

export type NestedMenuType = {
  id: number;
  nestedMenuItem: string;
  nestedMenuLink: string;
};

const initialState = {
  logo: LogoImage,
  navMenuItems: [
    { id: 1, menuItem: 'Homepage', menuLink: '/' },
    {
      id: 2,
      menuItem: 'Pages',
      menuLink: 'pages',
      nestedMenu: [
        { id: 1, nestedMenuItem: 'About', nestedMenuLink: '/pages/about' },
        { id: 2, nestedMenuItem: 'Faq', nestedMenuLink: '/pages/faq' },
        { id: 3, nestedMenuItem: 'Team', nestedMenuLink: '/pages/team' },
        {
          id: 4,
          nestedMenuItem: 'Pricing plans',
          nestedMenuLink: '/pages/price',
        },
        {
          id: 5,
          nestedMenuItem: 'Testimonials',
          nestedMenuLink: '/pages/testimonials',
        },
        {
          id: 6,
          nestedMenuItem: 'Statistic',
          nestedMenuLink: '/pages/statistic',
        },
      ],
    },
    { id: 3, menuItem: 'Gallery', menuLink: '/gallery' },
    { id: 4, menuItem: 'Games', menuLink: '/games' },
    { id: 5, menuItem: 'Blog', menuLink: '/blog' },
    { id: 6, menuItem: 'Contacts', menuLink: '/contacts' },
  ],
  description:
    'Andouille landjaeger flank boudin. Jerky cupim alcatra sirloin porchetta,\n' +
    'turkey short ribs leberkas doner bacon pancetta buffalo.',
};

const navigationReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default navigationReducer;

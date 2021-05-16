export type InitialStateType = {
  socialList: Array<SocialType>;
  description: string;
};

export type SocialType = {
  id: number;
  icon: Array<string>;
  link: string;
};

const initialState = {
  socialList: [
    { id: 1, icon: ['fab', 'facebook'], link: 'https://ru-ru.facebook.com/' },
    { id: 2, icon: ['fab', 'twitter'], link: 'https://twitter.com/' },
    { id: 3, icon: ['fab', 'skype'], link: 'https://www.skype.com/' },
    { id: 4, icon: ['fab', 'linkedin'], link: 'https://ru.linkedin.com/' },
    { id: 5, icon: ['fab', 'google'], link: 'https://www.google.ru/' },
  ],
  description: `Andouille landjaeger flank boudin. Jerky cupim alcatra sirloin porchetta, turkey short ribs leberkas doner bacon pancetta buffalo.`,
};

const socialReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default socialReducer;

import MemeberImage1 from '../../assets/TeamPage/team-1.jpg';
import MemeberImage2 from '../../assets/TeamPage/team-2.jpg';
import MemeberImage3 from '../../assets/TeamPage/team-3.jpg';
import MemeberImage4 from '../../assets/TeamPage/team-4.jpg';
import MemeberImage5 from '../../assets/TeamPage/team-5.jpg';
import MemeberImage6 from '../../assets/TeamPage/team-6.jpg';

export type InitialStateType = {
  teamList: Array<TeamType>;
};

export type TeamType = {
  id: number;
  image: string;
  name: string;
  rank: string;
  social: Array<SocialType>;
};

export type SocialType = {
  id: number;
  icon: Array<string>;
  link: string;
};

const initialState = {
  teamList: [
    {
      id: 1,
      image: MemeberImage1,
      name: 'Leah Perkins',
      rank: 'Founder',
      social: [
        { id: 1, icon: ['fab', 'facebook'], link: 'https://ru-ru.facebook.com/' },
        { id: 2, icon: ['fab', 'twitter'], link: 'https://twitter.com/' },
        { id: 3, icon: ['fab', 'google'], link: 'https://www.google.com/' },
      ],
    },
    {
      id: 1,
      image: MemeberImage2,
      name: 'Rosalie Foster',
      rank: 'Assistant',
      social: [
        { id: 1, icon: ['fab', 'facebook'], link: 'https://ru-ru.facebook.com/' },
        { id: 2, icon: ['fab', 'twitter'], link: 'https://twitter.com/' },
        { id: 3, icon: ['fab', 'google'], link: 'https://www.google.com/' },
      ],
    },
    {
      id: 1,
      image: MemeberImage3,
      name: 'Belle Medina',
      rank: 'Administrator',
      social: [
        { id: 1, icon: ['fab', 'facebook'], link: 'https://ru-ru.facebook.com/' },
        { id: 2, icon: ['fab', 'twitter'], link: 'https://twitter.com/' },
        { id: 3, icon: ['fab', 'google'], link: 'https://www.google.com/' },
      ],
    },
    {
      id: 1,
      image: MemeberImage4,
      name: 'Ruby Watson',
      rank: 'Designer',
      social: [
        { id: 1, icon: ['fab', 'facebook'], link: 'https://ru-ru.facebook.com/' },
        { id: 2, icon: ['fab', 'twitter'], link: 'https://twitter.com/' },
        { id: 3, icon: ['fab', 'google'], link: 'https://www.google.com/' },
      ],
    },
    {
      id: 1,
      image: MemeberImage5,
      name: 'Adelaide Tran',
      rank: 'Developer',
      social: [
        { id: 1, icon: ['fab', 'facebook'], link: 'https://ru-ru.facebook.com/' },
        { id: 2, icon: ['fab', 'twitter'], link: 'https://twitter.com/' },
        { id: 3, icon: ['fab', 'google'], link: 'https://www.google.com/' },
      ],
    },
    {
      id: 1,
      image: MemeberImage6,
      name: 'Eliza Norris',
      rank: 'Seo',
      social: [
        { id: 1, icon: ['fab', 'facebook'], link: 'https://ru-ru.facebook.com/' },
        { id: 2, icon: ['fab', 'twitter'], link: 'https://twitter.com/' },
        { id: 3, icon: ['fab', 'google'], link: 'https://www.google.com/' },
      ],
    },
  ],
};

const teamPageReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default teamPageReducer;

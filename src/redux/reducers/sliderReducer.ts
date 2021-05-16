import SliderImage1 from '../../assets/Slider/slide-1.jpg';

export type InitialStateType = {
  introList: Array<IntroType>;
  socialList: Array<SocialType>;
};

export type IntroType = {
  id: number;
  caption: string;
  header: string;
  description: string;
  image: string;
};

export type SocialType = {
  id: number;
  icon: Array<string>;
  link: string;
};

const initialState = {
  introList: [
    {
      id: 1,
      caption: 'Welcome to Gamesplay',
      header: 'Online gaming site',
      description:
        'Pork chop pastrami meatball, picanha salami capicola drumstick tri-tip flank short loin strip steak prosciutto\n' +
        ' leberkas jowl fatback. Alcatra kielbasa sausage, turkey short ribs shank bresaola.',
      image: SliderImage1,
    },
  ],
  socialList: [
    { id: 1, icon: ['fab', 'facebook'], link: 'https://ru-ru.facebook.com/' },
    { id: 2, icon: ['fab', 'twitter'], link: 'https://twitter.com/' },
    { id: 3, icon: ['fab', 'google-plus'], link: 'https://www.google.ru/' },
  ],
};

const sliderReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default sliderReducer;

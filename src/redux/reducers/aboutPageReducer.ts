import VideoSrc from '../../assets/AboutPage/earth.mp4';
import AchievementImg1 from '../../assets/AboutPage/ach1.png';
import AchievementImg2 from '../../assets/AboutPage/ach2.png';
import AchievementImg3 from '../../assets/AboutPage/ach3.png';
import AchievementImg4 from '../../assets/AboutPage/ach4.png';

export type AboutItemsType = {
  id: number;
  number: number;
  video: typeof VideoSrc;
};

export type AchievementsItemsType = {
  id: number;
  counter: number;
  image: typeof AchievementImg1;
};

export type InitialStateType = {
  aboutItems: Array<AboutItemsType>;
  achievementsItems: Array<AchievementsItemsType>;
};

const initialState = {
  aboutItems: [
    {
      id: 1,
      number: 12,
      video: VideoSrc,
    },
  ],
  achievementsItems: [
    { id: 1, counter: 1.2356, image: AchievementImg1 },
    { id: 2, counter: 254, image: AchievementImg2 },
    { id: 3, counter: 2.1245, image: AchievementImg3 },
    { id: 4, counter: 36, image: AchievementImg4 },
  ],
};

const aboutPageReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default aboutPageReducer;

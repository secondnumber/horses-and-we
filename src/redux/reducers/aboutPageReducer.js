import React from 'react';
import VideoSrc from '../../assets/AboutPage/earth.mp4';
import AchievementImg1 from '../../assets/AboutPage/ach1.png';
import AchievementImg2 from '../../assets/AboutPage/ach2.png';
import AchievementImg3 from '../../assets/AboutPage/ach3.png';
import AchievementImg4 from '../../assets/AboutPage/ach4.png';

let initialState = {
  aboutItems: [
    {
      id: 1,
      number: 12,
      title: 'games Experience',
      subtitle: 'Years in',
      text:
        'Chicken doner salami meatloaf picanha, pastrami short ribs kevin. Venison beef burgdoggen pork loin bacon, cow turkey. Hamburger kevin sirloin chuck, meatloaf pig picanha pancetta ham shank rump. \n' +
        '\n' +
        'Pastrami picanha pig filet mignon, hamburger landjaeger sirloin pancetta tenderloin tongue doner. Shoulder venison burgdoggen, doner shank short ribs ball tip cupim tongue. Shankle flank kevin pastrami bresaola pig ham. Pork beef venison landjaeger filet mignon.',
      video: VideoSrc,
      labelOne: 'Buffalo drumstick doner short;',
      labelTwo: 'Loin pork chop strip steak ground round.',
    },
  ],
  achievementsItems: [
    { id: 1, counter: 1.2356, label: 'Happy Clients', image: AchievementImg1 },
    { id: 1, counter: 254, label: 'won awards', image: AchievementImg2 },
    { id: 1, counter: 2.1245, label: 'Total gamers', image: AchievementImg3 },
    { id: 1, counter: 36, label: 'countries-players', image: AchievementImg4 },
  ],
};

const aboutPageReducer = (state = initialState, action) => {
  return state;
};

export default aboutPageReducer;

import Video1 from '../../assets/Video/earth.mp4';

let initialState = {
  togglesItems: [
    { id: 1, toggleItem: 'Most popular streams', toggleClass: 'tag1' },
    { id: 2, toggleItem: 'Upcoming Competitions', toggleClass: 'tag2' },
    { id: 3, toggleItem: 'Prosciutto meatball flank', toggleClass: 'tag3' },
  ],

  videosItems: [
    {
      id: 1,
      file: Video1,
      header: 'CREATE YOUR OWN CHANNEL AND START TO STREAM GAMES NOW',
      descriprion:
        'Drumstick meatloaf capicola short ribs, pork chop cupim kielbasa jerky porchetta pancetta chicken pastrami turkey tenderloin sausage. ' +
        'Pig buffalo alcatra meatball. T-bone hamburger bresaola kevin shank porchetta ground. Round beef tail tri-tip. Short loin pork strip steak venison.',
      caption: '9 136 streams from most recent games',
      count: '267 347 watching now',
    },
  ],
};

const videosReducer = (state = initialState, action) => {
  return state;
};

export default videosReducer;

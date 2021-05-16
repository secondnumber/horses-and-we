import { combineReducers, createStore } from 'redux';
import aboutPageReducer from './reducers/aboutPageReducer';
import breadcrumbsReducer from './reducers/breadcrumbsReducer';
import socialReducer from './reducers/socialReducer';
import galleryReducer from './reducers/galleryReducer';
import gamesReducer from './reducers/gamesReducer';
import notFoundPageReducer from './reducers/notFoundPageReducer';
import postsReducer from './reducers/postsReducer';
import priceListReducer from './reducers/priceListReducer';
import questionsReducer from './reducers/questionsReducer';
import sliderReducer from './reducers/sliderReducer';
import testimonialsReducer from './reducers/testimonialsReducer';
import videosReducer from './reducers/videosReducer';
import teamPageReducer from './reducers/teamPageReducer';
import navigationReducer from './reducers/navigationReducer';
import scrollReducer from './reducers/scrollReducer';
import contactsPageReducer from './reducers/contactsReducer';
import mapReducer from './reducers/mapReducer';
import commonReducer from './reducers/commonReducer';
import faqReducer from './reducers/faqReducer';
import blogReducer from './reducers/blogReducer';
import statisticReducer from './reducers/statisticReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  aboutPage: aboutPageReducer,
  breadcrumbs: breadcrumbsReducer,
  social: socialReducer,
  gallery: galleryReducer,
  games: gamesReducer,
  navigation: navigationReducer,
  notFoundPage: notFoundPageReducer,
  posts: postsReducer,
  priceList: priceListReducer,
  questions: questionsReducer,
  slider: sliderReducer,
  testimonials: testimonialsReducer,
  videos: videosReducer,
  teamPage: teamPageReducer,
  scroll: scrollReducer,
  contacts: contactsPageReducer,
  map: mapReducer,
  common: commonReducer,
  faq: faqReducer,
  blog: blogReducer,
  statistic: statisticReducer,
  form: formReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer);

export default store;

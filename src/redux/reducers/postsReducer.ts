import PostImg1 from '../../assets/Posts/blog-img-1.jpg';
import PostImg2 from '../../assets/Posts/blog-img-2.jpg';
import PostImg3 from '../../assets/Posts/blog-img-3.jpg';

export type InitialStateType = {
  postsList: Array<PostType>;
};

export type PostType = {
  id: number;
  name: string;
  tag: string;
  date: string;
  description: string;
  author: string;
  comments: number;
  src: string;
  color: string;
};

const initialState = {
  postsList: [
    {
      id: 1,
      name: 'Cow biltong pork belly kielbasa shankle',
      tag: 'xbox',
      date: 'mar 14, 2018',
      description:
        'Turducken cupim hamburger beef ribs picanha, drumstick buffalo tri-tip cow. Turducken prosciutto shank pork chop.',
      author: 'Admin',
      comments: 126,
      src: PostImg1,
      color: 'cyan',
    },
    {
      id: 2,
      name: 'Cow short ribs beef strip steak jowl',
      tag: 'ps 3',
      date: 'mar 18, 2018',
      description:
        'Capicola beef ribs pastrami biltong pork chop corned beef alcatra tail landjaeger. Spare ribs t-bone buffalo capicola, pork belly.',
      author: 'Admin',
      comments: 452,
      src: PostImg2,
      color: 'blue',
    },
    {
      id: 3,
      name: 'boudin shankle pork belly turducken spare rib',
      tag: 'ps vita',
      date: 'mar 23, 2018',
      description:
        'Capicola chicken rump biltong boudin corned beef prosciutto short loin pork chop fatback flank beef porchetta tenderloin.',
      author: 'Admin',
      comments: 364,
      src: PostImg3,
      color: 'lilac',
    },
  ],
};

const postsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default postsReducer;

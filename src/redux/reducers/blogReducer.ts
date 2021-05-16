import instaImg1 from '../../assets/BlogPage/InstaWidget/insta-img-1.jpg';
import instaImg2 from '../../assets/BlogPage/InstaWidget/insta-img-2.jpg';
import instaImg3 from '../../assets/BlogPage/InstaWidget/insta-img-3.jpg';
import instaImg4 from '../../assets/BlogPage/InstaWidget/insta-img-4.jpg';
import instaImg5 from '../../assets/BlogPage/InstaWidget/insta-img-5.jpg';
import instaImg6 from '../../assets/BlogPage/InstaWidget/insta-img-6.jpg';
import avatarImg1 from '../../assets/BlogPage/Status/status-author.jpg';
import postImgSmall1 from '../../assets/BlogPage/PostsImg/latest-img-1.jpg';
import postImgSmall2 from '../../assets/BlogPage/PostsImg/latest-img-2.jpg';
import postImgSmall3 from '../../assets/BlogPage/PostsImg/latest-img-3.jpg';
import postImgMedium1 from '../../assets/BlogPage/PostsImg/blog-img-1.jpg';
import postImgMedium2 from '../../assets/BlogPage/PostsImg/blog-img-2.jpg';
import postImgMedium3 from '../../assets/BlogPage/PostsImg/blog-img-3.jpg';
import postImgMedium4 from '../../assets/BlogPage/PostsImg/blog-img-4.jpg';
import postImgMedium5 from '../../assets/BlogPage/PostsImg/blog-img-5.jpg';
import postImgMedium6 from '../../assets/BlogPage/PostsImg/blog-img-6.jpg';

export type InitialStateType = {
  status: Array<UserType>;
  instaImageList: Array<InstaImageType>;
  categoriesList: Array<CategoriesType>;
  twitslist: Array<TwitsType>;
  postsList: Array<PostsType>;
};

export type UserType = {
  id: number;
  name: string;
  position: string;
  avatar: string;
  text: string;
};

export type InstaImageType = {
  id: number;
  image: string;
};

export type CategoriesType = {
  id: number;
  name: string;
  counter: number;
};

export type TwitsType = {
  id: number;
  text: string;
  link: string;
};

export type PostsType = {
  id: number;
  tag: string;
  header: string;
  date: string;
  intro: string;
  text: string;
  author: string;
  comments: number;
  imgSmall: string;
  imgMedium: string;
  imgBig: string;
};

const initialState = {
  status: [
    {
      id: 1,
      name: 'WILLIAM CASTRO',
      position: 'GAMER',
      avatar: avatarImg1,
      text:
        'Fatback landjaeger prosciutto jerky ham. Salami cupim leberkas. Kevin bacon shankle tenderloin ground round. Spare ribs pork belly cupim. Shoulder short ribs jowl pork chop. Chuck ham t-bone.',
    },
  ],
  instaImageList: [
    { id: 1, image: instaImg1 },
    { id: 2, image: instaImg2 },
    { id: 3, image: instaImg3 },
    { id: 4, image: instaImg4 },
    { id: 5, image: instaImg5 },
    { id: 6, image: instaImg6 },
  ],
  categoriesList: [
    { id: 1, name: 'All categories', counter: 375 },
    { id: 2, name: 'Pancetta landjeager', counter: 75 },
    { id: 3, name: 'Alcatra ground', counter: 142 },
    { id: 4, name: 'Round pork turkey', counter: 269 },
  ],
  twitslist: [
    {
      id: 1,
      text: 'Turducken cupim hamburger beef ribs picanha, drumstick buffalo tri-tip cow. Turducken prosciutto shank.',
      link: 'http://t.co/hVbJKs9eRt',
    },
    {
      id: 2,
      text: 'Tongue picanha cow tri-tip, bacon sausage meatloaf kielbasa prosciutto.',
      link: 'http://t.co/hVbJKs9eRt',
    },
  ],
  postsList: [
    {
      id: 1,
      tag: 'XBOX',
      header: 'PANCETTA COW FILET MIGNON SHOULDER BACON SAUSAGE MEATLOAF',
      date: 'MAY 20, 2020',
      intro:
        'Sirloin filet mignon bresaola kevin drumstick buffalo bacon jerky short loin pork belly pancetta chicken ball tip kielbasa corned beef.',
      text:
        'Brisket pig pork belly beef porchetta filet mignon pork loin capicola ribeye cow picanha. Bresaola leberkas pork loin, shank hamburger chuck andouille cupim fatback alcatra turkey flank bacon. Bresaola pork loin fatback meatloaf turducken pork belly andouille ham hock picanha. Pancetta sausage cow, spare ribs flank kevin hamburger tri-tip rump pork loin alcatra jerky pig tenderloin. Meatloaf jowl tail doner ground.\n' +
        '\n' +
        'Brisket ham hock chuck cupim andouille beef ribs turducken pork belly. Picanha filet mignon tenderloin venison sirloin biltong. Picanha jerky venison chuck, filet mignon sirloin t-bone rump short loin salami pork loin tenderloin corned beef swine ground round. Ball tip rump prosciutto ham. Sirloin venison jowl brisket shank andouille.',
      author: 'WILLIAM CASTRO',
      comments: 0,
      imgSmall: postImgSmall1,
      imgMedium: postImgMedium1,
      imgBig: '',
    },
    {
      id: 2,
      tag: 'PS 3',
      header: 'ALCATRA RUMP TENDERLOIN, CAPICOLA KIELBASA',
      date: 'MAY 25, 2020',
      intro:
        'Shank bacon tail, pork loin beef jerky porchetta. Meatloaf venison ham corned beef andouille frankfurter pastrami.',
      text:
        'Brisket pig pork belly beef porchetta filet mignon pork loin capicola ribeye cow picanha. Bresaola leberkas pork loin, shank hamburger chuck andouille cupim fatback alcatra turkey flank bacon. Bresaola pork loin fatback meatloaf turducken pork belly andouille ham hock picanha. Pancetta sausage cow, spare ribs flank kevin hamburger tri-tip rump pork loin alcatra jerky pig tenderloin. Meatloaf jowl tail doner ground.\n' +
        '\n' +
        'Brisket ham hock chuck cupim andouille beef ribs turducken pork belly. Picanha filet mignon tenderloin venison sirloin biltong. Picanha jerky venison chuck, filet mignon sirloin t-bone rump short loin salami pork loin tenderloin corned beef swine ground round. Ball tip rump prosciutto ham. Sirloin venison jowl brisket shank andouille.',
      author: 'WILLIAM CASTRO',
      comments: 0,
      imgSmall: postImgSmall2,
      imgMedium: postImgMedium2,
      imgBig: '',
    },
    {
      id: 3,
      tag: 'GAMES',
      header: 'PORCHETTA VENISON PORK LOIN TRI-TIP SHANK SPARE RIBS',
      date: 'JUN 08, 2020',
      intro:
        'Turducken cupim hamburger beef ribs picanha, drumstick buffalo tri-tip cow. Turducken prosciutto shank pork chop frankfurter shankle.',
      text:
        'Brisket pig pork belly beef porchetta filet mignon pork loin capicola ribeye cow picanha. Bresaola leberkas pork loin, shank hamburger chuck andouille cupim fatback alcatra turkey flank bacon. Bresaola pork loin fatback meatloaf turducken pork belly andouille ham hock picanha. Pancetta sausage cow, spare ribs flank kevin hamburger tri-tip rump pork loin alcatra jerky pig tenderloin. Meatloaf jowl tail doner ground.\n' +
        '\n' +
        'Brisket ham hock chuck cupim andouille beef ribs turducken pork belly. Picanha filet mignon tenderloin venison sirloin biltong. Picanha jerky venison chuck, filet mignon sirloin t-bone rump short loin salami pork loin tenderloin corned beef swine ground round. Ball tip rump prosciutto ham. Sirloin venison jowl brisket shank andouille.',
      author: 'WILLIAM CASTRO',
      comments: 0,
      imgSmall: postImgSmall3,
      imgMedium: postImgMedium3,
      imgBig: '',
    },
    {
      id: 4,
      tag: 'PS 3',
      header: 'Shirloin leberkas pig, rump ham hock tail shank burgdogen',
      date: 'JUN 10, 2020',
      intro:
        'Tongue ham salami shankle shoulder swine. Doner jowl buffalo filet mignon pastrami strip steak, frankfurter alcatra shoulder burgdoggen. porchetta.',
      text:
        'Brisket pig pork belly beef porchetta filet mignon pork loin capicola ribeye cow picanha. Bresaola leberkas pork loin, shank hamburger chuck andouille cupim fatback alcatra turkey flank bacon. Bresaola pork loin fatback meatloaf turducken pork belly andouille ham hock picanha. Pancetta sausage cow, spare ribs flank kevin hamburger tri-tip rump pork loin alcatra jerky pig tenderloin. Meatloaf jowl tail doner ground.\n' +
        '\n' +
        'Brisket ham hock chuck cupim andouille beef ribs turducken pork belly. Picanha filet mignon tenderloin venison sirloin biltong. Picanha jerky venison chuck, filet mignon sirloin t-bone rump short loin salami pork loin tenderloin corned beef swine ground round. Ball tip rump prosciutto ham. Sirloin venison jowl brisket shank andouille.',
      author: 'WILLIAM CASTRO',
      comments: 0,
      imgSmall: postImgSmall3,
      imgMedium: postImgMedium4,
      imgBig: '',
    },
    {
      id: 5,
      tag: 'CHAT',
      header: 'Meatlof strip steak ball tip venison prosciuto shankle',
      date: 'JUN 17, 2020',
      intro:
        'Capicola leberkas biltong pork belly chuck. Kielbasa pig pork chop venison tail buffalo chuck shank t-bone flank tongue ground round pork loin.',
      text:
        'Brisket pig pork belly beef porchetta filet mignon pork loin capicola ribeye cow picanha. Bresaola leberkas pork loin, shank hamburger chuck andouille cupim fatback alcatra turkey flank bacon. Bresaola pork loin fatback meatloaf turducken pork belly andouille ham hock picanha. Pancetta sausage cow, spare ribs flank kevin hamburger tri-tip rump pork loin alcatra jerky pig tenderloin. Meatloaf jowl tail doner ground.\n' +
        '\n' +
        'Brisket ham hock chuck cupim andouille beef ribs turducken pork belly. Picanha filet mignon tenderloin venison sirloin biltong. Picanha jerky venison chuck, filet mignon sirloin t-bone rump short loin salami pork loin tenderloin corned beef swine ground round. Ball tip rump prosciutto ham. Sirloin venison jowl brisket shank andouille.',
      author: 'WILLIAM CASTRO',
      comments: 0,
      imgSmall: postImgSmall3,
      imgMedium: postImgMedium5,
      imgBig: '',
    },
    {
      id: 6,
      tag: 'GAMES',
      header: 'Buffalo drumstick doner short',
      date: 'MAR 22, 2018',
      intro:
        'Sirloin filet mignon bresaola kevin drumstick buffalo bacon jerky short loin pork belly pancetta chicken ball tip kielbasa corned beef.',
      text:
        'Brisket pig pork belly beef porchetta filet mignon pork loin capicola ribeye cow picanha. Bresaola leberkas pork loin, shank hamburger chuck andouille cupim fatback alcatra turkey flank bacon. Bresaola pork loin fatback meatloaf turducken pork belly andouille ham hock picanha. Pancetta sausage cow, spare ribs flank kevin hamburger tri-tip rump pork loin alcatra jerky pig tenderloin. Meatloaf jowl tail doner ground.\n' +
        '\n' +
        'Brisket ham hock chuck cupim andouille beef ribs turducken pork belly. Picanha filet mignon tenderloin venison sirloin biltong. Picanha jerky venison chuck, filet mignon sirloin t-bone rump short loin salami pork loin tenderloin corned beef swine ground round. Ball tip rump prosciutto ham. Sirloin venison jowl brisket shank andouille.',
      author: 'WILLIAM CASTRO',
      comments: 0,
      imgSmall: postImgSmall3,
      imgMedium: postImgMedium6,
      imgBig: '',
    },
  ],
};

const blogReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default blogReducer;

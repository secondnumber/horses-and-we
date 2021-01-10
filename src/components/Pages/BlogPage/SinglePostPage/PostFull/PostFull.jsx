import React from 'react';
import classes from './PostFull.module.scss';
import ImgBig from '../../../../../assets/BlogPage/PostsImg/post-full.jpg';
import Img1 from '../../../../../assets/BlogPage/PostsImg/blog-img-1.jpg';
import Img2 from '../../../../../assets/BlogPage/PostsImg/blog-img-2.jpg';
import Img3 from '../../../../../assets/BlogPage/PostsImg/blog-img-3.jpg';

const PostFull = (props) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>BUFFALO DRUMSTICK DONER SHORT</h2>
      <img className={classes.cover} src={ImgBig} />
      <div className={classes.content}>
        <div className={classes.label}>
          <span className={classes.tag}>XBOX</span>
          <span className={classes.date}>MAR 14, 2018</span>
        </div>
        <p className={classes.text}>
          Brisket pig pork belly beef porchetta filet mignon pork loin capicola ribeye cow picanha. Bresaola leberkas
          pork loin, shank hamburger chuck andouille cupim fatback alcatra turkey flank bacon. Bresaola pork loin
          fatback meatloaf turducken pork belly andouille ham hock picanha. Pancetta sausage cow, spare ribs flank kevin
          hamburger tri-tip rump pork loin alcatra jerky pig tenderloin. Meatloaf jowl tail doner ground. <br />
          <br />
          Brisket ham hock chuck cupim andouille beef ribs turducken pork belly. Picanha filet mignon tenderloin venison
          sirloin biltong. Picanha jerky venison chuck, filet mignon sirloin t-bone rump short loin salami pork loin
          tenderloin corned beef swine ground round. Ball tip rump prosciutto ham. Sirloin venison jowl brisket shank
          andouille.
        </p>
        <div className={classes.images}>
          <img className={classes.image} src={Img1} />
          <img className={classes.image} src={Img2} />
          <img className={classes.image} src={Img3} />
        </div>
        <p className={classes.text}>
          Brisket ham hock chuck cupim andouille beef ribs turducken pork belly. Picanha filet mignon tenderloin venison
          sirloin biltong. Picanha jerky venison chuck, filet mignon sirloin t-bone rump short loin salami pork loin
          tenderloin corned beef swine ground round. Ball tip rump prosciutto ham. Sirloin venison jowl brisket shank
          andouille.
        </p>
      </div>
    </div>
  );
};

export default PostFull;

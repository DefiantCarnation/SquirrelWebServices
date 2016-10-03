import React, { PropTypes } from 'react';

const ArticleInfoFromFriendPresentational = (props) => {
  // props.image = props.image || './styles/img/flying-squirrel-grey.png'
  const image = props.image || './styles/img/flying-squirrel-grey.png'
  const divStyle = {
    backgroundImage: 'url(' + image + ')',
  };
  // const dummyphotoMike  = 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgXAAAAJGQ2MDIyODY3LTU2ODktNGRmMS1iNGVkLTY3YjQwM2VkMGEwMw.jpg';
  const dummyphotoJordan = ['https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/p320x320/13592162_10154405816284363_2728511714196473_n.jpg?oh=b76da1d3155fb55208c9bafddfbb4ac6&oe=586FBF09', 'Jordan'];
  const dummyphotoDamien = ['https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/1527139_10152267508116754_881470078_n.jpg?oh=afe1e63671a7fc44e949b5498df82696&oe=58A7340B', 'Damien'];
  const dummyphotoWendy = ['https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/p320x320/10847955_10152461729501892_744236920717164446_n.jpg?oh=fe855d398d9b9c90a7c0a64dbcd2e00b&oe=58AD662D', 'Wendy'];
  const dummyphotoArray = [dummyphotoJordan, dummyphotoWendy, dummyphotoDamien];
  // const random = Math.floor(Math.random() * 4);  

  return (
      <div className='article_from_friend_card shadowDepth1'>
        <div className='friend_article_image_block'>
          <div style={divStyle} className='friend_article_image'/>
        </div>
        <div className='friend_article_image_content'>
          <div className='friend_article_title'>
            <a href={props.url}>{props.title}</a>
          </div>
          <div className='friend_article_friend_image'>
            <p>Recommended by {dummyphotoJordan[1]}</p>
            <img src={dummyphotoJordan[0]} alt="" className="friend_article_friend_img circle responsive-img"/>
          </div>
        </div>
      </div>
    );
};

export default ArticleInfoFromFriendPresentational;

// <div className="wrapper__friend">
//       <div className="card radius shadowDepth1">
//         <div className="card__image__friend border-tlr-radius">
//           <div style={divStyle} className='card__image2'/>
//         </div>

//         <div className="card__content card__padding">
//                   <div className="card__share">
//                       <div className="card__social">  
//                           <a className="share-icon facebook" href="#"><span className="fa fa-facebook"></span></a>
//                           <a className="share-icon twitter" href="#"><span className="fa fa-twitter"></span></a>
//                           <a className="share-icon googleplus" href="#"><span className="fa fa-google-plus"></span></a>
//                       </div>

//                       <a onClick={props.onSocialClick} id="share" className="share-toggle share-icon" href="#"></a>
//                   </div>

//           <div className="card__meta">
//             <a href="#">Category</a>
//                       <time>17th March</time>
//           </div>

//           <article className="card__article">
//             <span className="card__title"><a href={props.url}>{props.title}</a></span>

//             <p className="">{props.excerpt || `Sorry! No summary available! Click on link to find out more!`}</p>
//           </article>
//         </div>

//         <div className="card__action">
          
//           <div className="card__author">
//             <img src="./styles/img/flying-squirrel-orange.png" alt="user"/>
//             <div className="card__author-content">
//               By <a href="#">{props.author}</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>


  // var test = (
  //   <div className="mdl-card mdl-shadow--2dp mdl-card--horizontal">
  //     <div className="mdl-card__media">
  //       <div style={divStyle}/>
  //     </div>
  //       <div className="mdl-card__title">
  //         <h2 className="mdl-card__title-text"><a href={props.url}>{props.title}</a></h2>
  //       </div>
  //       <div className="mdl-card__supporting-text">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //         Mauris sagittis pellentesque lacus eleifend lacinia...
  //       </div>
  //       <div className="mdl-card__actions mdl-card--border">
  //         <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">Get Started</a>
  //       </div>
  //       <div className="mdl-card__menu">
  //         <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple"><i className="material-icons">share</i></button>
  //       </div>
  //   </div>
  //   );

  // return test;
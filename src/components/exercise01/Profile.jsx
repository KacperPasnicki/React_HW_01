import ProfileCss from './Profile.module.css'

import PropTypes from 'prop-types';

// export const UserData = 
// ({
//     "username": "Jacques Gluke",
//     "tag": "jgluke",
//     "location": "Ocho Rios, Jamaica",
//     "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//     "stats": {
//       "followers": 5603,
//       "views": 4827,
//       "likes": 1308
//     }
//   })

 export const Profile = ({username, tag, location, avatar, stats}) => {
  
      const ProfileList = [
        [1, 'followers', stats.followers],
       [ 2, 'views', stats.views],
       [ 3, 'likes', stats.likes],
      ].map(([id, string, value])=>{
        return (<li key={id} className={ProfileCss.s}>
          <span className={ProfileCss.label}>{string}</span>
          <span className={ProfileCss.quantity}>{value}</span>
        </li>)


      })

return(<div className={ProfileCss.profile}>
  <div className={ProfileCss.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={ProfileCss.img}
      width="140"/>
    <p className={ProfileCss.username}>{username}</p>
    <p className={ProfileCss.tag}>{tag}</p>
    <p className={ProfileCss.location}>{location}</p>
  </div>
      <ul className={ProfileCss.stats}>{ProfileList}</ul>
</div>
) }



Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.any.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
    }).isRequired,
}
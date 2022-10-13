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
        return (<li key={id} class={ProfileCss.s}>
          <span class={ProfileCss.label}>{string}</span>
          <span class={ProfileCss.quantity}>{value}</span>
        </li>)


      })

return(<div class={ProfileCss.profile}>
  <div class={ProfileCss.description}>
    <img
      src={avatar}
      alt="User avatar"
      class={ProfileCss.img}
      width="140"/>
    <p class={ProfileCss.username}>{username}</p>
    <p class={ProfileCss.tag}>{tag}</p>
    <p class={ProfileCss.location}>{location}</p>
  </div>
      <ul class={ProfileCss.stats}>{ProfileList}</ul>
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
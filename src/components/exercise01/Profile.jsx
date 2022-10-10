import ProfileCss from './Profile.module.css'

export const UserData = 
({
    "username": "Jacques Gluke",
    "tag": "jgluke",
    "location": "Ocho Rios, Jamaica",
    "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    "stats": {
      "followers": 5603,
      "views": 4827,
      "likes": 1308
    }
  })

 export const Profile = props =>
 (<div class={ProfileCss.profile}>
  <div class={ProfileCss.description}>
    <img
      src={UserData.avatar}
      alt="User avatar"
      class={ProfileCss.img}
      width="140"/>
    <p class={ProfileCss.username}>{UserData.username}</p>
    <p class={ProfileCss.tag}>{UserData.tag}</p>
    <p class={ProfileCss.location}>{UserData.location}</p>
  </div>

  <ul class={ProfileCss.stats}>
    <li class={ProfileCss.s}>
      <span class={ProfileCss.label}>Followers</span>
      <span class={ProfileCss.quantity}>{UserData.stats.followers}</span>
    </li>
    <li>
      <span class={ProfileCss.label}>Views</span>
      <span class={ProfileCss.quantity}>{UserData.stats.views}</span>
    </li>
    <li>
      <span class={ProfileCss.label}>Likes</span>
      <span class={ProfileCss.quantity}>{UserData.stats.likes}</span>
    </li>
  </ul>
</div>)




import FriendsListCss from './FriendsList.module.css'
import PropTypes from 'prop-types';



   



export const FriendsList = ({friends}) => {
    
    
    const FriendsRender = friends.map(friend =>
        {
            return(
                <li class = {FriendsListCss.listElement} key={friend.id}>
                    <span className = {friend.isOnline  ? FriendsListCss.statusGreen : FriendsListCss.statusRed } > &bull; </span>
                    
                    <img class={FriendsListCss.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p class={FriendsListCss.name}>{friend.name}</p>
                
                </li>
                
                )
             }
                )
        return(<ul class={FriendsListCss.friendList}>{FriendsRender}</ul>)
       
     }
     
    
     FriendsList.propTypes = {
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
       
    }
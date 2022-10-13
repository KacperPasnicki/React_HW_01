import FriendsListCss from './FriendsList.module.css'
import PropTypes from 'prop-types';



   



export const FriendsList = ({friends}) => {
    
    
    const FriendsRender = friends.map(friend =>
        {
            return(
                <li className = {FriendsListCss.listElement} key={friend.id}>
                    <span className = {friend.isOnline  ? FriendsListCss.statusGreen : FriendsListCss.statusRed } > &bull; </span>
                    
                    <img className={FriendsListCss.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={FriendsListCss.name}>{friend.name}</p>
                
                </li>
                
                )
             }
                )
        return(<ul className={FriendsListCss.friendList}>{FriendsRender}</ul>)
       
     }
     
    
     FriendsList.propTypes = {
        friends: PropTypes.array.isRequired,
       
       
    }
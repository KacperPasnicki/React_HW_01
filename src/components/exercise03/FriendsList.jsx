import FriendsListCss from './FriendsList.module.css'

export const friends =
    [
        {
          "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
          "name": "Mango",
          "isOnline": true,
          "id": 1812
        },
        {
          "avatar": "https://cdn-icons-png.flaticon.com/512/616/616438.png",
          "name": "Kiwi",
          "isOnline": false,
          "id": 1137
        },
        {
          "avatar": "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
          "name": "Ajax",
          "isOnline": true,
          "id": 1213
        },
        {
          "avatar": "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
          "name": "Jay",
          "isOnline": true,
          "id": 1714
        },
        {
          "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
          "name": "Poly",
          "isOnline": false,
          "id": 1284
        }
      ]



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
     
    

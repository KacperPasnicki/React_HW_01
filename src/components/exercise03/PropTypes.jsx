import FriendsList from './FriendsList'
import PropTypes from 'prop-types';

FriendsList.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.boolen.isRequired,

}
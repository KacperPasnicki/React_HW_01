import {Profile, UserData} from './Profile.jsx'


Profile.propTypes = {
username: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
location: PropTypes.string.isRequired,
stats: PropTypes.number.isRequired
}
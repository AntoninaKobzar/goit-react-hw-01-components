
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
    return (
        <ul className={css.list}>
            {friends.map((friend) => (
                <FriendListItem key={friend.id}{...friend} />
            ))}
</ul>
            );
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline:PropTypes.bool.isRequired,
        }),
    ),
};
export default FriendList;
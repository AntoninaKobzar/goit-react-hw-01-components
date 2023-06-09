
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({friends}) => (
        <ul className={css.list}>
            {friends.map(({id,avatar,name,isOnline}) => (
                <FriendListItem key={id} avatar={avatar}
                    name={name} isOnline={isOnline} />
            ))}
</ul>
            );

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline:PropTypes.bool,}),
    ).isRequired,
};
export default FriendList;
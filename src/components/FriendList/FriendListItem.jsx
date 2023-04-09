
import css from './FriendList.module.css';
import PropTypes from 'prop-types';


const FriendListItem = ({avatar, name, isOnline,}) => {
    return (
        <li className={css.item}>
            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
</li>   
    );
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline:PropTypes.bool.isRequired,
        }),
    ),
};
export default FriendListItem;

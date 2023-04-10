
import PropTypes from 'prop-types';
import css from './FriendList.module.css';


const FriendListItem = ({avatar, name, isOnline,}) => (
        <li className={css.item}>
            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="60" />
            <p className={css.name}>{name}</p>
</li>   
    );

FriendListItem.propTypes = {
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline:PropTypes.bool,
};
export default FriendListItem;

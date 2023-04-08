import React from 'react';
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
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar:PropTypes.string.isRequired,
}
export default FriendListItem;

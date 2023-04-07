import React from 'react';
import css from './FriendList.module.css';
import PropTypes, { bool } from 'prop-types';


const FriendListItem = ({avatar, name, isOnline, id,}) => {
    return (
        <li className={css.item} id={id}>
            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
</li>
            
        
    );
};
FriendListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    avatar:PropTypes.object,
}
export default FriendListItem;

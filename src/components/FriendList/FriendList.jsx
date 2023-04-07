import React from 'react';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';
import friends from './friends.json';



const FriendList = (props) => {
    return (
        <ul className={css.list}>
            {friends.map((friend) => {
                return <FriendListItem key={friend.id}{...friend} />;
            })}
</ul>
            );
};
export default FriendList;
import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';


const Stats = ({id,label,percentage,}) => {
    return (
            <li className={css.item} id={id}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>       
    );
};
Stats.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
    }
export default Stats;
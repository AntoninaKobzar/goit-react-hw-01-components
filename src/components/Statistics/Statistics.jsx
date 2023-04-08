import React from 'react';
import css from './Statistics.module.css';
import Stats from './Stats';
import { string } from 'prop-types';



const Statistics = ({data, title,}) => {
    return (
        <div className={css.statistics}> 
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stats}>
                {data.map(item => {
                    return <Stats key={item.id}{...item} />;
                })}
            </ul>    
        </div>
            );
};
Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired,
        }),
    ),
    title:PropTypes.string,
        };
    
    
export default Statistics;
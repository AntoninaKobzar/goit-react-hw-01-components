import React from 'react';
import css from './Statistics.module.css';
import Stats from './Stats';
import data from './data.json';



const Statistics = (props) => {
    return (
        <div className={css.statistics}> 
            <h2 className={css.title}>Upload stats</h2>
            <ul className={css.stats}>

                {data.map((item) => {
                    return <Stats id={item.id}{...item} />;
                    })}
            </ul>    
        </div>
            );
};
export default Statistics;
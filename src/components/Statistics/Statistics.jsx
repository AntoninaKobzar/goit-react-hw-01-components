
import css from './Statistics.module.css';
import Stats from './Stats';
import PropTypes from 'prop-types';
let title = "Upload stats";

const Statistics = ({data}) => {
    return (
        <div className={css.statistics}> 
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stats}>
                {data?.map((item) => (
                    <Stats
                        key={item.id}
                        label={item.label}
                        percentage={item.percentage}
                    />
                ))}
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
    title: PropTypes.string,
    };
    
    
export default Statistics;
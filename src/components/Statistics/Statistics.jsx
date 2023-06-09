
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function generateRandomColor() {
    let color = '#';
    for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
    return color;
}


const Statistics = ({title,stats}) => (
        <div className={css.statistics}> 
            {title && <h2 className={css.title}>{title}</h2>}
            
            <ul className={css.stats}>
            {stats.map(({ id, label, percentage }) => (
                <li
                    className={css.item} style={{
                        backgroundColor: generateRandomColor(),
                    }}
                    key={id}
                >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
                </li> 
                ))}
            </ul>    
        </div>
);

Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
    ).isRequired,
};
    
    
export default Statistics;
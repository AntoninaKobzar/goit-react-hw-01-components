
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => (
        <table className={css.transaction}>
            <thead className={css.header}>
                <tr>
                    <th className={css.title}>Type</th>
                    <th className={css.title}>Amount</th>
                    <th className={css.title}>Currency</th>
                </tr>
        </thead> 
        <tbody className={css.body}>
            {items.map(item => (
                <tr className={css.row} key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
                </tr> 
            ))}
            </tbody>
            </table>
    );


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
export default TransactionHistory;
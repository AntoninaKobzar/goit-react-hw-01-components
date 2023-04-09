
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionItems = ({ type, amount, currency,}) => {
    return (
            <tbody className={css.body}>
                <tr className={css.invoice}>
                    <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
                <tr className={css.withdrawal}>
                <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            </tbody>
    );
};

TransactionItems.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ),
};
export default TransactionItems;

import css from './TransactionHistory.module.css';
import TransactionItems from './TransactionsItems';
import PropTypes from 'prop-types';

const TransactionHistory = ({transactions}) => {
    return (
        <table className={css.transaction}>
            <thead className={css.header}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>   
            {transactions.map((transaction) => (
                <TransactionItems key={transaction.id}{...transaction} />
            ))}
            </table>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ),
};
export default TransactionHistory;
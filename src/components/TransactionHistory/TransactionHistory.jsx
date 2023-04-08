import React from 'react';
import css from './TransactionHistory.module.css';
import TransactionItems from './TransactionsItems';

const TransactionHistory = ({transactions}) => {
    return (
             <div>   
            {transactions.map(transaction => {
                return <TransactionItems key={transaction.id}{...transaction} />;
            })}
            </div>
    );
};
TransactionHistory.propTypes = {
    id: PropTypes.string,
}
export default TransactionHistory;
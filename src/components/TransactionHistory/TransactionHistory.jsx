import React from 'react';
import css from './TransactionHistory.module.css';
import TransactionItems from './TransactionsItems';
import transactions from './transactions.json';

const TransactionHistory = (props) => {
    return (
                <table className={css.transaction}>
            <thead className={css.header}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {transactions.map((transaction) => {
                return <TransactionItems key={transaction.id}{...transaction} />;
            })}
                </table>
    );
};
export default TransactionHistory;
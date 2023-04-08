import React from 'react';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionItems = ({type, amount, currency,}) => {
    return (<table className={css.transaction}>
            <thead className={css.header}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={css.body}>
                <tr className={css.invoice}>
                    <td>{{type}}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
                <tr className={css.withdrawal}>
                <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
        </tbody>
        </table>
    );
};

TransactionItems.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency:PropTypes.string,
}
export default TransactionItems;
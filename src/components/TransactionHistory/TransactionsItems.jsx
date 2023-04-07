import React from 'react';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionItems = ({ id, type, amount, currency, }) => {
    return (
            <tbody className={css.body}>
                <tr className={css.invoice}>
                    <td>Invoice</td>
                    <td>125</td>
                    <td>USD</td>
                </tr>
                <tr className={css.withdrawal}>
                    <td>Withdrawal</td>
                    <td>85</td>
                    <td>USD</td>
                </tr>
        </tbody>
    );
};

TransactionItems.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency:PropTypes.string,
}
export default TransactionItems;
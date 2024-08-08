import React, { useEffect, useState } from 'react';
import { sendMoney, withdrawMoney, getAccounts, getTransactions, processTransaction } from '../services/api';

const DashboardPage = () => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const accountsData = await getAccounts();
        setAccounts(accountsData);
      } catch (error) {
        console.error('Failed to fetch accounts', error);
      }
    };

    fetchAccounts();
  }, []);

  const handleSendMoney = async () => {
    try {
      const processedTransaction = await processTransaction({ amount });
      await sendMoney(processedTransaction.amount);
      console.log('Money sent successfully');
    } catch (error) {
      console.error('Failed to send money', error);
    }
  };

  const handleWithdrawMoney = async () => {
    try {
      const processedTransaction = await processTransaction({ amount });
      await withdrawMoney(processedTransaction.amount);
      console.log('Money withdrawn successfully');
    } catch (error) {
      console.error('Failed to withdraw money', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Accounts</h2>
        <ul>
          {accounts.map((account) => (
            <li key={account._id}>{account.balance}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Transactions</h2>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction._id}>
              {transaction.amount} - {transaction.type}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button onClick={handleSendMoney}>Send Money</button>
        <button onClick={handleWithdrawMoney}>Withdraw Money</button>
      </div>
    </div>
  );
};

export default DashboardPage;

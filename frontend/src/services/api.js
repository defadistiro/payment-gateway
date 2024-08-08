import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

const sendMoney = async (amount) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      `${API_URL}/send`,
      { amount },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending money:', error);
    throw error;
  }
};

const withdrawMoney = async (amount) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      `${API_URL}/withdraw`,
      { amount },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error withdrawing money:', error);
    throw error;
  }
};

const getAccounts = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/accounts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};

const getTransactions = async (accountId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/transactions/${accountId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

const processTransaction = async (transactionData) => {
  // Implementasi logika proses transaksi, seperti validasi atau perhitungan tambahan
  return transactionData; // Mengembalikan data transaksi yang diproses
};

export { processTransaction, sendMoney, withdrawMoney, getAccounts, getTransactions };

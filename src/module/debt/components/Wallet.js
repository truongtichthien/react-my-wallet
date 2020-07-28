import React from 'react';
import People from './People';

import AddRecord from '../containers/AddRecord';
import ResetRecord from '../containers/ResetRecord';
import DebtSummary from '../containers/DebtSummary';
import DebtRecords from '../containers/DebtRecords';

import '../styles/Wallet.css';

const Wallet = () => (
  <div className="app-container">
    <div className="tool-bar">
      <AddRecord />
      <ResetRecord />
    </div>
    <div className="table-section">
      <People />
      <DebtSummary />
      <DebtRecords />
    </div>
  </div>
);

export default Wallet;

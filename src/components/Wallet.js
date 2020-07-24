import React from 'react';
import { names } from '../constants/Constants'
import FixedPanel from './FixedPanel';
import MainPanel from './MainPanel';
import AddPayment from '../containers/AddPayment';
import ResetPayment from '../containers/ResetPayment';
import ShowSummary from '../containers/ShowSummary';
import '../styles/Wallet.css';

const App = () => (
  <div className="app-container">
    <div className="tool-bar">
      <AddPayment people={names}/>
      <ResetPayment />
    </div>
    <div className="table-section">
      <FixedPanel />
      <ShowSummary people={names} />
      <MainPanel />
    </div>
  </div>
);

export default App;

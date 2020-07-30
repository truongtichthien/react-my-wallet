import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadDebts } from '../../../store/debt/action';

import People from './People';

import AddRecord from '../containers/AddRecord';
import ResetRecord from '../containers/ResetRecord';
import ReloadRecord from '../containers/ReloadRecord';
import DebtSummary from '../containers/DebtSummary';
import DebtRecords from '../containers/DebtRecords';
import LoadingState from '../containers/LoadingState';

import '../styles/Wallet.css';

const Wallet = (props) => {
  const { getAllDebts } = props;

  useEffect(() => {
    getAllDebts();
  }, []);

  return (
    <div className="app-container">
      <div className="tool-bar">
        <AddRecord />
        <ResetRecord />
        <ReloadRecord />
        <LoadingState />
      </div>
      <div className="table-section">
        <People />
        <DebtSummary />
        <DebtRecords />
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  getAllDebts: () => dispatch(loadDebts())
});

export default connect(null, mapDispatchToProps)(Wallet);

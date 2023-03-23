import React from 'react';
import styles from './MainPage.module.scss';
import Header from '../../components/Header';
import SummaryListRow from '../../components/SummaryListRow';
import Newlist from '../../components/Newlist';

function MainList() {
  return (
    <div className={styles.listPageWrapper}>
      <Newlist />
      <SummaryListRow />
    </div>
  );
}

export default MainList;

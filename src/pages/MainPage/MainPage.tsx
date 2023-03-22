import React from 'react';
import styles from './MainPage.module.scss';
import Header from '../../components/Header';
import ListRow from '../../components/ListRow';
import Newlist from '../../components/Newlist';

function MainList() {
  return (
    <div className={styles.mainList}>
      <Header />
      <Newlist />
      <ListRow />
    </div>
  );
}

export default MainList;

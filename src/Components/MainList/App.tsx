import React from 'react';
import styles from './MainList.module.scss';
import ListHeader from '../ListHeader';
import ListRow from '../ListRow';
import Newlist from '../Newlist';

function MainList() {
  return (
    <div className={styles.mainList}>
      <ListHeader />
      <ListRow />
      <Newlist />
    </div>
  );
}

export default MainList;

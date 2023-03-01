import React from 'react';
import styles from './MainList.module.scss';
import PageTitle from '../PageTitle';
import TitleRow from '../TitleRow';

function MainList() {
  return (
    <div className={styles.mainList}>
      <PageTitle />
      <TitleRow />
    </div>
  );
}

export default MainList;

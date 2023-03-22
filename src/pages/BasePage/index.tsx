import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import styles from './BasePage.module.scss';

function BasePage() {
  return (
    <main className={styles.basePageWrapper}>
      <Header />
      <Outlet />
    </main>
  );
}

export default BasePage;
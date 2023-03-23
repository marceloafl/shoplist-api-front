import FullListRow from "../../components/FullListRow";
import styles from './ListPage.module.scss';

export default function ListPage(){
  return (
    <div className={styles.listPageWrapper}>
      <FullListRow />
    </div>
  );
}
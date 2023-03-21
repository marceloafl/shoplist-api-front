import styles from './PrimaryButton.module.scss';

interface Props {
  text: string,
  onClick?: () => void,
  visible: boolean
}

export default function PrimaryButton({text, onClick, visible}: Props){
  return (
    // <button className={styles.primaryButton} onClick={onClick} >{text}</button>
    <button className={`${visible ? styles.primaryButton : styles.invisible}`} onClick={onClick} >{text}</button>
  )
}
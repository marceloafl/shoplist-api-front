import styles from './PrimaryButton.module.scss';

interface Props {
  text: string,
  onClick: () => void
}

export default function PrimaryButton({text, onClick}: Props){
  return (
    <button className={styles.primaryButton} onClick={onClick}>{text}</button>
  )
}
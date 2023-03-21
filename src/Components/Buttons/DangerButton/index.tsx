import styles from './DangerButton.module.scss';

interface Props {
  text: string,
  onClick?: () => void,
  visible: boolean
}

export default function DangerButton({text, onClick, visible}: Props){
  return (
    <button className={`${visible ? styles.dangerButton : styles.invisible}`} onClick={onClick} >{text}</button>
  )
}
import styles from './SecondaryButton.module.scss';

interface Props {
  text: string,
  onClick?: () => void,
  visible: boolean
}

export default function SecondaryButton({text, onClick, visible}: Props){
  return (
    <button className={`${visible ? styles.secondaryButton : styles.invisible}`} onClick={onClick} >{text}</button>
  )
}
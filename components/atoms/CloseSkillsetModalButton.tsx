import React from 'react'
import { MdClose } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import SkillsetMenuState from '../../states/atoms/SkillsetMenuState';
import styles from '../../styles/modules/SkillsetModal.module.css'

const CloseSkillsetModalButton: React.FC = () => {
  const [skillsetMenu, setSkillsetMenu] = useRecoilState(SkillsetMenuState);

  const onClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setSkillsetMenu(null);
  };
  
  return (
    <div className={`${styles.closeSkillsetModalButton} ${skillsetMenu !== null ? styles.closeSkillsetModalButtonActive : ''}`} onClick={onClick}>
      <MdClose size={32} color='white'/>
    </div>
  )
}

export default CloseSkillsetModalButton

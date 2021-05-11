import React from 'react'
import styles from '../../styles/modules/Home.module.css'
import HomeTitle from '../../components/atoms/HomeTitle'
import FadeInAnimation from '../animations/FadeInAnimation'
import SocialItem from '../atoms/SocialItem';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { TWITTER_URL, GITHUB_URL } from '../../constant/constant';
import Util from '../../util/Util';
import ChangeLanguageButton from '../atoms/ChangeLanguageButton';

const Home: React.FC = () => {
  const contents = Util.getContents();
  
  const clickTwitter: React.MouseEventHandler<HTMLLIElement> = (event) => {
    window.open(TWITTER_URL, '_blank');
  }

  const clickGithub: React.MouseEventHandler<HTMLLIElement> = (event) => {
    window.open(GITHUB_URL, '_blank');
  }


  return (
    <div className={styles.home}>
      <HomeTitle title={contents.home.title}/>
      <ul className={styles.socialMenu}>
        <FadeInAnimation duration='1s' delay='1.4s'>
          <SocialItem onClick={clickTwitter}>
            <FaTwitter size={22} />
          </SocialItem>
        </FadeInAnimation>
        <FadeInAnimation duration='1s' delay='1.6s'>
          <SocialItem onClick={clickGithub}>
            <FaGithub size={22} />
          </SocialItem>
        </FadeInAnimation>
      </ul>
      <ChangeLanguageButton/>
    </div>
  )
}

export default Home

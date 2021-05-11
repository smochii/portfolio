import React from 'react'
import Head from 'next/head'
import SlideAnimation from '../components/animations/SlideAnimation'
import Menu from '../components/organisms/Menu'
import Home from '../components/templates/Home'
import Profile from '../components/templates/Profile'
import Works from '../components/templates/Works'
import Util from '../util/Util'
import { useRecoilValue } from 'recoil'
import LanguageState from '../states/atoms/LanguageState';
import { LANGUAGE_EN } from '../constant/constant'

const Index: React.FC = () => {
  const contents = Util.getContents();
  const language = useRecoilValue(LanguageState);
  
  return (
    <React.Fragment>
      <SlideAnimation duration='.8s' delay='0s' color='indianred' remove={true}/>
      <SlideAnimation duration='.6s' delay='.2s' color='gold' remove={true}/>
      <SlideAnimation duration='.5s' delay='.3s' color='darkslategray'/>
      <Head>
        <title>
          { contents.home.title }
        </title>
        <meta name="description" content="This site is mochi's portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`container ${language == LANGUAGE_EN ? 'fontEn': 'fontJa'}`}>
        <Menu/>
        <Works/>
        <Profile/>
        <Home/>
      </div>
    </React.Fragment>
  )
}

export default Index

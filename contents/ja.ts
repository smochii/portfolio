import Contents from './Contents';

const contents: Contents = {
  home: {
    title: 'portfolio',
  },
  profile: {
    title: '自己紹介',
    aboutMe: 'ボクについて',
    aboutMe_text: 'mochiといいます。組み込みエンジニアを経験したのち、現在はWEBバックエンドエンジニアとして働いています。',
    mySkillset: 'できること',
    webBackendSkills: 'バックエンド',
    webFrontendSkills: 'フロントエンド',
    embeddedSkills: '組み込み',
    other: 'その他',
    haveUsedKeyword: '使ったことあるもの',
    selfStudyKeyword: '独学したもの',
    skillset: [
      {
        name: 'バックエンド',
        color: 'tomato',
        child: {
          haveUsed: [
            'Java',
            'JavaScript',
            'Struts',
            'Spring Boot',
            'Thymeleaf',
            'PostgreSQL',
            'Oracle DB',
            'Linux',
            'AWS',
            'Apache',
            'nginx',
            'Tomcat',
            '...'
          ],
          selfStudy: [
            'NestJS',
            'Express',
            'Handlebars',
            'Python',
            'Django',
            'Ruby on Rails',
            'MongoDB',
            '...'
          ]
        }
      },
      {
        name: 'フロントエンド',
        color: 'orange',
        child: {
          haveUsed: [
            'JavaScript',
            'jQuery',
            'WebSocket',
            '...'
          ],
          selfStudy: [
            'React',
            'Next.js',
            'Material-UI',
            'Vue.js',
            'Nuxt.js',
            'Vuetify',
            '...'
          ]
        }
      },
      {
        name: '組み込み開発',
        color: 'dodgerblue',
        child: {
          haveUsed: [
            'C',
            'Object Pascal',
            'Delphi',
            'CCS Compiler',
            'MPLAB IDE',
            'Bluetooth',
            '...',
          ],
          selfStudy: [
            'なし',
          ]
        }
      },
      {
        name: 'その他',
        color: 'limegreen',
        child: {
          haveUsed: [
            'なし'
          ],
          selfStudy: [
            'python',
            'NumPy',
            'pandas',
            'Trading View',
            'PineScript'
          ]
        }
      },
    ]
  },
  works: {
    title: 'つくったもの',
    excuse: '言い訳',
    text: '恥ずかしいことに今は作品がないです…。何か作ったら掲載しますね。最近は勉強用のコードをGitHubにpushしたりしてます。'
  }
}

export default contents
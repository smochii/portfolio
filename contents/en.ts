import Contents from './Contents';

const contents: Contents = {
  home: {
    title: 'portfolio',
  },
  profile: {
    title: 'Profile',
    aboutMe: 'About me',
    aboutMe_text: 'My name is mochi. After working as an embedded engineer, I am now working as a web backend engineer.',
    mySkillset: 'My skillset',
    webBackendSkills: 'Web Backend Skills',
    webFrontendSkills: 'Web Frontend Skills',
    embeddedSkills: 'Embedded Skills',
    other: 'Other',
    haveUsedKeyword: 'Have used keyword',
    selfStudyKeyword: 'Self study keyword',
    skillset: [
      {
        name: 'Web Backend',
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
        name: 'Web Frontend',
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
        name: 'Embedded',
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
            'none',
          ]
        }
      },
      {
        name: 'other',
        color: 'limegreen',
        child: {
          haveUsed: [
            'none'
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
    title: 'Works',
    excuse: 'Excuse',
    text: 'Embarrassingly, I don\'t have a piece. I will post it when I make something. But recently I started pushing learning code to GitHub.'
  }
}

export default contents
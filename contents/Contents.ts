type Contents = {
  home: {
    title: string;
  },
  profile: {
    title: string;
    aboutMe: string;
    aboutMe_text: string;
    mySkillset: string;
    webBackendSkills: string;
    webFrontendSkills: string;
    enbeddedSkills: string;
    other: string;
    haveUsedKeyword: string;
    selfStudyKeyword: string;
    skillset: [
      {
        name: string;
        color: string;
        child: {
          haveUsed: Array<string>;
          selfStudy: Array<string>;
        }
      },
      {
        name: string;
        color: string;
        child: {
          haveUsed: Array<string>;
          selfStudy: Array<string>;
        }
      },
      {
        name: string;
        color: string;
        child: {
          haveUsed: Array<string>;
          selfStudy: Array<string>;
        }
      },
      {
        name: string;
        color: string;
        child: {
          haveUsed: Array<string>;
          selfStudy: Array<string>;
        }
      },
    ]
  },
  works: {
    title: string;
    excuse: string;
    text: string;
  }
}

export default Contents
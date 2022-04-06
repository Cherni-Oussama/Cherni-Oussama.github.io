/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Cherni Oussama",
  title: "Hi all, I'm Cherni Oussama",
  subTitle: emoji(
    `A Machine Learning Engineer 🚀 I'm a mathematics passionate turned Artificial Intelligence (AI) research engineer. As part of my job, I solve Machine Learning (ML) problems.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KjQMCBIFFfUnmO_Fpr4cxoc9fOAxn0lU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Cherni-Oussama",
  linkedin: "https://www.linkedin.com/in/cherni-oussama-b593b415a/",
  gmail: "oussamacherni1996@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/cherni.oussama.31/",
  medium: "",
  stackoverflow: "https://stackoverflow.com/users/14394138/oussama-cherni",
  youtube : "https://www.youtube.com/channel/UCXlcu65_zdNXPWwckRmo7dw",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY MACHINE LEARNING ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK. I am experienced in machine learning, supervised and unsupervised algorithms and use data visualization techniques to present the results. I use SQL, R, Python, QlikView and Tableau for my data projects.",
  skills: [
    emoji(
      "⚡ Design machine learning systems."
    ),

    emoji(
      "⚡ Select appropriate datasets and data representation methods."
    ),
    emoji("⚡ Research and implement appropriate ML algorithms and tools."),
    emoji(
      "⚡ Train and retrain systems when necessary."
    ),
      emoji(
      "⚡ Developing machine learning apps according to client requirements."
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },

    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "fab fa-android"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National School of Computer Science",
      logo: require("./assets/images/logo_ensi.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java",
      progressPercentage: "80%"
    },
    {
      Stack: "C++",
      progressPercentage: "60%"
    },
    {
      Stack: "C#",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};
const techStack2 = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "TensorFLOW", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "PyTorch",
      progressPercentage: "90%"
    },
    {
      Stack: "Keras",
      progressPercentage: "80%"
    },
    {
      Stack: "Fast AI",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [{
        role: "Software Engineer",
      company: "FREELANCE",
      place : emoji(" 🌎 "),
      companylogo: require("./assets/images/freelancer.png"),
      date: "Jun 2022 – PRESENT",
      desc: ""
    },
    {
      role: "Deep learning Intern",
      company: "Positive Thinking Company",
      place : emoji(" 🇫🇷 "),
      companylogo: require("./assets/images/PTC_Logo.png"),
      date: "April 2021 – December 2021",
      desc: ""
    },
    {
      role: "Software Engineer Intern",
      company: "Le Bon Choix",
      place : emoji(" 🇹🇳 "),
      companylogo: require("./assets/images/BNCHOIX_Logo.png"),
      date: "Jul 2020 – Sep 2020",
      desc: ""
    },
    {
      role: "Software Engineer Intern",
      company: "SFM Technologies",
      place : emoji(" 🇹🇳 "),
      companylogo: require("./assets/images/sfmlogo.png"),
      date: "Jul 2019 – Sep 2019",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: " This is a collection of my personal projects.",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Deep Neural Networks with PyTorch",
      subtitle:
        "",
      image: require("./assets/images/coursera.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/XHRNGCYSJ99M"
        }
      ]
    },
    {
      title: "Natural Language Processing in TensorFlow",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/deep.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/SGGAKRHJYUYX"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    },
        {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Projects",
  subtitle:
    " This is a collection of my personal projects.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Anomalies Detection",
      techs: "Python, PyTorch, GAN, Self Supervised Learning",
      description:
        "Designing an approach based on self-supervised learning to detect anomalies in the context of Small Data."
    },
    {
      url: "",
      title: "Traffic Speed Radar",
      techs: "AndroidStudio, Java, Python, OpenCV, Yolo",
      description:
        "Develop a mobile application for detection, tracking and speed calculation of vehicles on a highway."
    },
    {
      url: "",
      title: "Fake News Detector",
      techs: "Selenium, BeautifullSoup, Php, SVM, DT, SQL",
      description:
        "Chrome extension to spot fake news and provide alternatives from trusted sources."
    },
    {
      url: "",
      title: "Humain Pose Estimation",
      techs: "Python, Jupyter, AndroidStudion",
      description:
        "Develop a mobile application that represents the orientation of a person in a graphical format."
    },
    {
      url: "",
      title: "Road traffic multi-agent simulation",
      techs: "Java, Jade",
      description:
        "Develop a tool to test road management strategies before deploying them in an operational context."
    },
    {
      url: "",
      title: "Addicted ? No more",
      techs: "AndroidStudio, Tensorflow, Dialogflow, flask",
      description:
        "Develop a mobile application based on a Chatbot/VoiceBot to detect the rate of addiction (addiction to Tobacco, Alcohol, etc.) among addicts and propose strategies to overcome it."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216 21099280",
  email_address: "oussamacherni1996@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  techStack2,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};

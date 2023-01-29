/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aji Creations Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Aji Creations Portfolio",
    type: "website",
    url: "https://ajitharunai.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Ajith Kumar Murugan",
  logo_name: "Aji Creations",
  nickname: "python Ajith",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/17nPBH12Yi4aZTgdfCE6zBzLf9SZm6JnW/view?usp=sharing",
  portfolio_repository: "https://github.com/ajitharunai/",
  githubProfile: "https://github.com/ajitharunai",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ajitharunai",
  // linkedin: "https://www.linkedin.com/in/ajith-kumar-m-7897541b4/",
  // gmail: "ajithkumaraec10@gmail.com",
  // gitlab: "https://gitlab.com/ajitharunai1",
  // facebook: "https://www.facebook.com/ajithkumar.m.9216778",
  // twitter: "https://twitter.com/ajitharunai",
  // instagram: "https://www.instagram.com/ajithkumar_arunai/"

  {
    name: "Github",
    link: "https://github.com/ajitharunai",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ajitharunai/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCziq6bcqqPG9EzIM_H3gMUA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ajithkumaraec10@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ajitharunai",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/ajithkumar.m.9216778",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ajithkumar_arunai/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/pythonajith",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ajithkumaraec1",
    },
    
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ajithkumaraec10",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: " https://www.kaggle.com/ajithkumarcse",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Arunai Engineering College",
      subtitle: "B.E Computer science and Engineering",
      logo_path: "arunai.png",
      alt_name: "IIITDM Kurnool",
      duration: " ",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://arunai.org/",
    },
  ],
};
   

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1hRSQ8q1mfxVG5TrafEJYBVKGvtW07JlZ/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Virtual Asia Experience Program",
      subtitle: "Forage",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1pPZqPRLrKoYz-JO0kgmDtpvYkp269Ufn/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Best IoT Trainer Award",
      subtitle: "AEC",
      logo_path: "iot.png",
      certificate_link:
        "https://drive.google.com/file/d/15hPNrRMZ9SKnf4R4Dty3Pc_iJYxAgJrn/view",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Best Student Award",
      subtitle: "AEC",
      logo_path: "award.webp",
      certificate_link:
        "https://drive.google.com/file/d/1POjKDonZbL7GB7n0ZcHfaV7jIMLSLKdX/view",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Tamil Nadu Police Apreciation Certification",
      subtitle: "Tamil Nadu Police ",
      logo_path: "police1.png",
      certificate_link:
        " https://drive.google.com/file/d/1uFvz-5GIiIYj_Xy31P78nCUMXsrbwAA7/view",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "STEM Program Participation Certification",
      subtitle: "AEC ",
      logo_path: "stem.png",
      certificate_link:
        "https://drive.google.com/file/d/1c2npTI_vAqWrOBcyLU-voBZzpzj5EM98/view",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Satish Dhawan Space Centre Appreciation Certification",
      subtitle: "Indian Space Research Organization",
      logo_path: "isro.png",
      certificate_link:
        "https://drive.google.com/file/d/1veBMGfPytJO086W6vAHBomvrFTgLtW0m/view",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "ISRO Oneday Workshop Participation Certificate",
      subtitle: "Indian Space Research Organization",
      logo_path: "isr.webp",
      certificate_link:
        "https://drive.google.com/file/d/1PCaPb-Qvsk_HAZThL1KjdBRc_YR94moI/view",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Ideathon Participation Certification",
      subtitle: "AEC",
      logo_path: "idea.png",
      certificate_link:
        "https://drive.google.com/file/d/1pSutnWc_eYOpV_CxBYfDzSi_M-2MeLtq/view",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
   
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Junior Research Engineer",
          company: "Buddi AI",
          company_url: "https://www.buddi.ai/",
          logo_path: "buddi.png",
          duration: "June 2022- sep 2022",
          location: "Chennai,Tamil Nadu",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "CEO & Web Developer",
          company: "Aji Creations",
          company_url: "https://ajicreations.blogspot.com/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Jan 2022",
          location: "Karungalipadipatti Village,Tamil Nadu",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Blogger Developer",
          company: "Freelance",
          company_url: "https://www.freelancer.com/",
          logo_path: "blog.png",
          duration: "Nov 2017 -Dec 2021",
          location: "Karungalipadipatti Village,Tamil Nadu",
          description:
            " Freelancing is working for yourself, as opposed to working for someone else. Freelancers are self-employed professionals who work on a project-by-project basis.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Buddi AI.",
          company_url: "https://www.buddi.ai/",
          logo_path: "buddi.png",
          duration: "Feb 2022 - Sep 2022",
          location: "Chennai,Tamil Nadu",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Developer Students Club",
          company: "Google",
          company_url: "https://developers.google.com/community/gdsc",
          logo_path: "google_logo.png",
          duration: "jan 2021 - present",
          location: "United State",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Banglore, Karnataka",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        
        {
          title: "Ideathon Program Organizer",
          company: "Arunai Engineering College-Tiruvannamalai",
          company_url:
            "https://arunai.org/",
          logo_path: "idea.png",
          duration: "APR 2022",
          location: "Tiruvannamalai",
          description:
            "AEC brings to you an ARUNAI IDEATHON 2022 in association with Institution's Innovation Council (IIC) & Computer Society of India (CSI) to discover real brand solutions by hiring as well as meeting the best & the youngest minds.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/ajitharunai",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2022-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence Project published in Medium ",
      url:
        "https://medium.com/@ajitharunai/touchless-user-interface-for-sketching-using-hand-gesture-recognition-a11e463c1ce5",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Portfolio",
      createdAt: "2022-05-06T16:26:54Z",
      description: "Paper Written on Portfolio Design published in medium ",
      url:
        "https://medium.com/@ajitharunai/professional-portfolio-web-page-design-adeebd0e8900",
    },
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "aji.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ajitharunai.netlify.app/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "No.354, Mesthiri Street, Karungalipadipatti village, Puliyampatti Post-606 703, Chengam Taluk, Tiruvannamalai.",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/1nHaeWyA8DSiRQC16",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9080468220",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #808080, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Xun",
  middleName: "",
  lastName: "Ding",
  message: " Software Engineer. Lifelong learner. ",
  
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/xunxdd",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/xunding/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me.jpg"),
  imageSize: 250,
  messages:  ["Hello.  My name is Xun. Nice to meet you!", 
           "Over the years, I have grown as technologies evolve (I have learned some, forgotten some then learned some more); I have built products across an array of industries; I have worn hats of all sorts: data analyst, GIS programmer, web developer, full stack software engineer, front-end engineer. I have never stopped learning and continue to enjoy the thrill of building a good product."],
  resume: require("../editable-stuff/Resume-Xun.pdf"),
};

const career = {
  show: true,
  heading: "Career",
  lists: [
    {
      CompanyName: "Maestro Health",
      Address: "Chicago, IL",
      Title: "Senior Software Engineer",
      Time: "April, 2016 - Present",
      Descriptions: [
        "Revamped and delivered products in the insurance and benefits admin domain; built responsive SPAs using Vue Js, TypeScript and Rest APIs; ensured quality code through strong typing and extensive test coverage (about 95%) and code reviews; employed modern web techniques such as code splitting and tree shaking to ensure fast application start and response time; maintained and improved legacy systems using Angular Js and DJango Rest Framework"
      ],
      TechStack: ["Vue Js, TypeScript, .net core"]
    },
    {
      CompanyName: "Cision Inc.",
      Address: "Chicago, IL",
      Title: "Senior Software Engineer",
      Time: "2015 - 2016",
      Descriptions: [
        "Helped build CPRE (Cision Public Relations Enterprise) using Angular Js and Asp .net framework"
      ],
      TechStack: ["ASP .net Framework, jQuery, Angular Js 1.x"]
    },
    {
      CompanyName: "comScore",
      Address: "Chicago, IL",
      Title: "Junior / Senior / Staff Software Engieer",
      Time: "2009 - 2015",
      Descriptions: [
        "UI lead of multiple web applications, including comScore Direct, AdEffx (Advertising Effectiveness Web App) and XMedia (a web tool for audience        measurement across TV and digital medias); technologies used include Asp.net MVC, Ext js MVC framework; led a small team of front-end engineers"
      ],
      TechStack: ["ASP .net web forms, ASP.net MVC, Sencha Ext Js Framework, JavaScript"]
    },
    {
      CompanyName: "Gibson Consulting LLC",
      Address: "Chicago, IL",
      Title: "Senior Web Developer",
      Time: "2008 - 2009",
      Descriptions: [
        "Developed a survey engine using Asp .net and a set of web solutions, including a RFI and RFQ website for Dover Global Metals using jQuery and vanilla JavaScript"
      ],
      TechStack: ["ASP.net web forms, ASP.net MVC, JavaScript, jQuery"]
    },
    {
      CompanyName: "DotnetSlackers",
      Address: "Canada",
      Title: "Moderator / Contributor",
      Time: "2008 - 2009",
      Descriptions: [
        "Moderated and contributed to DotNetSlackers website, a website for .NET news and articles, blogs and .NET forums"
      ],
      TechStack: []
    },
    {
      CompanyName: "Metro Chicago Information Center (MCIC)",
      Address: "Chicago, IL",
      Title: "Web developer / Data Analyst / GIS Programmer",
      Time: "2003 - 2008",
      Descriptions: [
        "Built and maintained MCIC’s official websites and intranet; developed systems for the city of Chicago using ASP pages and ESRI technologies."
      ],
      TechStack: ["ASP, JavaScript, ESRI technologies"]
    }
  ]
};
const education = {
  show: true,
  heading: "Education",
  lists: [
    {
      university: "University of Chicago",
      degree: "Master of Arts in Cuneiform Studies",
      time: "June 2000",
      description:"I spent my first few years in the USA at the U of C. I have long forgotten the cuneiforms and the glory of ancient  civilizations. Yet, University of Chicago have taught me discipline and independent thinking."
    },
    {
      university: "University of Illinois at Chicago",
      degree: "Master of Science in Computer Science",
      time: "June 2004",
      description:"With no background whatsoever in computer science, I was accepted by the computer science master program of University of Illinois at Chicago. I graduated in honor roll."
    },
    {
      university: "Udacity",
      degree: "Machine Learning Engineer NanoDegree",
      time: "August 2018",
      description:"Who does not want to learn how machines learn?"
    }]
  };

const onlineWritings = {
  show: true,
  heading: "Yup, I sometimes write!",
  quote: {
    text: "Getting information off the Internet is like taking a drink from a fire hydrant.",
    by:"Mitch Kapor"
  },
   list: [
     {
      title:"Combining Handhelds with a Whole-Class Display to Support the Learning of Scientific Controversies",
      url:"https://www.evl.uic.edu/moher/papers/chi2003.pdf",
      description: "Third grade students used wireless handhelds and a large  shared display to discover strategies for control of variables in scientific experiments. The technology suite supported       activity requirements including synchronous individual       control, face-to-face discourse, and instantaneous display      updates. In an empirical study, students demonstrated       learning in both original and transfer domains."
     },
     {
      title:"UiPath Custom Activities (Plus a Sentiment Analysis Activity)",
      url:"https://medium.com/@xunding/uipath-custom-activities-plus-a-sentiment-analysis-activity-f44f794d3060",
      description: "It is 2020. It is the year of pandemic. The highest drama and the saddest comedy in which is a president infected with coronavirus. Now on the heels of a summer of unrest, flood, fire and alarming death toll, it is fall. The feeling of a doomed world lingers."
     },
     {
      title:"Some musing on UiPath and the orchestrators",
      url:"https://medium.com/@xunding/some-musing-on-uipath-and-the-orchestrators-a95934ea50ad",
      description: "The path of digitalization is littered with legacy applications, outdated data, antiquated formats, age-old documents that cannot be readily consumed, but must be preserved, transformed, digitalized and made ready for the eventual consumption of the newer, more powerful applications."
     },
     {
      title:"Learning FastText",
      url:"https://towardsdatascience.com/fasttext-ea9009dba0e8",
      description: "This is my renewed self-torturing attempt at learning machine learning. "
     },
     {
      title:"How I built my first mobile app: ReadingLog App",
      url:"https://www.linkedin.com/pulse/how-i-built-my-first-mobile-app-readinglog-xun-ding/",
      description: "My learning experience with my first mobile App."
     },
     {
      title:"Is there anything in common between programmers and musicians?",
      url:"https://www.linkedin.com/pulse/anything-common-between-programmers-musicians-xun-ding/",
      description: ""
     },
    {
      title: "Square, Circle, Ring ..., Oh and That Smiley",
      url: "http://www.codeproject.com/Tips/1022374/Square-Circle-Ring-Oh-and-That-Smiley",
      description:"Make some shapes, have some CSS fun", 
    },
    {
      title: "JavaScript: A brief history - Part I",
      url: "http://www.codeproject.com/Articles/1027487/JavaScript-A-brief-history-Part-I",
      description:"JavaScript is 20 years old. Shall we look back and take some snapshots of the milestones?", 
    },
    {
      title: "Learning Typescript and building a google map with it",
      url: "http://www.codeproject.com/Articles/1033708/Learning-Typescript-and-building-a-google-map-with",
      description:"Typescript is a 2-year old powerhouse language, and is ordained as the official language for Angular js 2.0. Shall we learn some Typescript?", 
    }
  ]

};

const portfolio = {
  show: true,
  heading: "Some of My Work",
  quote: {
    text: "People think that computer science is the art of geniuses, but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.",
    by:"Donald Knuth"
  },
   list: [{
    category: "Mobile App",
    title: "Power Recruiter",
    url: "https://play.google.com/store/apps/details?id=com.powerrecruiter.com",
    notes: "Built on request of a friend. Real time recruiting data",
    thumbnail:require("../editable-stuff/images/portfolio/powerrecruiter.jpg"), 
   },
   {
    category: "Mobile App",
    title: "Js For Me",
    url: "https://play.google.com/store/apps/details?id=com.tadpole.js4me",
    notes: "A pocket reference to the latest JavaScript feeds, videos and blogs",
    thumbnail:require("../editable-stuff/images/portfolio/JsForMe.png"), 
   }, 
   {
    category: "Mobile App",
    title: "Reading Log APP",
    url: "https://www.linkedin.com/pulse/how-i-built-my-first-mobile-app-readinglog-xun-ding/",
    videoUrl: "https://www.youtube.com/watch?v=e1tlcyENgrU&t=3s",
    notes: "This is the first mobile app I have ever built.  It had a small number of fans",
    thumbnail:require("../editable-stuff/images/portfolio/readinglog.png"), 
   },
   {
    category: "Alexa Skills",
    title: "Shakespeare Quotes",
    url: "https://www.amazon.com/ReadingEveryday-Shakespeare-Quotes/dp/B01DV5OZR4/ref=sr_1_1?dchild=1&keywords=shakespeare+quote+alexa+skill&qid=1610858088&sr=8-1",
    notes: "Ask Alexa for Shakespeare, she will recite for you one of the many famous quotes by Shakespeare.",
    thumbnail:require("../editable-stuff/images/portfolio/shakespeare_quotes.png"), 
   },
   {
    category: "Alexa Skills",
    title: "Flatter Me",
    url:"https://www.amazon.com/ReadingEveryday-Flatter-Me/dp/B077YJ6LS2/ref=sr_1_6?crid=OGMWMRPAUC57&dchild=1&keywords=flatter+me&qid=1610917349&s=digital-skills&sprefix=flatter%2Calexa-skills%2C179&sr=1-6",
    videoUrl:"https://youtu.be/ZC2irDomJ9k",
    notes: "If you are feeling a little down,  say 'ask/open flatter-me', to your Alexa Echo.",
    thumbnail:require("../editable-stuff/images/portfolio/flatterme.png"), 
   },
   {
    category: "Alexa Skills",
    title: "Fun Facts",
    videoUrl:"https://youtu.be/roQY_Cjit8o",
    url: "https://www.amazon.com/ReadingEveryday-Fun-Facts/dp/B01MYCFS3H/ref=sr_1_1?dchild=1&keywords=fun+facts+readingeveryday&qid=1610917723&s=digital-skills&sr=1-1",
    notes: "Fun facts you probably did not know on a variety of topics, such as animals, alphabets, etc",
    thumbnail:require("../editable-stuff/images/portfolio/funfacts.png"), 
   },
   {
    category: "Alexa Skills",
    title: "Lightning Math",
    videoUrl:"https://youtu.be/ymSAEEHvfhQ",
    url: "https://www.amazon.com/ReadingEveryday-Lightening-Math-Training/dp/B01N3QV8V1/ref=sr_1_4?dchild=1&keywords=readingeveryday&qid=1610917928&s=digital-skills&sr=1-4",
    notes: "Elementary math practice with Amazon Echo",
    thumbnail:require("../editable-stuff/images/portfolio/lightningMath.png"), 
   },
   {
    category: "Alexa Skills",
    title: "Headlines Today",
    url: "https://www.amazon.com/ReadingEveryday-Headlines-Today/dp/B072WKTNHF/ref=sr_1_2?dchild=1&keywords=readingeveryday&qid=1610917928&s=digital-skills&sr=1-2",
    notes: "Latest top headlines from over 50 news sources",
    thumbnail:require("../editable-stuff/images/portfolio/headlinestoday.png"), 
   },
   {
    category: "Alexa Skills",
    title: "Lunch Spinner",
    videoUrl:"https://youtu.be/Rq5w0Amwz9Y",
    url: "https://www.amazon.com/ReadingEveryday-Lightening-Math-Training/dp/B01N3QV8V1/ref=sr_1_4?dchild=1&keywords=readingeveryday&qid=1610917928&s=digital-skills&sr=1-4",
    notes: "Elementary Math Practice with Amazon Echo",
    thumbnail:require("../editable-stuff/images/portfolio/lunchspinner.png"), 
   },
   {
    category: "Machine Learning",
    title: "Posenet Demo",
    videoUrl:"https://www.youtube.com/watch?v=BQj3t4dWjuI",
    notes: "Posenet Demo - In My Feelings",
    thumbnail:require("../editable-stuff/images/portfolio/posenetdemo.jpg"),
    repo: "https://github.com/xunxdd/Posenet-Demo--In-My-Feelings-Challenge-AI",
   },
   {
    category: "Machine Learning",
    title: "Pneumonia X-ray Image Classification",
    videoUrl:"https://youtu.be/RfauqDz8W5k",
    notes: "UDacity Capstone project",
    thumbnail:require("../editable-stuff/images/portfolio/xray.jpg"), 
    repo: "https://github.com/xunxdd/Machine-learning-capstone",
   },
   {
    category: "Machine Learning",
    title: "Google Deep Dream",
    videoUrl:"https://youtu.be/SygFid1D1ro",
    notes: "Had a little fun with Googlenet model and Places365-CNN model",
    thumbnail:require("../editable-stuff/images/portfolio/deepdream.jpg"), 
    repo: "https://github.com/xunxdd/ILML---Google-Deep-Dream",
   },
   {
    category: "Work Sample",
    title: "Ad Creative Viewer",
    videoUrl:"https://www.youtube.com/watch?v=BQj3t4dWjuI",
    notes: "",
    thumbnail:require("../editable-stuff/images/portfolio/powerrecruiter.jpg"), 
   },
  ]

};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  message:
    "I'm currently looking for new opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "xunding @ gmail.com",
};

export { 
  navBar, mainBody, about, getInTouch,
  career,education , onlineWritings, portfolio};

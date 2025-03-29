
export interface Team {
  id: number;
  name: string;
  shortName: string;
  owner: string;
  captain: string;
  players: string[];
  logoColor: string;
}

export const teams: Team[] = [
  {
    id: 1,
    name: "Mumbai Technicians",
    shortName: "MT",
    owner: "Reliance Digital",
    captain: "Rohit Codecharya",
    players: [
      "Rohit Codecharya",
      "Quinton de IDE",
      "Suryakumar JavaDev",
      "Ishan GitShan",
      "Kieron PowerPoint",
      "Hardik Program",
      "Krunal Program",
      "Rahul DevOps",
      "Jasprit Debugger",
      "Trent Terminal",
      "Adam Linux"
    ],
    logoColor: "bg-blue-600"
  },
  {
    id: 2,
    name: "Chennai Super Programmers",
    shortName: "CSP",
    owner: "India Digital Ltd",
    captain: "MS Compiler",
    players: [
      "MS Compiler",
      "Ruturaj GitKwad",
      "Devon CodeWay",
      "Moeen Algorithms",
      "Ambati Raycast",
      "Ravindra JScript",
      "Dwayne Binary",
      "Deepak BuildTools",
      "Shardul StackThakur",
      "Sam FullStack",
      "Maheesh DevSecOps"
    ],
    logoColor: "bg-yellow-500"
  },
  {
    id: 3,
    name: "Bangalore Code Challengers",
    shortName: "BCC",
    owner: "United Spirits Digital",
    captain: "Virat Codely",
    players: [
      "Virat Codely",
      "Faf du JavaScript",
      "Rajat ProgramPath",
      "Glenn FullStackwell",
      "Dinesh DevOps",
      "Wanindu DevOps",
      "Shahbaz Frontend",
      "Harshal BackEndDev",
      "Mohammed CIDev",
      "Josh SecurityDev",
      "Suyash Python"
    ],
    logoColor: "bg-red-600"
  },
  {
    id: 4,
    name: "Kolkata Keyboard Knights",
    shortName: "KKK",
    owner: "Red Chillies Tech",
    captain: "Shreyas CodeReview",
    players: [
      "Shreyas CodeReview",
      "Rahmanullah GitGurbaz",
      "Venkatesh Python",
      "Nitish ReactDev",
      "Rinku FullStack",
      "Andre Software",
      "Sunil WebDesign",
      "Mitchell DevSecOps",
      "Tim AngularDev",
      "Varun DevOpsChakaravarthy",
      "Umesh BackendDev"
    ],
    logoColor: "bg-purple-700"
  },
  {
    id: 5,
    name: "Delhi Software Capitals",
    shortName: "DSC",
    owner: "GMR Tech Group",
    captain: "Rishabh DevOps",
    players: [
      "Rishabh DevOps",
      "David JavaScript",
      "Prithvi FullStackShaw",
      "Mitchell AngularDev",
      "Axar ReactNative",
      "Lalit VueJSDev",
      "Rovman PowerBI",
      "Kuldeep CodeReviewer",
      "Mustafizur BackEndRahman",
      "Khaleel BackendDev",
      "Ishant JavaDev"
    ],
    logoColor: "bg-blue-500"
  },
  {
    id: 6,
    name: "Rajasthan Royal Developers",
    shortName: "RRD",
    owner: "Manoj Badale Tech",
    captain: "Sanju DevOps",
    players: [
      "Sanju DevOps",
      "Jos NodeJSler",
      "Yashasvi JiraWal",
      "Devdutt CodePadikkal",
      "Shimron WebDevelopment",
      "Riyan Front-End",
      "Ravichandran BackEnd",
      "Trent Devops",
      "Prasidh DevSecOps",
      "Yuzvendra JavaDev",
      "Navdeep MERNStackDev"
    ],
    logoColor: "bg-pink-600"
  },
  {
    id: 7,
    name: "Punjab Tech Kings",
    shortName: "PTK",
    owner: "Preity Digital Ventures",
    captain: "Mayank CodeKiller",
    players: [
      "Mayank CodeKiller",
      "Shikhar WebDhawan",
      "Jonny FullStack",
      "Liam BlockChain",
      "Jitesh Back-End",
      "Shahrukh DevOpsKhan",
      "Odean DataScience",
      "Rahul Programming",
      "Kagiso Angular",
      "Arshdeep ReactDev",
      "Harpreet MERNDev"
    ],
    logoColor: "bg-red-500"
  },
  {
    id: 8,
    name: "Hyderabad SoftwareChargers",
    shortName: "HSC",
    owner: "Sun TV Network Digital",
    captain: "Kane SoftwareWilliamson",
    players: [
      "Kane SoftwareWilliamson",
      "Abhishek CodeReviewSharma",
      "Rahul ReactDevTripathi",
      "Nicholas NodeJSDev",
      "Aiden Full-Stack",
      "Abdul BackEndDev",
      "Washington DevSecOps",
      "Marco Software",
      "T MVC",
      "Bhuvneshwar DevOps",
      "Umran Full-Stack"
    ],
    logoColor: "bg-orange-500"
  }
];

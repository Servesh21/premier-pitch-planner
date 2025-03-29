
export interface PlayerDetail {
  name: string;
  playStyle: string;
  price: string;
  photo?: string;
  isCaptain?: boolean;
  isOwner?: boolean;
}

export interface Team {
  id: number;
  name: string;
  shortName: string;
  owner: string;
  captain: string;
  stats: {
    attack: number;
    defense: number;
    teamwork: number;
  };
  players: string[];
  logoColor: string;
  playerDetails: PlayerDetail[];
}

export const teams: Team[] = [
  {
    id: 1,
    name: "T4 Mitramandal",
    shortName: "T4M",
    owner: "Varad",
    captain: "Shree",
    stats:{
      attack: 8,
      defense: 8,
      teamwork: 8
    },
    players: [
      "Shree",
      "Hemant Chaudhari",
      "Atharva Avhad",
      "Hassan Qureshi",
      "Jaden Fernandes",
      "Ram Bobade",
      "Atharva Bawge",
      "Harshal Bhosale",
      "Keshav Prajapati",
      "Rakesh Chaudhary",
      "Servesh Khade"
    ],
    logoColor: "bg-blue-600",
    playerDetails: [
      { name: "Shree", playStyle: "All Rounder", price: "1CR", isCaptain: true },
      { name: "Hemant Chaudhari", playStyle: "Bowler", price: "2 Lakh", photo: "https://drive.google.com/open?id=167faJVkDgIJy982BBuaw27EDJFKgTZYN" },
      { name: "Atharva Avhad", playStyle: "All Rounder", price: "3 Lakh", photo: "https://drive.google.com/open?id=1mPPxvfGrDRbYGFWq5yhxENgbBnBWIYWe" },
      { name: "Hassan Qureshi", playStyle: "All Rounder", price: "2 Lakh", photo: "https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/459942472_1288467142377309_6692740574337292177_n.jpg?ccb=11-4&oh=01_Q5AaIcHYqVhgjZY0HJSRXX9Ebb2VCtRuQZ8KcYlZApSC1iri&oe=67F4E769&_nc_sid=5e03e0&_nc_cat=102" },
      { name: "Jaden Fernandes", playStyle: "All Rounder", price: "51 Lakh", photo: "https://drive.google.com/open?id=1t-iBImdXcJ81Ci2DRmqBdIL4g1nDEgI1" },
      { name: "Ram Bobade", playStyle: "All Rounder", price: "12 Lakh" },
      { name: "Atharva Bawge", playStyle: "All Rounder", price: "6 Lakh" },
      { name: "Harshal Bhosale", playStyle: "All Rounder", price: "7 Lakh", photo: "https://drive.google.com/open?id=1ER8LqLVXT_PKxDCaWD1IkXOPjUdjQ21L" },
      { name: "Keshav Prajapati", playStyle: "All Rounder", price: "2.5 Lakh" },
      { name: "Rakesh Chaudhary", playStyle: "All Rounder", price: "2 Lakh", photo: "https://drive.google.com/open?id=1JJVjzy8n0gSMdFloiIjzLYTlapDa1Aao" },
      { name: "Servesh Khade", playStyle: "All Rounder", price: "5.5 Lakh", photo: "https://drive.google.com/open?id=18pac4n065z3RhSw4sw0qb0TC_CwsFrcU" },
      { name: "Varad", playStyle: "Owner", price: "", isOwner: true }
    ]
  },
  {
    id: 2,
    name: "IT Strikers",
    shortName: "ITS",
    owner: "Sebastian",
    captain: "Hemant",
    players: [
      "Hemant",
      "Soham R",
      "Om",
      "Umair",
      "Omkar",
      "Pranit",
      "Jivesh",
      "Soham D",
      "Sidhesh",
      "Parth"
    ],    stats:{
      attack: 8,
      defense: 8,
      teamwork: 8
    },
    logoColor: "bg-yellow-500",
    playerDetails: [
      { name: "Hemant", playStyle: "All Rounder", price: "1CR", isCaptain: true },
      { name: "Soham R", playStyle: "Batsman", price: "5 Lakh", photo: "https://drive.google.com/open?id=17zq50AebxY5ysdGnF6ujjc1rkTeZhwg7" },
      { name: "Om", playStyle: "Bowler", price: "2 Lakh", photo: "https://drive.google.com/open?id=1mYQoWdi8piFw3TYDbw63A0wrUb07D1h1" },
      { name: "Umair", playStyle: "All Rounder", price: "8.5 Lakh" },
      { name: "Omkar", playStyle: "Batsman", price: "19 Lakh", photo: "https://drive.google.com/open?id=1Gze8H2CcrnZkdhZU2SEyQ4o19qU1LGjH" },
      { name: "Pranit", playStyle: "Batsman", price: "2 Lakh", photo: "https://drive.google.com/open?id=1FBh589AY7aO3OyKdhqYOD2hTz07Jc9Uq" },
      { name: "Jivesh", playStyle: "All Rounder", price: "5 Lakh", photo: "https://drive.google.com/open?id=1veXmWjxLf5eOf2265LRgyCES9ZOdrqoo" },
      { name: "Soham D", playStyle: "Batsman", price: "2 Lakh", photo: "https://drive.google.com/open?id=1aCUFuTnXGUlzIKcU_JbfB5trpEznwRr0" },
      { name: "Sidhesh", playStyle: "Bowler", price: "6.5 Lakh" },
      { name: "Parth", playStyle: "All Rounder", price: "7.5 Lakh", photo: "https://drive.google.com/open?id=1hkODUkeBGxEK_QB0yQGgHR3RllMueJ8l" },
      { name: "Sebastian", playStyle: "Owner", price: "", isOwner: true }
    ]
  },
  {
    id: 3,
    name: "Score Me Daddy",
    shortName: "SMD",
    owner: "Ninad",
    captain: "Rugved",
    players: [
      "Rugved",
      "Pritam",
      "Yashraj",
      "Vinay",
      "Vedant",
      "Nischay",
      "Atif",
      "Aditya"
    ], 
    stats:{
      attack: 8,
      defense: 8,
      teamwork: 8
    },
    logoColor: "bg-red-600",
    playerDetails: [
      { name: "Rugved", playStyle: "All Rounder", price: "1CR", isCaptain: true },
      { name: "Pritam", playStyle: "All Rounder", price: "17 Lakh" },
      { name: "Yashraj", playStyle: "All Rounder", price: "5 Lakh", photo: "https://drive.google.com/open?id=1znKSpruxA3HREDxf-X47Jg7tqdKu7ryK" },
      { name: "Vinay", playStyle: "All Rounder", price: "2 Lakh", photo: "https://drive.google.com/open?id=1heyNTtqFgjY5YrAplDkfJyxtT1a0urBQ" },
      { name: "Vedant", playStyle: "All Rounder", price: "51 Lakh", photo: "https://drive.google.com/open?id=1Mh4dcCOeHx0uA5We3EoiFVgtRQwZmqHs" },
      { name: "Nischay", playStyle: "All Rounder", price: "8 Lakh", photo: "https://drive.google.com/open?id=1vEM5VV5ReB0gykzZgSaXcn-HHwJAZCot" },
      { name: "Atif", playStyle: "Batsman", price: "12 Lakh" },
      { name: "Aditya", playStyle: "Bowler", price: "5 Lakh", photo: "https://drive.google.com/open?id=1JWRxP63MeKKT5Q2jbEPrywPmGq9zdRru" },
      { name: "Ninad", playStyle: "Owner", price: "", isOwner: true }
    ]
  }
];

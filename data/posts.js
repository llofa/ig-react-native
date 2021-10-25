import { USERS } from "./users";

export const POSTS = [
  {
    imageURL: "https://i.ibb.co/YNGQV40/mk-black-dev.png",
    user: USERS[0].user,
    likes: 3499,
    caption:
      "Building out this fire Instagram clone using React Native - let's go build the world we envision #mobile #dev #reactnative",
    profile_picure: USERS[0].image,
    comments: [
      {
        user: "slimxyjax",
        comment: "This is a fire build, teach me how to code",
      },
      {
        user: "kenxy9928",
        comment: "You dont know about the Potts",
      },
      {
        user: "frankieloue",
        comment: "Really cool clone of IG",
      },
    ],
  },
  {
    imageURL: "https://i.ibb.co/Kb4Dn9Y/mk-soloprenuer.png",
    user: USERS[1].user,
    likes: 899,
    caption: "I Love Hogwarts ole man! 🚆",
    profile_picure: USERS[1].image,
    comments: [
      {
        user: "slimxyjax",
        comment: "This is a fire build, teach me how to code",
      },
      {
        user: "kenxy9928",
        comment: "You dont know about the Potts",
      },
      {
        user: "frankieloue",
        comment: "Really cool clone of IG",
      },
      {
        user: "frankieloue",
        comment: "Really cool clone of IG",
      },
    ],
  },
  {
    imageURL: "https://i.ibb.co/82pgRSq/mk-distress-dev.png",
    user: USERS[2].user,
    likes: 499,
    caption: "I Love Hogwarts pops! 🚆",
    profile_picure: USERS[2].image,
    comments: [
      {
        user: "slimxyjax",
        comment: "This is a fire build, teach me how to code",
      },
      {
        user: "kenxy9928",
        comment: "You dont know about the Potts",
      },
      {
        user: "frankieloue",
        comment: "Really cool clone of IG",
      },
    ],
  },
];

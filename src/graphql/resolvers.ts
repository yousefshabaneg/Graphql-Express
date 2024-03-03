import User from "../models/User";

const books = [
  {
    title: "The Typescript",
    author: "Yousef Shaban",
  },
  {
    title: "Node-js Hands on",
    author: "Mohamed Ahmed",
  },
];

const resolvers = {
  Query: {
    books: () => {
      // perform any db operations
      return books;
    },
    users: async () => {
      const users = await User.findAll();
      return users;
    },
  },
};

export default resolvers;

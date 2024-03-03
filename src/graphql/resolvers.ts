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
  },
};

export default resolvers;

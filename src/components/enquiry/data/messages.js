module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hello there. Do ask me if you have any enquiries on this service.',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Help Bot',
      avatar: 'https://placeimg.com/140/140/any'
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Help Service for Smart City Application",
    createdAt: new Date(),
    system: true,
  },
];
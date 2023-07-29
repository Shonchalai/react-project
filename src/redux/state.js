let state = {
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Vasya', photoUrl: '/cat1.png'},
      { id: 2, name: "Galya", photoUrl: '/cat2.webp' },
      { id: 3, name: "Vera", photoUrl: '/cat3.avif' },
    ],

    messages: [
      { id: 1, messageText: "Hi" },
      { id: 2, messageText: "Hello" },
      { id: 3, messageText: "Bye" },
    ]
  },

  profilePage: {
    posts: [
      { id: 1, message: 'Hi! How are you?', likesCount: 5 },
      { id: 2, message: 'It is my first post.', likesCount: 3 },
    ],
  }, 

  sidebar: {
    friends: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Ann' },
      { id: 3, name: 'Kevin' },
    ],
  },
}

export default state
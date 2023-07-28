import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let dialogs = [
  { id: 1, name: "Vasya" },
  { id: 2, name: "Galya" },
  { id: 3, name: "Vera" },
];

let messages = [
  { id: 1, messageText: "Hi" },
  { id: 2, messageText: "Hello" },
  { id: 3, messageText: "Bye" },
];

const posts = [
  { id: 1, message: 'Hi! How are you?', likesCount: 5 },
  { id: 2, message: 'It is my first post.', likesCount: 3},
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
)

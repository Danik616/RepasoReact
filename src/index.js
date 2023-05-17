import React from "react";
import ReactDOM from "react-dom/client";
import { TaskCard } from "./Task";
import { Button } from "./Button";
import { Post } from "./Posts";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const users = [
  {
    id: 1,
    name: "John",
    image: "https://robohash.org/user1",
  },
  {
    id: 1,
    name: "John",
    image: "https://robohash.org/user2",
  },
];

root.render(
  <div>
    {users.map((user, index) => {
      return <div key={index}>
        <h1 >{user.name}</h1>
        <img src={user.image}/>
      </div>
    })}
  </div>
);

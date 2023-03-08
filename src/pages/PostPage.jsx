import React from "react";
import Post from "../components/Post";

const ANAKIN_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const R2D2_IMAGE =
  "https://csg.tinkercad.com/things/5AdjXFgyRiU/t725.png?rev=720&s=&v=0";
const DV_IMAGE = "./images";

const AVATAR_1 =
  "https://i.pinimg.com/736x/09/27/5a/09275a0b75eba63c98c81af8901e6ee4.jpg";
const AVATAR_2 =
  "https://helios-i.mashable.com/imagery/articles/04ncf27gINSLhpRF6OR04cp/hero-image.fill.size_1200x1200.v1623375183.jpg";

const postData = [
  {
    author: {
      name: "Anakin Skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader",
    },
    ava: AVATAR_1,
    content: "WTF? WHO is Ray? Why shi is Skywalker?",
    image: ANAKIN_IMAGE,
    date: "27 feb.",
    likesCount: 300,
    looks: 490,
    comments: 23,
    downloads: 3,
  },
  {
    author: {
      name: "R2D2",
      photo: R2D2_IMAGE,
      nickname: "@R2D2",
    },
    ava: AVATAR_2,
    content: "I forgot my password to wi-fi?",
    image: R2D2_IMAGE,
    date: "26 feb.",
    likesCount: 240,
    looks: 467,
    comments: 20,
    downloads: 7,
  },
  {
    author: {
      name: "R2D2",
      photo: R2D2_IMAGE,
      nickname: "@R2D2",
    },
    ava: AVATAR_2,
    content: "I forgot my password to wi-fi.",
    image: R2D2_IMAGE,
    date: "25 feb.",
    likesCount: 138,
    looks: 679,
    comments: 23,
    downloads: 8,
  },
  {
    author: {
      name: "Dart Veider",
      photo: R2D2_IMAGE,
      nickname: "@DV",
    },
    ava: AVATAR_2,
    content: "I forgot my password to wi-fi.",
    image: R2D2_IMAGE,
    date: "24 feb.",
    likesCount: 170,
    looks: 586,
    comments: 18,
    downloads: 15,
  },
  {
    author: {
      name: "R2D2",
      photo: R2D2_IMAGE,
      nickname: "@R2D2",
    },
    ava: AVATAR_2,
    content: "I forgot my password to wi-fi?",
    image: R2D2_IMAGE,
    date: "23 feb.",
    likesCount: 780,
    looks: 247,
    comments: 24,
    downloads: 17,
  },
  {
    author: {
      name: "R2D2",
      photo: R2D2_IMAGE,
      nickname: "@R2D2",
    },
    ava: AVATAR_2,
    content: "I forgot my password to wi-fi?",
    image: R2D2_IMAGE,
    date: "22 feb.",
    likesCount: 456,
    looks: 367,
    comments: 45,
    downloads: 12,
  },
  {
    author: {
      name: "R2D2",
      photo: R2D2_IMAGE,
      nickname: "@R2D2",
    },
    ava: AVATAR_2,
    content: "I forgot my password to wi-fi?",
    image: R2D2_IMAGE,
    date: "21 feb.",
    likesCount: 240,
    looks: 469,
    comments: 22,
    downloads: 13,
  },
];

const SideOfPublicationsPage = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {postData.map((post, index) => (
            <Post {...post} key={index} />
          ))}
        </div>
      </header>
    </div>
  );
};

export default SideOfPublicationsPage;

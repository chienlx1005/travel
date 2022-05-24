import React from "react";
import CardItem from "./CardItem";
import "./Cards.scss";

const imgSource = [
  {
    id: 1,
    src: "images/img-1.jpg",
    text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    label: "Adventure",
    path: "services",
  },
  {
    id: 2,
    src: "images/img-2.jpg",
    text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    label: "LuonVuiTuoi",
    path: "services",
  },
  {
    id: 3,
    src: "images/img-3.jpg",
    text: "Birley minestrone soup calories, Kurczak z piekarnika czas asdas",
    label: "Luxury",
    path: "services",
  },
  // {
  //   id: 4,
  //   src: "images/img-4.jpg",
  //   text: "Explore the hidden waterfall deep inside the Amazon Jungle",
  //   label: "Adventure",
  //   path: "services",
  // },
  // {
  //   id: 5,
  //   src: "images/img-5.jpg",
  //   text: "Explore the hidden waterfall deep inside the Amazon Jungle",
  //   label: "Adventure",
  //   path: "services",
  // },
  // {
  //   id: 6,
  //   src: "images/img-6.jpg",
  //   text: "Explore the hidden waterfall deep inside the Amazon Jungle",
  //   label: "Adventure",
  //   path: "services",
  // },
  // {
  //   id: 7,
  //   src: "images/img-7.jpg",
  //   text: "Explore the hidden waterfall deep inside the Amazon Jungle",
  //   label: "Adventure",
  //   path: "services",
  // },
  // {
  //   id: 8,
  //   src: "images/img-8.jpg",
  //   text: "Explore the hidden waterfall deep inside the Amazon Jungle",
  //   label: "Adventure",
  //   path: "services",
  // },
  // {
  //   id: 9,
  //   src: "images/img-9.jpg",
  //   text: "Explore the hidden waterfall deep inside the Amazon Jungle",
  //   label: "Adventure",
  //   path: "services",
  // },
];
const Cards = () => {
  return (
    <>
      <div className="cards">
        <h1>Check out these EPIC Destinations</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem item={imgSource} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

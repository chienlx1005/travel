import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  let items = props.item;
  return (
    <>
      {items &&
        items.length > 0 &&
        items.map((item, index) => {
          return (
            <li className="cards__item" key={item.id}>
              <Link to={item.path} className="cards__item__link">
                <figure
                  className="cards__item__pic-wrap"
                  data-category={item.label}
                >
                  <img
                    className="cards__item__img"
                    src={item.src}
                    alt="Travel Image"
                  />
                </figure>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">{item.text}</h5>
                </div>
              </Link>
            </li>
          );
        })}
    </>
  );
}

export default CardItem;

import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar image={props.image} />
        </div>
        <div className="bottom">
          <Detail info={props.tel} />
          <Detail info={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;

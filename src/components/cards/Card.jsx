import React from "react";
import Image from "./Image";

export default function Card(props) {
  const { title, text, link, img } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <Image>{img}</Image>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">
          Go to {link}
        </a>
      </div>
    </div>
  );
}

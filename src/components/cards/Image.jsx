import React from "react";

export default function Image({ children }) {
  if (children) {
    return <img src={children} className="card-img-top" alt="..." />;
  }
}

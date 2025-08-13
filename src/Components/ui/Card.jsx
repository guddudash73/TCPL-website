import React from "react";

const Card = ({ className = "", children }) => {
  return (
    <article
      className={`rounded-xl overflow-hidden  px-6 ${className} flex flex-col justify-center items-center`}
    >
      {children}
    </article>
  );
};

export default Card;

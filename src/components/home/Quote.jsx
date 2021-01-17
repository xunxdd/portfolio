import React from "react";

const Quote = ({ quote }) => {
  const {
    text,
    by
  } = quote;
  return (
    <div className="px-2 mb-5" >
        <blockquote className="small blockquote text-muted">
            <p className="mb-0">{text}</p>
            <footer className="blockquote-footer">{by} </footer>  
        </blockquote>
    </div>
  );
};
export default Quote;

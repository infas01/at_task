import React, { useState } from 'react';

function Card({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md overflow-hidden my-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3
          className={`font-medium  ${
            isOpen ? 'text-customPurple' : 'text-black'
          }`}
        >
          {title}
        </h3>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="p-4 text-customGrey">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Card;

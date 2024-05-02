import React from 'react';

function CustomButton(props) {
  const { text } = props;
  return (
    <div>
      <a
        style={{ height: '38px' }}
        href={text}
        className="text-sm bg-customOrange text-white font-medium py-3 px-5 mt-5 rounded-md"
      >
        {text}
      </a>
    </div>
  );
}

export default CustomButton;

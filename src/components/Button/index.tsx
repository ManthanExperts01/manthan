import React from 'react';

const Button = ({
  className,
  buttonText,
  onClick,
}: {
  className: string;
  buttonText: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;

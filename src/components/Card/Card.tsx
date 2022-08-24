import React from 'react';

export interface CardProps {
  buttonText: string;
  imgSrc?: string;
  backgroundColor?: string;
  buttonBackgroundColor?: string;
  title?: string;
  subtitle?: string;
}

const Card = ({
  imgSrc,
  buttonText,
  backgroundColor,
  buttonBackgroundColor = '#49629E',
  title,
  subtitle
}: CardProps) => {
  return (
    <div
      style={{
        display: 'flex',
        height: 80,
        minWidth: 600,
        border: 'solid 1px',
        backgroundColor,
        margin: '16px'
      }}
    >
      <img src={imgSrc || '/src/assets/default-placeholder.png'} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexBasis: '80%',
          alignItems: 'start',
          justifyContent: 'center'
        }}
      >
        <p style={{ margin: '8px 16px' }}>{title}</p>
        <p style={{ margin: '8px 16px' }}>{subtitle}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'end', margin: '0 8px 8px' }}>
        <button style={{ backgroundColor: buttonBackgroundColor }}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;

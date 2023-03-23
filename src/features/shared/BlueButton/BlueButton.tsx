import React from 'react';
import { StyledBlueButton } from './BlueButton.style';

interface IBlueButtonProps {
  text: string
};

export const BlueButton: React.FC<IBlueButtonProps> = ({ text }) => {

  return (
    <StyledBlueButton>
      { text }
    </StyledBlueButton>
  );
};
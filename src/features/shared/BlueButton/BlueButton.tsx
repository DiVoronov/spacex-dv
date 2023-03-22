import React from 'react';
import { StyledBlueButton } from './BlueButton.style';

interface IBlueButtonProps {
  text: string
  fn?: () => void
};

export const BlueButton: React.FC<IBlueButtonProps> = ({ text, fn }) => {

  return (
    <StyledBlueButton onClick={fn}>
      { text }
    </StyledBlueButton>
  );
};
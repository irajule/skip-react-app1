import React from 'react';
import { BackButton, ContinueButton, ActionsWrapper } from '../../styles/FooterActions.styles'; // reference the defined styles

const FooterActions = () => {
  return (
    <ActionsWrapper>
      <BackButton variant="contained" color="primary">
        Back
      </BackButton>

      <ContinueButton variant="outlined" color="primary">
        Continue
      </ContinueButton>
    </ActionsWrapper>
  );
};

export default FooterActions;

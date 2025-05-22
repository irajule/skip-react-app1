import React from 'react';
import { BackButton, ContinueButton, ActionsWrapper } from '../../styles/FooterActions.styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { routeMap } from '../../routes/routesConfig';

const FooterActions = ({ disableContinue = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const nextPath = routeMap[currentPath]?.next;
  const backPath = routeMap[currentPath]?.back;

  const handleContinue = () => {
    if (nextPath) {
      navigate(nextPath);
    }
  };

  const handleBack = () => {
    if (backPath) {
      navigate(backPath);
    }
  };

  return (
    <ActionsWrapper>
      {backPath && (
        <BackButton variant="contained" color="primary" onClick={handleBack}>
          Back
        </BackButton>
      )}
      <ContinueButton
        variant="outlined"
        color="primary"
        onClick={handleContinue}
        disabled={disableContinue}
      >
        Continue
      </ContinueButton>
    </ActionsWrapper>
  );
};

export default FooterActions;

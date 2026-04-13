import React from 'react';
import styled from 'styled-components';
import HealthcareOverview from './tabs/HealthcareOverview';

const HealthcareContentWrapperStandard = () => {
  return (
    <Wrapper>
      <HealthcareOverview />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default HealthcareContentWrapperStandard;

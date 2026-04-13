import React from 'react';
import styled from 'styled-components';
import AdministrativeSupportOverview from './tabs/AdministrativeSupportOverview';

const AdministrativeSupportContentWrapper = () => {
  return (
    <Wrapper>
      <AdministrativeSupportOverview />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default AdministrativeSupportContentWrapper;

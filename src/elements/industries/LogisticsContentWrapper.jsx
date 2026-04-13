import React from 'react';
import styled from 'styled-components';
import LogisticsOverview from './tabs/LogisticsOverview';

const LogisticsContentWrapper = () => {
  return (
    <Wrapper>
      <LogisticsOverview />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default LogisticsContentWrapper;

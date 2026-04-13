import React from 'react';
import styled from 'styled-components';
import GeneralServicesOverview from './tabs/GeneralServicesOverview';

const GeneralServicesContentWrapper = () => {
  return (
    <Wrapper>
      <GeneralServicesOverview />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default GeneralServicesContentWrapper;

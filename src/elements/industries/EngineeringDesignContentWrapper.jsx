import React from 'react'
import styled from 'styled-components'
import { TabWrapper, Tab, TabContent } from '../../components/Nav/TabWrapper';
import EngineeringDesignOverview from './tabs/EngineeringDesignOverview';

const EngineeringDesignContentWrapper = () => {
  return (
    <TabWrapper>
      <Tab>Engineering Design Overview</Tab>
      
      <TabContent>
        <EngineeringDesignOverview />
      </TabContent>
    </TabWrapper>
  )
}

export default EngineeringDesignContentWrapper;

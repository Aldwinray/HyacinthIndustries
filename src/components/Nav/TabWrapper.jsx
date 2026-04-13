import React, { useState } from 'react'
import styled from 'styled-components'


// Tab component
const TabWrapper = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)

  // Separate tabs and content from children
  const tabs = []
  const contents = []

  React.Children.forEach(children, (child) => {
    if (child.type === Tab) {
      tabs.push(child)
    } else if (child.type === TabContent) {
      contents.push(child)
    }
  })

  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab, index) => (
          React.cloneElement(tab, {
            key: index,
            active: activeTab === index,
            onClick: () => setActiveTab(index)
          })
        ))}
      </TabList>
      {contents.map((content, index) => (
        React.cloneElement(content, {
          key: index,
          active: activeTab === index
        })
      ))}
    </TabContainer>
  )
}


export { TabWrapper, Tab, TabContent }
export default TabWrapper;

const TabContainer = styled.div`
  width: 100%;
`

const TabList = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.7rem 0.5rem 0rem;
  background: #1a1a1a;
`

const Tab = styled.button`
  position: relative;
  padding: 0.5rem 1.25rem;
  min-width: 100px;
  width: auto;
  border: none;
  border-radius: 0;
  background: ${props => props.active ? '#ffffff' : '#2a2a2a'};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.active ? '#1a1a1a' : '#ffffff'};
  transform: perspective(200px) rotateX(5deg);
  transform-origin: bottom;
  clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
  transition: all 0.3s ease;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
    opacity: ${props => props.active ? 1 : 0};
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    background: ${props => props.active ? '#f8f8f8' : '#333333'};
    color: ${props => props.active ? '#1a1a1a' : '#ffffff'};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    z-index: -1;
  }
`

const TabContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  padding: 1rem;
`
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { X, Save, Palette, Type } from 'lucide-react';

const ThemeEditor = () => {
  const { theme, setTheme, isLightTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('colors');
  const [tempTheme, setTempTheme] = useState(theme);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setTempTheme(theme);
  };

  const handleColorChange = (colorKey, value) => {
    setTempTheme(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        [colorKey]: value
      }
    }));
  };

  const handleFontChange = (fontKey, value) => {
    setTempTheme(prev => ({
      ...prev,
      typography: {
        ...prev.typography,
        [fontKey]: value
      }
    }));
  };

  const handleSave = () => {
    // Create a new theme object with the current name
    const updatedTheme = {
      ...tempTheme,
      name: theme.name // Preserve light/dark mode
    };
    
    // Update localStorage with custom theme
    localStorage.setItem('customTheme', JSON.stringify(updatedTheme));
    
    // Apply the theme
    setTheme(theme.name);
    
    // Close the editor
    setIsOpen(false);
  };

  return (
    <>
      <EditorButton onClick={handleToggle} aria-label="Open Theme Editor">
        {isOpen ? <X size={20} /> : <Palette size={20} />}
      </EditorButton>

      {isOpen && (
        <EditorPanel>
          <EditorHeader>
            <h3>Theme Editor</h3>
            <TabContainer>
              <Tab 
                active={activeTab === 'colors'} 
                onClick={() => setActiveTab('colors')}
              >
                <Palette size={16} />
                Colors
              </Tab>
              <Tab 
                active={activeTab === 'typography'} 
                onClick={() => setActiveTab('typography')}
              >
                <Type size={16} />
                Typography
              </Tab>
            </TabContainer>
          </EditorHeader>

          <EditorContent>
            {activeTab === 'colors' && (
              <ColorSection>
                <h4>Brand Colors</h4>
                <ColorGrid>
                  <ColorControl>
                    <label htmlFor="primary">Primary</label>
                    <div>
                      <ColorSwatch bg={tempTheme.colors.primary} />
                      <input
                        type="color"
                        id="primary"
                        value={tempTheme.colors.primary}
                        onChange={(e) => handleColorChange('primary', e.target.value)}
                      />
                    </div>
                  </ColorControl>
                  
                  <ColorControl>
                    <label htmlFor="secondary">Secondary</label>
                    <div>
                      <ColorSwatch bg={tempTheme.colors.secondary} />
                      <input
                        type="color"
                        id="secondary"
                        value={tempTheme.colors.secondary}
                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                      />
                    </div>
                  </ColorControl>
                  
                  <ColorControl>
                    <label htmlFor="accent">Accent</label>
                    <div>
                      <ColorSwatch bg={tempTheme.colors.accent} />
                      <input
                        type="color"
                        id="accent"
                        value={tempTheme.colors.accent}
                        onChange={(e) => handleColorChange('accent', e.target.value)}
                      />
                    </div>
                  </ColorControl>
                </ColorGrid>

                <h4>UI Colors</h4>
                <ColorGrid>
                  <ColorControl>
                    <label htmlFor="background">Background</label>
                    <div>
                      <ColorSwatch bg={tempTheme.colors.background} />
                      <input
                        type="color"
                        id="background"
                        value={tempTheme.colors.background}
                        onChange={(e) => handleColorChange('background', e.target.value)}
                      />
                    </div>
                  </ColorControl>
                  
                  <ColorControl>
                    <label htmlFor="surface">Surface</label>
                    <div>
                      <ColorSwatch bg={tempTheme.colors.surface} />
                      <input
                        type="color"
                        id="surface"
                        value={tempTheme.colors.surface}
                        onChange={(e) => handleColorChange('surface', e.target.value)}
                      />
                    </div>
                  </ColorControl>
                  
                  <ColorControl>
                    <label htmlFor="text">Text</label>
                    <div>
                      <ColorSwatch bg={tempTheme.colors.text} />
                      <input
                        type="color"
                        id="text"
                        value={tempTheme.colors.text}
                        onChange={(e) => handleColorChange('text', e.target.value)}
                      />
                    </div>
                  </ColorControl>
                </ColorGrid>
              </ColorSection>
            )}

            {activeTab === 'typography' && (
              <TypographySection>
                <h4>Font Families</h4>
                <FontControl>
                  <label htmlFor="headingFont">Heading Font</label>
                  <select 
                    id="headingFont"
                    value={tempTheme.typography.headingFont}
                    onChange={(e) => handleFontChange('headingFont', e.target.value)}
                  >
                    <option value="var(--font-heading)">Montserrat (Default)</option>
                    <option value="var(--font-body)">Lexend</option>
                    <option value="var(--font-accent)">Playfair Display</option>
                  </select>
                </FontControl>
                
                <FontControl>
                  <label htmlFor="bodyFont">Body Font</label>
                  <select 
                    id="bodyFont"
                    value={tempTheme.typography.bodyFont}
                    onChange={(e) => handleFontChange('bodyFont', e.target.value)}
                  >
                    <option value="var(--font-body)">Lexend (Default)</option>
                    <option value="var(--font-heading)">Montserrat</option>
                    <option value="var(--font-accent)">Playfair Display</option>
                  </select>
                </FontControl>
                
                <FontControl>
                  <label htmlFor="accentFont">Accent Font</label>
                  <select 
                    id="accentFont"
                    value={tempTheme.typography.accentFont}
                    onChange={(e) => handleFontChange('accentFont', e.target.value)}
                  >
                    <option value="var(--font-accent)">Playfair Display (Default)</option>
                    <option value="var(--font-heading)">Montserrat</option>
                    <option value="var(--font-body)">Lexend</option>
                  </select>
                </FontControl>

                <h4>Preview</h4>
                <PreviewSection>
                  <HeadingPreview style={{ fontFamily: tempTheme.typography.headingFont }}>
                    Heading Font: Hyacinth Industries
                  </HeadingPreview>
                  <BodyPreview style={{ fontFamily: tempTheme.typography.bodyFont }}>
                    Body Font: Quality Service from Best Talents. Boost company performance, bring your ideals to reality.
                  </BodyPreview>
                  <AccentPreview style={{ fontFamily: tempTheme.typography.accentFont }}>
                    Accent Font: "Excellence in every detail"
                  </AccentPreview>
                </PreviewSection>
              </TypographySection>
            )}
          </EditorContent>

          <EditorFooter>
            <SaveButton onClick={handleSave}>
              <Save size={16} />
              Save Changes
            </SaveButton>
          </EditorFooter>
        </EditorPanel>
      )}
    </>
  );
};

const EditorButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 1000;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const EditorPanel = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  z-index: 1001;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const EditorHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.name === 'dark' ? '#333' : '#ddd'};
  
  h3 {
    margin: 0 0 1rem 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Tab = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme, active }) => 
    active ? theme.colors.primary : 'transparent'};
  color: ${({ theme, active }) => 
    active ? 'white' : theme.colors.text};
  border: 1px solid ${({ theme, active }) => 
    active ? theme.colors.primary : theme.name === 'dark' ? '#333' : '#ddd'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme, active }) => 
      active ? theme.colors.primary : theme.name === 'dark' ? '#333' : '#f5f5f5'};
  }
`;

const EditorContent = styled.div`
  padding: 1rem;
  overflow-y: auto;
  max-height: 60vh;
`;

const ColorSection = styled.div`
  h4 {
    margin: 1rem 0 0.5rem 0;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const TypographySection = styled.div`
  h4 {
    margin: 1rem 0 0.5rem 0;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
`;

const ColorControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    font-size: 0.875rem;
  }
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  input[type="color"] {
    width: 100%;
    height: 30px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    cursor: pointer;
  }
`;

const ColorSwatch = styled.div`
  width: 30px;
  height: 30px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ bg }) => bg};
  border: 1px solid ${({ theme }) => theme.name === 'dark' ? '#333' : '#ddd'};
`;

const FontControl = styled.div`
  margin-bottom: 1rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }
  
  select {
    width: 100%;
    padding: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    background-color: ${({ theme }) => theme.name === 'dark' ? '#333' : 'white'};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.name === 'dark' ? '#444' : '#ddd'};
  }
`;

const PreviewSection = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.name === 'dark' ? '#333' : '#ddd'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const HeadingPreview = styled.h3`
  margin: 0 0 1rem 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const BodyPreview = styled.p`
  margin: 0 0 1rem 0;
  line-height: 1.5;
`;

const AccentPreview = styled.blockquote`
  margin: 0;
  font-style: italic;
  color: ${({ theme }) => theme.colors.accent};
`;

const EditorFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.name === 'dark' ? '#333' : '#ddd'};
  display: flex;
  justify-content: flex-end;
`;

const SaveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default ThemeEditor;

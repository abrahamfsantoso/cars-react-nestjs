import React from 'react';
import './App.css';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Homepage } from './app/containers/Homepage/index';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`;

function App() {
  return (
    <AppContainer>
      <Homepage />
    </AppContainer>
  );
}

export default App;

import React, { Profiler } from 'react';

import Directory from '../../components/Directory';

import { HomePageContainer } from './styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Profiler
        id='Directory'
        onRender={(id, phase, actualDuration) => console.log({ id, phase, actualDuration })}
      >
        <Directory />
      </Profiler>
    </HomePageContainer>
  );
};

export default HomePage;

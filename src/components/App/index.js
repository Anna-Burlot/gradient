import React from 'react';

import Colors from 'src/containers/Colors';
import NbColors from 'src/containers/NbColors';
import RandomButtons from 'src/containers/RandomButtons';
import Gradient from 'src/containers/Gradient';
import DirectionButtons from 'src/components/DirectionButtons';

const App = () => (
  <div className="app">
    <NbColors />
    <RandomButtons />
    <Colors />
    <Gradient />
    <DirectionButtons />
  </div>
);

export default App;

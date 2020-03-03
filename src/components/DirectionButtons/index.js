import React from 'react';

import Button from 'src/containers/DirectionButtons/Button';

const DirectionButtons = () => (
  <div className="buttons group">
    <Button text="To left" direction="90deg" />
    <Button text="To right" direction="270deg" />
    <Button text="45 degrés" direction="45deg" />
    <Button text="135 degrés" direction="135deg" />
    <Button text="225 degrés" direction="225deg" />
    <Button text="315 degrés" direction="315deg" />
  </div>
);

export default DirectionButtons;

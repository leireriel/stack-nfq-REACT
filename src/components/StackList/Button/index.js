import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function FloatingActionButtons() {
  return (
    <div>
      <Fab color="primary" aria-label="Add">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default FloatingActionButtons;
import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function Banner() {
  const [open, setOpen] = React.useState(false);

  const testOpenBanner = () => {
    setOpen(true);
  };

  const handleOpenQueue = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    console.log("queue open");
    // insert that observer here

    console.log("close queue banner");
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={testOpenBanner}>Test open</Button>

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        >
        <MuiAlert severity="info">
          The queue is closed right now 

          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleOpenQueue}>
              Open Queue
            </Button>
          </React.Fragment>

        </MuiAlert>
        </Snackbar>
    </div>
  );
}
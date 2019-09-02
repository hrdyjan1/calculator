import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

function Warning({ error }) {
  const [warning, setWarning] = React.useState(false);

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setWarning(false);
  }

  React.useEffect(() => {
    if (error) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [error]);

  return (
    <Snackbar
      className="warning"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={warning}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{error}</span>}
      action={[
        <Button
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          Close
        </Button>,
      ]}
    />
  );
}
Warning.propTypes = {
  error: PropTypes.string,
};

export default Warning;

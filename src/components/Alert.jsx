import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert as MaterialAlert } from '@material-tailwind/react';

const Alert = ({ message }) => {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 5000);
  return (
    <>
      <MaterialAlert
        show={show}
        color="red"
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        {message || ''}
      </MaterialAlert>
    </>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Alert;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert as MaterialAlert } from '@material-tailwind/react';

const Alert = ({ message }) => {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 5000);

  const filterMessage = (msg) => {
    const fm = [
      ...new Set(
        msg
          .replace(/Validation failed:/g, '')
          .replace(/can't be blank/g, 'is required')
          .split(','),
      ),
    ].join(', ');
    return fm;
  };

  return (
    <>
      <MaterialAlert
        className="mb-12 p-2 ml-2"
        show={show}
        color="red"
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        {filterMessage(message) || ''}
      </MaterialAlert>
    </>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Alert;

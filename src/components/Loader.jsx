import React from 'react';
import { Circles } from 'react-loader-spinner';

const Loader = () => (
  <div className="mt-72 ml-[500px]">
    <Circles
      height="80"
      width="80"
      color="blue"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible
    />
  </div>
);

export default Loader;

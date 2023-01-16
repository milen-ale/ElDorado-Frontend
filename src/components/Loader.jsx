import React from 'react';
import { Rings, ThreeDots } from 'react-loader-spinner';

const Loader = () => (
  <div className="flex items-center justify-center mx-auto h-96 my-auto">
    <Rings
      height="80"
      width="80"
      color="#ffa200"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible
      ariaLabel="rings-loading"
    />
  </div>
);

export const Dots = () => (
  <ThreeDots
    height="21"
    width="21"
    radius="9"
    color="#ffa200"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible
  />
);

export default Loader;

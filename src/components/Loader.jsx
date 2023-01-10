import React from "react";
import { Circles } from "react-loader-spinner";

const Loader = () => (
  <Circles
    height="80"
    width="80"
    color="blue"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible
  />
);

export default Loader;

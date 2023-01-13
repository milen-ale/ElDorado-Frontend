import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { car, getCar } from '../redux/Home/home';

const CarDetails = () => {
  const { id } = useParams();
  const carDetails = useSelector(car);
  const dispatch = useDispatch();
  document.title = `ElDorado | ${carDetails.name}`;
  useEffect(() => {
    dispatch(getCar(id));
  }, []);
  return (
    <div className="flex justify-evenly  items-center">
      <div>
        <img
          className="w-[1000px] rounded-md "
          src={carDetails.image}
          alt={carDetails.name}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{carDetails.name}</h1>
        <p className="text-sm w-72">
          {' '}
          {carDetails.description}
        </p>
        <div className=" bg-gray-400 text-center">
          <p className="font-bold">{carDetails.model}</p>
        </div>
        <div className=" bg-blue-400 text-center">
          <p className="font-bold">
            $
            {carDetails.daily_price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

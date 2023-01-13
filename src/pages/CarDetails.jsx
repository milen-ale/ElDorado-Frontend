import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { car, getCar } from '../redux/Home/home';

const CarDetails = ({ open }) => {
  const { id } = useParams();
  const carDetails = useSelector(car);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate('/booking');
  };

  useEffect(() => {
    dispatch(getCar(id));
  }, []);
  return (
    <>
      <div className="mt-10 flex items-center smax:flex-col gap-3">
        <img
          className="w-[1000px] min-w-[270px] rounded-md self-stretch object-cover"
          src={carDetails.image}
          alt={carDetails.name}
        />
        <div className="flex flex-col gap-4 self-stretch">
          <h1 className="text-2xl font-semibold self-end justify-self-start font-osans">
            {carDetails.name}
          </h1>

          <p className="font-bold bg-gray-400 text-center px-7">
            {carDetails.model}
          </p>

          <p className=" bg-white text-black text-center font-bold px-7">
            $
            {carDetails.daily_price}
            {' '}
            /day
          </p>
          <p className={`text-base max-w-[800px] ${open && 'text-xs'}`}>{carDetails.description}</p>
          <button onClick={handleReserve} type="button">
            <span className="text-black font-bold bg-amber-500 border px-4 hover:bg-white hover:border-amber-500 hover:text-amber-500 py-3 rounded-sm">
              Reserve
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

CarDetails.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default CarDetails;

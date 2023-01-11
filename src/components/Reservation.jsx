import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { TrashIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  allStatus,
  carReservations,
  getReservations,
  deleteReservation,
} from '../redux/Reservations/reservationsSlice';
import { useAuthUser } from '../redux/Auth/useAuthUser';
import Loader from './Loader';
import ReservationDetail from './ReservationDetail';

const Reservation = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(carReservations);
  const status = useSelector(allStatus);
  const currentUser = useAuthUser();

  const handleRemoveReservation = (reservationId) => {
    const removeOptions = {
      userId: currentUser.id,
      reservationId,
    };

    dispatch(deleteReservation(removeOptions));
  };

  useEffect(() => {
    if (reservations.length === 0) dispatch(getReservations());
  }, [dispatch, reservations.length]);

  return status === 'loading' ? (
    <div className="flex items-center justify-center h-96 w-[75vw]">
      <Loader />
    </div>
  ) : (
    <div className="w-96 mt-5 mx-auto flex flex-col gap-y-12 h-[95%]">
      {reservations.length === 0 ? (
        <Card className="w-96 my-auto h-32">
          <CardBody className="text-center font-bold my-auto text-2xl"> No Reservations </CardBody>
        </Card>
      ) : (
        reservations.map(
          ({
            id: reservationId,
            pickup_date: pickupDate,
            return_date: returnDate,
            car: {
              name: carName, model, image, daily_price: dailyPrice,
            },
          }) => (
            <Card key={reservationId} className="w-96">
              <CardHeader color="amber" className="relative h-56">
                <img
                  src={image}
                  alt={`${carName}-img`}
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody className="text-center">
                <ReservationDetail
                  title={carName}
                  pickupDate={pickupDate}
                  returnDate={returnDate}
                  model={model}
                />
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-between py-3"
              >
                <Typography
                  variant="small"
                  className="text-blue-gray-500 font-bold"
                >
                  {`$${dailyPrice}/day`}
                </Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                  <button
                    onClick={() => handleRemoveReservation(reservationId)}
                    type="button"
                    className="flex gap-2 items-center border border-red-600 rounded p-1"
                  >
                    <TrashIcon className="w-7 text-red-500" />
                    <span className="capitalize">remove</span>
                  </button>
                </Typography>
              </CardFooter>
            </Card>
          ),
        )
      )}
    </div>
  );
};

export default Reservation;

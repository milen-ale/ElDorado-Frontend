import React, { useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  ownerCars,
  allStatus,
  toggleAvailability,
  getOwnerCars,
  setMessageEmpty,
} from '../redux/Home/home';
import { useAuthUser } from '../redux/Auth/useAuthUser';
import Loader from './Loader';
import Switch from './Switch';

const DeleteCar = () => {
  const userCars = useSelector(ownerCars);
  const status = useSelector(allStatus);
  const currentUser = useAuthUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteCar = (status, carId) => {
    const car = {
      available: status,
    };

    setTimeout(() => {
      dispatch(toggleAvailability({ ownerId: currentUser.id, carId, car }));
    }, 1900);
  };

  document.title = 'ElDorado | DeleteCar';

  const checkAuthUser = () => {
    if (Object.keys(currentUser).length === 0) navigate('/login');
  };

  useEffect(() => {
    dispatch(setMessageEmpty());
    dispatch(getOwnerCars(currentUser.id));
    checkAuthUser();
  }, [userCars.length, currentUser]);
  return (
    <>
      <CardHeader
        variant="gradient"
        className="mb-4 grid h-28 place-items-center text-white bg-black/50 backdrop-blur-md"
      >
        <Typography
          variant="h3"
          color="white"
          className="font-osans uppercase tracking-widest font-light"
        >
          Delete a Car
        </Typography>
      </CardHeader>
      {status === 'loading' ? (
        <div className="flex items-center justify-center h-96 w-[75vw]">
          <Loader />
        </div>
      ) : (
        <div className="Car-Grid grid gap-6">
          {userCars.map(
            ({
              id: carId,
              name,
              model,
              image,
              daily_price: price,
              available,
            }) => (
              <Card key={carId} className="cursor-pointer my-5">
                <CardHeader color="amber" className="relative h-56 mx-0.5">
                  <img
                    src={image}
                    alt="img-blur-shadow"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody className="px-2 text-center">
                  <Typography variant="h5" className="mb-2 whitespace-pre-wrap">
                    {name}
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex items-center justify-between py-3"
                >
                  <Typography variant="small">
                    $
                    {price}
                  </Typography>
                  {/* <Button
                    color="amber"
                    className="text-xs"
                    onClick={() => handleDeleteCar(available)}
                  >
                    {available ? 'Available' : 'Not Available'}
                  </Button> */}
                  <Switch
                    status={available}
                    carName={name}
                    carId={carId}
                    handleRemove={handleDeleteCar}
                  />
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex gap-1"
                  >
                    {model}
                  </Typography>
                </CardFooter>
              </Card>
            ),
          )}
        </div>
      )}
    </>
  );
};

export default DeleteCar;

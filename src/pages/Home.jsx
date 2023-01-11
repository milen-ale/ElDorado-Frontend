import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { allCars, allStatus } from '../redux/Home/home';

const Home = () => {
  document.title = 'ElDorado | Home';
  const cars = useSelector(allCars);
  const status = useSelector(allStatus);
  const navigate = useNavigate();
  return status === 'loading' ? (
    <div className="flex items-center justify-center h-96 w-[75vw]">
      <Loader />
    </div>
  ) : (
    <>
      <div>
        <Typography
          variant="h1"
          className="text-center text-xl sm:text-2xl md:text-3xl"
        >
          Latest Models
        </Typography>
        <hr className="border border-b-2 mb-5 bg-blue-gray-900" />
      </div>
      <div className="Car-Grid grid gap-x-16 gap-y-6">
        {cars.map((car) => (
          <Card
            className="cursor-pointer mx-auto w-52 sm:w-52 md:w-60 lg:w-72 my-5"
            key={car.id}
            onClick={() => navigate(`/car-details/${car.id}`)}
          >
            <CardHeader color="amber" className="relative h-56 mx-0.5">
              <img
                src={car.image}
                alt="img-blur-shadow"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                {car.name}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography variant="small">
                $
                {car.daily_price}
              </Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                {car.model}
              </Typography>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;

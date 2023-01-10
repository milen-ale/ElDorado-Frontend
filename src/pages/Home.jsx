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
    <Loader />
  ) : (
    <div className="flex flex-col items-center w-[75vw]">
      <div>
        <Typography
          variant="h1"
          className="text-center text-xl sm:text-2xl md:text-3xl"
        >
          Latest Models
        </Typography>
        <hr className="border border-b-2 mb-5 bg-blue-gray-900" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-28 grid-">
        {cars.map((car) => (
          <Card
            className="cursor-pointer  w-52 sm:w-52 md:w-60 lg:w-72 my-5"
            key={car.id}
            onClick={() => navigate(`/car-details/${car.id}`)}
          >
            <CardHeader color="blue" className="relative h-56">
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
    </div>
  );
};

export default Home;

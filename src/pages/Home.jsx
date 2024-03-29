import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { Button, Carousel } from 'antd';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { allCars, allStatus } from '../redux/Home/home';

const Home = () => {
  document.title = 'ElDorado | Home';
  const [width, setWidth] = useState(window.innerWidth);
  const cars = useSelector(allCars);
  const status = useSelector(allStatus);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return status === 'loading' ? (
    <Loader />
  ) : (
    <>
      <div>
        <Typography
          variant="h1"
          className="uppercase font-osans font-extralight tracking-widest mb-3 text-center text-xl sm:text-2xl md:text-3xl border-b-2 pb-2"
        >
          Latest Models
        </Typography>
      </div>
      <div className="relative max-w-[800px] mx-auto flex flex-col">
        <Carousel
          className="mx-auto max-w-[500px]"
          pauseOnHover
          pauseOnDotsHover
          autoplay
          effect="fade"
          draggable
          ref={ref}
        >
          {cars.map((car) => (
            <Card
              key={car.id}
              className="cursor-pointer my-5"
              onClick={() => navigate(`/car-details/${car.id}`)}
            >
              <CardHeader color="amber" className="relative h-56 mx-0.5">
                <img
                  src={car.image}
                  alt="img-blur-shadow"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="px-2 text-center">
                <Typography variant="h5" className="mb-2 whitespace-pre-wrap">
                  {car.name}
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-between py-3"
              >
                <Typography variant="small" className="font-semibold">
                  $
                  {car.daily_price}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="flex gap-1 font-semibold"
                >
                  {car.model}
                </Typography>
              </CardFooter>
            </Card>
          ))}
        </Carousel>
        <Button
          onClick={() => ref.current.prev()}
          className="group rounded-full bg-amber-400 drop-shadow-md shadow-amber-500 flex justify-center items-center border-none absolute top-1/2 left-5"
          icon={
            <ChevronLeftIcon className="stroke-gray-600 group-hover:-translate-x-0.5 duration-300 group-active:stroke-white" />
          }
        />
        <Button
          onClick={() => ref.current.next()}
          className="group rounded-full bg-amber-400 drop-shadow-md shadow-amber-500 flex  justify-center items-center border-none absolute top-1/2 right-5"
          icon={
            <ChevronRightIcon className="stroke-gray-600 group-hover:translate-x-0.5 duration-300 group-active:stroke-white" />
          }
        />
        <Button
          onClick={() => ref.current.goTo(0)}
          className="group active:rotate-180 duration-300 rounded-full bg-amber-400 self-center drop-shadow-md shadow-amber-500 flex  justify-center items-center border-none"
          icon={
            <ArrowPathIcon className="stroke-gray-600 duration-300 group-active:stroke-white" />
          }
        />
      </div>
    </>
  );
};

export default Home;

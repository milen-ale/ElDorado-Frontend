import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
// import { Carousel } from 'antd';
import Carousel from 'react-grid-carousel';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { allCars, allStatus } from '../redux/Home/home';

const Home = () => {
  document.title = 'ElDorado | Home';
  const [width, setWidth] = useState(window.innerWidth);
  const [cols, setCols] = useState(3);
  const cars = useSelector(allCars);
  const status = useSelector(allStatus);
  const navigate = useNavigate();

  const handleCarouselCols = () => {
    if (width < 500) {
      setCols(1);
    } else if (width < 1024) {
      setCols(2);
    } else {
      setCols(3);
    }
  };

  useEffect(() => {
    handleCarouselCols();
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, cols]);

  return status === 'loading' ? (
    <div className="flex items-center justify-center h-96 w-[75vw]">
      <Loader />
    </div>
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
      <Carousel cols={cols} gap={10}>
        {cars.map((car) => (
          <Carousel.Item key={car.id}>
            <Card
              className="w-full cursor-pointer my-5"
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
                <Typography variant="h5" className="mb-2 whitespace-nowrap">
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
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  Typography,
  Input,
  Button,
  Textarea,
} from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCar, allMessages } from '../redux/Home/home';
import { useAuthUser } from '../redux/Auth/useAuthUser';

const AddCar = () => {
  const defaultImg = 'https://www.fluttercampus.com/img/4by3.webp';
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [model, setModel] = useState('');
  const [image, setImage] = useState('');
  const [available, setAvailable] = useState(true);

  const message = useSelector(allMessages);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useAuthUser();

  const handleChange = (e) => {
    const {
      target: { name: input, value, checked },
    } = e;
    if (input === 'carName') setName(value);
    if (input === 'model') setModel(value);
    if (input === 'price') setPrice(value);
    if (input === 'description') setDescription(value);
    if (input === 'image') setImage(value);
    if (input === 'available') setAvailable(checked);
  };

  document.title = 'ElDorado | AddCar';

  const handleAddCar = () => {
    const car = {
      name,
      description,
      daily_price: price,
      model,
      image,
      available,
    };
    dispatch(addCar({ ownerId: currentUser.id, car }));
  };

  const checkAuthUser = () => {
    if (Object.keys(currentUser).length === 0) navigate('/login');
  };

  const setDefaultImage = () => {
    if (image === '') setImage(defaultImg);
  };

  const navigateDeleteCar = () => {
    if (message === 'Car has been successfully created') navigate('/delete_car');
  };

  useEffect(() => {
    setDefaultImage();
    navigateDeleteCar();
    checkAuthUser();
  }, [image, message, currentUser]);

  return (
    <Card className="mt-5 mb-64 max-w-[450px] mx-auto bg-white/90 backdrop-blur-md">
      <CardHeader
        variant="gradient"
        className="mb-4 grid h-28 place-items-center text-white bg-black/50 backdrop-blur-md"
      >
        <Typography
          variant="h3"
          color="white"
          className="font-osans uppercase tracking-widest font-light"
        >
          Add a Car
        </Typography>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Kind Note
        </Typography>
        <Typography className="text-left">
          Kindly fill in the form below to add a car to the list of available
          cars.
        </Typography>
      </CardBody>
      <CardBody className="flex flex-col gap-4">
        <div>
          <img src={image} alt="car-preview" />
        </div>
        <Input
          onChange={handleChange}
          name="carName"
          color="amber"
          size="md"
          label="Name"
        />
        <Input
          onChange={handleChange}
          name="image"
          color="amber"
          size="md"
          label="Put a Car Image link"
        />
        <Input
          onChange={handleChange}
          name="model"
          color="amber"
          size="md"
          label="Model"
        />
        <Input
          onChange={handleChange}
          name="price"
          type="number"
          color="amber"
          size="lg"
          label="Daily Price"
        />
        <Textarea
          onChange={handleChange}
          name="description"
          color="amber"
          label="Description"
          size="md"
        />
        <Checkbox
          onChange={handleChange}
          name="available"
          color="amber"
          defaultChecked
          label={available ? 'Available' : "Don't put in list"}
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          onClick={handleAddCar}
          type="button"
          color="amber"
          variant="gradient"
          fullWidth
          className="capitalize"
        >
          Add Car
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AddCar;

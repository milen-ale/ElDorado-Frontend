import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from '@material-tailwind/react';
import { authenticatedUser, signUp, allStatus } from '../redux/Auth/authSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const currentUser = useSelector(authenticatedUser);
  const status = useSelector(allStatus);
  console.log(currentUser, status);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleChange = (e) => {
    const {
      target: { name: input, value },
    } = e;
    if (input === 'name') setName(value);
    if (input === 'email') setEmail(value);
    if (input === 'password') setPassword(value);
    if (input === 'passwordConfirmation') setPasswordConfirmation(value);
  };

  const handleSignUp = () => {
    const user = {
      name,
      email,
      password,
      passwordConfirmation,
    };
    dispatch(signUp(user));
  };

  return (
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Register
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input onChange={handleChange} name="name" label="Name" size="lg" />
        <Input onChange={handleChange} name="email" label="Email" size="lg" />
        <Input
          onChange={handleChange}
          type="password"
          name="password"
          label="Password"
          size="lg"
        />
        <Input
          onChange={handleChange}
          type="password"
          name="passwordConfirmation"
          label="Confirm Password"
          size="lg"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={handleSignUp} variant="gradient" fullWidth>
          Sign Up
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Have have an account?
          <Typography
            as="a"
            href="/login"
            variant="small"
            color="blue"
            className="ml-1 font-bold"
          >
            Sign in
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default Register;

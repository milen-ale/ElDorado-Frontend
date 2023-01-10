import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from '@material-tailwind/react';
import { authenticatedUser, signUp } from '../redux/Auth/authSlice';
import { useToken } from '../redux/Auth/useAuthUser';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const currentUser = useSelector(authenticatedUser);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isTokenSet = useToken();

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

  useEffect(() => {
    if (isTokenSet) navigate('/');
  }, [isTokenSet, currentUser]);

  return (
    <Card className="w-96 mt-5 mx-auto bg-white/90 backdrop-blur-md">
      <CardHeader
        variant="gradient"
        color="amber"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Register
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input
          color="amber"
          onChange={handleChange}
          name="name"
          label="Name"
          size="lg"
        />
        <Input
          color="amber"
          onChange={handleChange}
          name="email"
          label="Email"
          size="lg"
        />
        <Input
          color="amber"
          onChange={handleChange}
          type="password"
          name="password"
          label="Password"
          size="lg"
        />
        <Input
          color="amber"
          onChange={handleChange}
          type="password"
          name="passwordConfirmation"
          label="Confirm Password"
          size="lg"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          color="amber"
          onClick={handleSignUp}
          variant="gradient"
          fullWidth
        >
          Sign Up
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Have have an account?
          <Typography
            as="a"
            href="/login"
            variant="small"
            color="amber"
            className="ml-1 font-bold hover:text-gray-600"
          >
            Sign in
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default Register;

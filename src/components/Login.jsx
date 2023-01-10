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
import { authenticatedUser, signIn } from '../redux/Auth/authSlice';
import { useToken } from '../redux/Auth/useAuthUser';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const currentUser = useSelector(authenticatedUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTokenSet = useToken();

  const handleChange = (e) => {
    const {
      target: { name: input, value },
    } = e;
    if (input === 'email') setEmail(value);
    if (input === 'password') setPassword(value);
  };

  const handleSignIn = () => {
    const user = {
      email,
      password,
    };
    dispatch(signIn(user));
  };

  useEffect(() => {
    if (isTokenSet) navigate('/');
  }, [isTokenSet, currentUser]);

  return (
    <Card className="mt-5 w-96 mx-auto bg-white/90 backdrop-blur-md">
      <CardHeader
        variant="gradient"
        color="amber"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Login
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input
          color="amber"
          onChange={handleChange}
          name="email"
          label="Email"
          size="lg"
        />
        <Input
          color="amber"
          type="password"
          onChange={handleChange}
          name="password"
          label="Password"
          size="lg"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          color="amber"
          onClick={handleSignIn}
          variant="gradient"
          fullWidth
        >
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="/register"
            variant="small"
            color="amber"
            className="ml-1 font-bold hover:text-gray-600"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default Login;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
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

  document.title = 'ElDorado | Login';
  return (
    <Card className="mt-5 max-w-sm mx-auto bg-white/90 backdrop-blur-md">
      <CardHeader
        variant="gradient"
        className="bg-amber-500 mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white" className="font-osans uppercase tracking-widest font-light">
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
          <NavLink
            to="/register"
            className="ml-1 font-bold hover:text-gray-600 text-amber-700"
          >
            Sign up
          </NavLink>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default Login;

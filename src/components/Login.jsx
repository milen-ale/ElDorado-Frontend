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
import { authenticatedUser, signIn, allStatus } from '../redux/Auth/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const currentUser = useSelector(authenticatedUser);
  const status = useSelector(allStatus);
  console.log(currentUser, status);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

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

  return (
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Login
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input onChange={handleChange} name="email" label="Email" size="lg" />
        <Input
          type="password"
          onChange={handleChange}
          name="password"
          label="Password"
          size="lg"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={handleSignIn} variant="gradient" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="/register"
            variant="small"
            color="blue"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default Login;

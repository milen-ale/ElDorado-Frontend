import React, { useEffect } from 'react';
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
import { Field, Form, Formik } from 'formik';
import { object, ref, string } from 'yup';
import {
  authenticatedUser,
  signUp,
  allMessages,
  allStatus,
} from '../redux/Auth/authSlice';
import { useToken } from '../redux/Auth/useAuthUser';
import Alert from './Alert';

const Register = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const currentUser = useSelector(authenticatedUser);
  const message = useSelector(allMessages);
  const status = useSelector(allStatus);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isTokenSet = useToken();

  const handleSignUp = (user) => {
    dispatch(signUp(user));
  };

  useEffect(() => {
    if (isTokenSet) navigate('/');
  }, [isTokenSet, currentUser]);

  document.title = 'ElDorado | Register';
  return (
    <>
      {status === 'failed' && <Alert message={message} />}
      <Card className="w-96 mt-5 mx-auto bg-white/90 backdrop-blur-md">
        <CardHeader
          variant="gradient"
          color="amber"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography
            variant="h3"
            color="white"
            className="font-osans uppercase tracking-widest font-light"
          >
            Register
          </Typography>
        </CardHeader>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSignUp}
          validationSchema={object({
            name: string()
              .matches(
                /^(?=.{3,20}$)(?![a-z])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/,
                'Name should have at least 3 characters and should not any number!',
              )
              .required('Name is required!'),
            email: string()
              .required('Email is required!')
              .email('Invalid Email!'),
            password: string()
              .required('Password is required!')
              .matches(
                /^[a-zA-Z0-9!@#$%^&* ]{6,20}$/,
                'Password must contain at least 6 characters!',
              ),
            passwordConfirmation: string()
              .oneOf([ref('password'), null], 'Password not match!')
              .required('Confirm Password is required!'),
          })}
        >
          {({
            errors, touched, dirty, isValid,
          }) => (
            <Form>
              <CardBody className="flex flex-col gap-4">
                <Field
                  as={Input}
                  color="amber"
                  name="name"
                  label="Name"
                  size="lg"
                  error={Boolean(errors.name) && Boolean(touched.name)}
                />
                <span className="text-gray-600 text-xs">
                  {Boolean(touched.name) && errors.name}
                </span>
                <Field
                  as={Input}
                  color="amber"
                  name="email"
                  label="Email"
                  size="lg"
                  error={Boolean(errors.email) && Boolean(touched.email)}
                />
                <span className="text-gray-600 text-xs">
                  {Boolean(touched.email) && errors.email}
                </span>
                <Field
                  as={Input}
                  color="amber"
                  type="password"
                  name="password"
                  label="Password"
                  size="lg"
                  error={Boolean(errors.password) && Boolean(touched.password)}
                />
                <span className="text-gray-600 text-xs">
                  {Boolean(touched.password) && errors.password}
                </span>
                <Field
                  as={Input}
                  color="amber"
                  type="password"
                  name="passwordConfirmation"
                  label="Confirm Password"
                  size="lg"
                  error={
                    Boolean(errors.passwordConfirmation)
                    && Boolean(touched.passwordConfirmation)
                  }
                />
                <span className="text-gray-600 text-xs">
                  {Boolean(touched.passwordConfirmation)
                    && errors.passwordConfirmation}
                </span>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  color="amber"
                  variant="gradient"
                  fullWidth
                  type="submit"
                  disabled={!isValid || !dirty}
                >
                  Sign Up
                </Button>
                <Typography
                  variant="small"
                  className="mt-6 flex justify-center"
                >
                  Have have an account?
                  <NavLink
                    to="/login"
                    className="ml-1 font-bold hover:text-gray-600 text-amber-700"
                  >
                    Sign in
                  </NavLink>
                </Typography>
              </CardFooter>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default Register;

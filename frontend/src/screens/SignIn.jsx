import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Toast from "../components/Toast";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const formdata = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const { isLoggedIn, isLoading, isError, errorMsg } = useSelector(
    (state) => state.users
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/blog");
    }
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
    setUser({
      email: "",
      password: "",
    })
  };

  return (
    <div className='h-screen w-full bg-primary flex justify-center items-center flex-col'>
      <div className=' flex w-6/12 border-black flex-col box-shadow-container justify-center gap-3 py-5 px-11 items-center'>
        <div className='pb-4 flex justify-center items-center flex-col'>
          <h1 className='text-white text-5xl'>LOGIN</h1>
          {isLoading ? <Loader /> : <></>}
        </div>
        <div className='tost'>
          {isError ? (
            <Toast message={errorMsg} position={"TOP-LEFT"} type={"error"} />
          ) : (
            <></>
          )}
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className='flex flex-col justify-center items-center gap-5 w-full'
        >
          <label className='text-white' htmlFor='email'>
            Email
          </label>
          <input
            className='bg-primary box-shadow-input mx-5 rounded-full w-full py-4 ps-5 text-white'
            type='email'
            name='email'
            autoComplete='off'
            placeholder='Enter Your Email Here'
            onChange={(e) => {
              formdata(e);
            }}
            value={user.email}
          />
          <label className='text-white' htmlFor='password'>
            password
          </label>
          <input
            className='bg-primary box-shadow-input mx-5 rounded-full w-full py-4 ps-5 text-white'
            type='password'
            name='password'
            autoComplete='off'
            placeholder='Enter Your Password Here'
            onChange={(e) => {
              formdata(e);
            }}
            value={user.password}
          />
          <button
            disabled={isLoading}
            className='bg-neutral-800 py-2 px-5 my-2 text-white rounded-full box-shadow-button hover:bg-black'
          >
            Submit
          </button>
        </form>
        <div>
          <p className='text-white'>
            Don't have an account?{" "}
            <NavLink className={"signup text-lg"} to={"/auth/signup"}>
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

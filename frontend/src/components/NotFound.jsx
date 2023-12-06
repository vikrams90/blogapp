import { FaQuestion, FaEarthAsia } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section className='min-h-screen w-full flex items-center justify-center gap-3'>
      <div>
        <FaQuestion className='text-5xl' />
      </div>
      <div className='text-2xl leading-10'>
        <h1>Error 404</h1>
        <h1>Looking for something?</h1>
        <h1>Sorry you've Landed on the wrong side of moon</h1>
        <h1 className='flex gap-1 items-center'>
          Go back to <FaEarthAsia />{" "}
          <NavLink to={"/blog"} className={"text-red-600"}>
            Home
          </NavLink>
        </h1>
      </div>
    </section>
  );
};

export default NotFound;

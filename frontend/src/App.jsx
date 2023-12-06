import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./screens/SignIn";
import Auth from "./components/Auth";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import AuthMenu from "./components/AuthMenu";
import Blog from "./screens/Blog";
import PrivateRoute from "./components/PrivateRoute";
import BlogLayout from "./components/BlogLayout";
import AllBlog from "./components/AllBlog";
import AllBlogLayout from "./screens/AllBlogLayout";
import ViewBlog from "./screens/ViewBlog";
import NotFound from "./components/NotFound";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import HelpScreen from "./screens/HelpScreen";
import SettingLayout from "./screens/SettingLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />} errorElement={<NotFound/>}>
      <Route index element={<AuthMenu />} />
      <Route path='auth' element={<Auth />}>
        <Route index element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
      <Route
        path='blog'
        element={
          <PrivateRoute>
            <BlogLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Blog />} />
        <Route path='all' element={<AllBlogLayout />}>
          <Route index element={<AllBlog />} />
          <Route path=':id' element={<ViewBlog/>} />
        </Route>
        <Route path="help" element={ <HelpScreen/>} />
        <Route path="setting" element={ <SettingLayout/>} />
        <Route path="about" element={ <AboutScreen/>} />
        <Route path="contact" element={ <ContactScreen/>} />
      </Route>

      <Route />
      {/* <Route path='*' element={<h1 className='text-4xl'>not found</h1>} /> */}
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Toast from "../components/Toast";
import { useDispatch } from "react-redux";
import { logOut } from "../features/user/userSlice";

const Home = () => {
  const [isOnline, SetIsOnline] = useState(navigator.onLine);
  const [lastActivity, setLastActivity] = useState(new Date());
  const [IsPageVisible, setIsPageVisible] = useState(new Date());
  const dispatch = useDispatch()

  const IDLE_TIMEOUT = 600000

  useEffect(() => {
    const handleStatus = () => {
      SetIsOnline(navigator.onLine);
    };
    window.addEventListener("online", handleStatus);
    window.addEventListener("offline", handleStatus);

    return () => {
      window.removeEventListener("online", handleStatus);
      window.removeEventListener("offline", handleStatus);
    };
  }, [isOnline]);


  useEffect(() => {
    const checkVisibility = () => {
      const isVisible = document.hidden === false && document.visibilityState === 'visible';
      setIsPageVisible(isVisible);
      
      if (isVisible) {
        setLastActivity(new Date());
      }
      console.log(isVisible, " ",lastActivity)
    };

    document.addEventListener('visibilitychange', checkVisibility);
    let timeoutId
    if (!IsPageVisible) {
       timeoutId = setTimeout(() => {
        // User has been inactive for 30 minutes, log them out
        console.log('User has been inactive for 30 minutes, logging out...');
        dispatch(logOut())
      }, IDLE_TIMEOUT);
    }

    if (IsPageVisible) {
      console.log("timeout canceled")
      clearTimeout(timeoutId);
    }
    
    return () => {
      console.log("cleanup")
      document.removeEventListener('visibilitychange', checkVisibility);
      console.log("timeout canceled")
      clearTimeout(timeoutId);
    };
  }, [IsPageVisible]);

  return (
    <div >
      {isOnline ? (
        <></>
      ) : (
        <Toast message={"no internet connection"} time={2000} />
      )}
      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

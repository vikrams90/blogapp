import React, { useEffect, useState } from "react";

const Toast = ({ message, position, time, type }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, time);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  let className =
    "toast box-shadow-container absolute z-10 bg-white px-3 py-2 ";
  switch (type) {
    case "error":
      className = className + " text-red-600";
      break;
    case "success":
      className = className + " text-green-600";
      break;
    case "default":
      className = className + " text-black";
      break;
    default:
      className = className + " text-black";
      break;
  }

  switch (position) {
    case "TOP-LEFT":
      return (
        <>
          {isVisible ? (
            <div className={className + " top-3 left-6"}>{message}</div>
          ) : null}
        </>
      );
    case "TOP-RIGHT":
      return (
        <>
          {isVisible ? (
            <div className={className + " top-3 right-6"}>{message}</div>
          ) : null}
        </>
      );
  }
};

Toast.defaultProps = {
  meassage: "test my custom toast",
  position: "TOP-RIGHT",
  time: 2000,
  type: "default",
};

export default Toast;

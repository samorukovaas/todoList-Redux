import React from "react";
import { useSelector } from "react-redux";
import { mainPageTextSelector } from "../../Containers/Main/selectors";

const Main = () => {
  const mainPageText = useSelector(mainPageTextSelector);
  return <div>{mainPageText}</div>;
};

export default Main;

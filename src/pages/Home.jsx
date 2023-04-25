import { HomeContext } from "../context/homeContext";
import { useState } from "react";
import { HomeChild } from "../components/HomeChild";

export const Home = () => {
  const [userName, setUserName] = useState("PedroTech");

  return (
    <>
      <HomeContext.Provider value={{ userName, setUserName }}>
        {userName}
        <HomeChild />
      </HomeContext.Provider>
    </>
  );
};

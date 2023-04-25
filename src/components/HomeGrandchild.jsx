import { useContext } from "react";
import { HomeContext } from "../context/homeContext";

export const HomeGrandchild = () => {
  const { setUserName } = useContext(HomeContext);

  return (
    <>
      <button
        onClick={() => {
          setUserName("PedroTechnologies");
        }}
      >
        Change Username
      </button>
    </>
  );
};

import { useContext } from "react";
import { ContactContext } from "../context/contactContext";

export const ContactChild2 = () => {
  const {setUserName} = useContext(ContactContext);
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

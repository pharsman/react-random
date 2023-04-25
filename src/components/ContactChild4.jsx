import { useContext } from "react";
import { ContactContext } from "../context/contactContext";

export const ContactChild4 = () => {
  const { setCount } = useContext(ContactContext);
  return (
    <>
      <button
        onClick={() => {
          setCount((e) => e + 1);
        }}
      >
        Change Count
      </button>
    </>
  );
};

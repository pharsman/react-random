import { useContext } from "react";
import { ContactContext } from "../context/contactContext";

export const ContactChild3 = () => {
  const { count } = useContext(ContactContext);
  return <h1>{count}</h1>;
};

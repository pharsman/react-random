import { useContext } from "react";
import { ContactContext } from "../context/contactContext";

export const ContactChild1 = () => {
  const { userName } = useContext(ContactContext);
  return <h1>{userName}</h1>;
};

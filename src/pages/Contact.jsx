import { useState } from "react";
import { ContactContext } from "../context/contactContext";
import { ContactChild1 } from "../components/ContactChild1";
import { ContactChild2 } from "../components/ContactChild2";
import { ContactChild3 } from "../components/ContactChild3";
import { ContactChild4 } from "../components/ContactChild4";

export const Contact = () => {
  const [userName, setUserName] = useState("PedroTech");
  const [count, setCount] = useState(0);
  return (
    <>
      <ContactContext.Provider
        value={{ userName, setUserName, count, setCount }}
      >
        <ContactChild1 />
        <ContactChild2 />
        <ContactChild3 />
        <ContactChild4 />
      </ContactContext.Provider>
    </>
  );
};

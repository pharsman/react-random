import { createContext, useState } from "react";

export const ContactContext = createContext(null);



// example
export const ContactContextProvider = ({ props }) => {
  const [userProfileInfo, setUserProfileInfo] = useState(null);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [listOfFriends, setListOfFriends] = useState([]);
  const [newProfileInfo, setNewProfileInfo] = useState(userProfileInfo);

  const value = {
    userProfileInfo,
    setUserProfileInfo,
    isOpenUpdateModal,
    setIsOpenUpdateModal,
    listOfFriends,
    setListOfFriends,
    newProfileInfo,
    setNewProfileInfo,
  };

  return (
    <ContactContext.Provider value={value}>{props}</ContactContext.Provider>
  );
};

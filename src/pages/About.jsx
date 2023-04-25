import axios from "axios";
import { useState, useEffect } from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";

export const About = () => {
  const [dog, setDog] = useState([]);

  const navigation = useNavigation();
  const navigate = useNavigate(); // router push
  const dogUrl = useLoaderData();


  useEffect(() => {
    setDog(dogUrl);
  }, []);

  const goToUrl = () => {
    navigate({ pathname: "/dogUrl", search: dog }, { state: dog });
  };

  if (navigation.state === "loading") {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="img">
      <img
        src={dogUrl}
        alt="doggy"
        onClick={() => {
          goToUrl();
        }}
      />
    </div>
  );
};

export const dataLoader = async () => {
  const resp = await axios.get("https://random.dog/woof.json");
  return resp.data.url;
};

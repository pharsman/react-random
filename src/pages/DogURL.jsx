import { useLocation, useNavigate } from "react-router-dom";

export const DogURL = () => {
  // route.query
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <span>this is dog {location.state}</span>
    </>
  );
};

import { useNavigate } from "react-router-dom";

export const About = () => {
  const Navigate = useNavigate();
  return (
    <div>
      About us :<p>We are best</p>
      <p>Thanks</p>
      <button
        onClick={() => {
          Navigate("/product/refrigirator");
        }}
      >
        Submit
      </button>
    </div>
  );
};

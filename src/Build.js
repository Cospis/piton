import { BsArrowRightShort } from "react-icons/bs";
import Button from "react-bootstrap/Button";
const Build = () => {
  return (
    <div className="build-content">
      <p>Enough Talk, Let's Build Something Together.</p>
      <Button variant="primary" className="butt">
        Learn More <BsArrowRightShort size={30} />
      </Button>
    </div>
  );
};

export default Build;

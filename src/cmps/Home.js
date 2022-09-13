import Button from "react-bootstrap/Button";
import Grp from "../Grp.png";
import { BsArrowRightShort } from "react-icons/bs";
const Home = () => {
  return (
    <div className="home">
      <p>
        A creative agency of designers & strategists that bring brands to life.
      </p>
      <Button variant="primary" className="butt">
        Learn More <BsArrowRightShort size={30} />
      </Button>
      <img src={Grp} alt="group" className="grpimg" />
    </div>
  );
};

export default Home;

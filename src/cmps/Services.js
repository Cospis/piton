import { BsArrowRightShort } from "react-icons/bs";
import Card from "react-bootstrap/Card";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services">
        <h1>Services</h1>
      </div>

      <div className="services-cards">
        <Card
          style={{
            height: "15rem",
            width: "15rem",
            backgroundColor: "#050c28",
          }}
        >
          <Card.Body>
            <Card.Title>Brand Identity</Card.Title>
            <Card.Text>
              Let us collaborate to build a distinctive and unique brand.
            </Card.Text>
            <BsArrowRightShort size={30} />
          </Card.Body>
        </Card>
        <Card
          style={{
            height: "15rem",
            width: "15rem",
            backgroundColor: "#050c28",
          }}
        >
          <Card.Body>
            <Card.Title>Website Design</Card.Title>
            <Card.Text>
              Information Hierarchy. User Experience. Visuals. Graphics.
              Prototypes. So much goes into crafting a beautiful website.
            </Card.Text>
            <BsArrowRightShort size={30} />
          </Card.Body>
        </Card>
        <Card
          style={{
            height: "15rem",
            width: "15rem",
            backgroundColor: "#050c28",
          }}
        >
          <Card.Body>
            <Card.Title>Social Media Marketing</Card.Title>
            <Card.Text>
              Cut through the noise with targeted messages that wows the eyes
              and stuns the attention span.
            </Card.Text>
            <BsArrowRightShort size={30} />
          </Card.Body>
        </Card>
        <Card
          style={{
            height: "15rem",
            width: "15rem",
            backgroundColor: "#050c28",
          }}
        >
          <Card.Body>
            <Card.Title>Search Engine Optimisation</Card.Title>
            <Card.Text>
              When someone asks a question online, make sure you are the right
              answer.
            </Card.Text>
            <BsArrowRightShort size={30} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Services;
